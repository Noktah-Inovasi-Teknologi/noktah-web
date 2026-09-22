<template>
  <!--
    A floating glass capsule rather than an edge-to-edge bar.
    The glass belongs on the thing content passes *behind*.
  -->
  <header class="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
    <nav
      class="glass mx-auto max-w-7xl rounded-full transition-[box-shadow,background-color] duration-500"
      :class="scrolled ? 'glass-thick' : ''"
    >
      <div class="flex h-14 items-center justify-between gap-3 pl-3 pr-3 sm:pl-4 sm:pr-4">
        <!-- Logo / wordmark -->
        <NuxtLink :to="localePath('/')" class="flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <!-- No nested glass: a backdrop-filter inside a backdrop-filter
               samples its parent's already-blurred output and muddies it. -->
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/50 p-1 ring-1 ring-white/60 sm:h-10 sm:w-10 dark:bg-white/10 dark:ring-white/15"
          >
            <img
              src="/images/noktah-logo.png"
              :alt="t('common.logoAlt')"
              class="h-full w-full object-contain"
            >
          </span>
          <span
            class="text-lg font-bold italic text-gray-900 sm:text-xl dark:text-white"
            style="font-family: 'Montserrat', sans-serif;"
          >
            NOKTAH
          </span>
        </NuxtLink>

        <!-- Desktop navigation -->
        <div class="hidden items-center gap-1 md:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="localePath(item.to)"
            class="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-black/[0.04] hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
            active-class="!bg-primary-500 !text-white shadow-[0_2px_12px_rgba(14,165,233,0.45)]"
          >
            {{ t(item.key) }}
          </NuxtLink>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Language switcher. Uses switchLocalePath so the reader stays
               on the same page when changing language, and sets the
               detection cookie so the choice sticks. -->
          <div class="flex items-center rounded-full bg-black/[0.04] p-0.5 dark:bg-white/10">
            <NuxtLink
              v-for="l in locales"
              :key="l.code"
              :to="switchLocalePath(l.code)"
              class="rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors duration-200"
              :class="l.code === locale
                ? 'bg-white text-gray-900 shadow-sm dark:bg-white/20 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
              :aria-label="l.name"
              :aria-current="l.code === locale ? 'true' : undefined"
            >
              {{ l.code }}
            </NuxtLink>
          </div>

          <ClientOnly>
            <div class="hidden items-center gap-1.5 sm:flex">
              <UIcon name="i-heroicons-sun" class="text-base text-amber-500 sm:text-lg" />
              <USwitch
                :model-value="$colorMode.value === 'dark'"
                color="primary"
                size="sm"
                :aria-label="t('nav.toggleTheme')"
                @update:model-value="$colorMode.preference = $event ? 'dark' : 'light'"
              />
              <UIcon name="i-heroicons-moon" class="text-base text-gray-500 sm:text-lg dark:text-gray-300" />
            </div>
          </ClientOnly>

          <UButton
            :icon="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            variant="ghost"
            color="neutral"
            size="sm"
            class="md:hidden"
            :aria-expanded="mobileMenuOpen"
            :aria-label="t('nav.toggleMenu')"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>
    </nav>

    <!-- Mobile menu: its own floating pane, so it reads as a separate
         sheet of glass rather than a dropdown welded to the bar. -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="glass glass-thick mx-auto mt-2 max-w-7xl rounded-3xl p-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="localePath(item.to)"
            class="block rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-black/[0.04] hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
            active-class="!bg-primary-500 !text-white"
            @click="mobileMenuOpen = false"
          >
            {{ t(item.key) }}
          </NuxtLink>

          <div class="mt-2 flex items-center justify-between border-t border-white/25 px-4 pt-3 dark:border-white/10">
            <span class="text-sm text-gray-600 dark:text-gray-400">{{ t('nav.toggleTheme') }}</span>
            <ClientOnly>
              <USwitch
                :model-value="$colorMode.value === 'dark'"
                color="primary"
                size="sm"
                :aria-label="t('nav.toggleTheme')"
                @update:model-value="$colorMode.preference = $event ? 'dark' : 'light'"
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const mobileMenuOpen = ref(false)

const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/brands', key: 'nav.brands' },
  { to: '/contact', key: 'nav.contact' },
]

// The bar thickens once content is behind it — Apple's toolbars are
// nearly clear at rest and densify as you scroll, which keeps labels
// legible over arbitrary content.
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
