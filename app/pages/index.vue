<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Breathing Circle Animation -->
      <div class="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div class="breathing-circle" />
      </div>

      <div class="text-center z-10 max-w-5xl px-4">
        <div class="mb-8">
          <img
            src="/images/noktah-logo.png"
            :alt="t('common.logoAlt')"
            class="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-contain"
          >

          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-none">
            <span class="font-bold italic" style="font-family: 'Montserrat', sans-serif;">
              NOKTAH
            </span>
          </h1>

          <div class="overflow-hidden mb-4">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-500">
              {{ t('home.hero.tagline') }}
            </p>
          </div>

          <div class="overflow-hidden mb-12">
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              {{ t('home.hero.description') }}
            </p>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="flex flex-col items-center animate-fade-in-up animation-delay-1200 mb-8">
          <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center mb-1 sm:mb-2 animate-bounce">
            <div class="w-1 h-2 sm:h-3 bg-gray-400 rounded-full animate-ping mt-1 sm:mt-2" />
          </div>
          <UIcon name="i-heroicons-chevron-down" class="text-lg sm:text-xl text-gray-400" />
        </div>

        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-1500 px-4">
          <NuxtLink :to="localePath('/brands')">
            <UButton size="lg" class="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl rounded-full">
              <UIcon name="i-heroicons-rocket-launch" class="mr-2 animate-bounce" />
              {{ t('home.hero.ctaBrands') }}
            </UButton>
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')">
            <UButton variant="outline" size="lg" class="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-full">
              <UIcon name="i-heroicons-users" class="mr-2" />
              {{ t('home.hero.ctaJoin') }}
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About/Vision Section -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="home.vision.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('home.vision.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('home.vision.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <UCard
            v-for="value in values"
            :key="value.key"
            class="glass glass-interactive text-center p-4 sm:p-6 rounded-2xl"
          >
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon :name="value.icon" class="text-4xl" :class="value.color" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t(`home.vision.${value.key}.title`) }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ t(`home.vision.${value.key}.body`) }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Brand Portfolio Section -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="home.brands.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('home.brands.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {{ t('home.brands.description') }}
          </p>

        </div>

        <TransitionGroup
          name="brand-filter"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <a
            v-for="brand in brandList"
            :key="brand.id"
            :href="brand.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <UCard class="glass glass-interactive rounded-2xl cursor-pointer">
              <template #header>
                <div class="relative">
                  <div class="absolute top-4 right-4">
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                  </div>
                  <div class="h-48 rounded-t-3xl flex items-center justify-center" :class="brand.bg">
                    <UIcon :name="brand.icon" class="text-6xl text-white" />
                  </div>
                </div>
              </template>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ brand.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ t(`home.brands.${brand.id}`) }}</p>
              </div>
            </UCard>
          </a>
        </TransitionGroup>
      </div>
    </section>

    <!-- Innovation Focus Areas -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="home.crossField.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('home.crossField.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('home.crossField.description') }}
          </p>
        </div>

        <div class="relative">
          <div class="glass grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 rounded-2xl p-4 sm:p-6 lg:p-8 relative z-10">
            <div
              v-for="cat in categories"
              :key="cat.key"
              class="text-center group hover:bg-white/30 dark:hover:bg-white/6 rounded-2xl p-3 sm:p-4 lg:p-6 transition-colors duration-300 cursor-pointer"
            >
              <div
                class="glass-thin w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 border rounded-full flex items-center justify-center transition-colors duration-300"
                :class="cat.border"
              >
                <UIcon :name="cat.icon" class="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300" :class="cat.color" />
              </div>
              <h3 class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {{ t(`home.crossField.${cat.key}.title`) }}
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ t(`home.crossField.${cat.key}.body`) }}
              </p>
            </div>
          </div>
        </div>

        <div class="glass text-center rounded-2xl p-8 max-w-4xl mx-auto relative z-10">
          <div class="flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-light-bulb" class="text-3xl text-yellow-500 mr-3" />
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('home.crossField.approachTitle') }}</h4>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">
            {{ t('home.crossField.approachQuote') }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('home.crossField.approachNote') }}
          </p>
        </div>
      </div>
    </section>

    <!-- For Different Audiences -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="home.audiences.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('home.audiences.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('home.audiences.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <UCard
            v-for="a in audiences"
            :key="a.key"
            class="glass glass-interactive text-center p-6 lg:p-8 rounded-2xl"
          >
            <template #header>
              <div class="mb-6">
                <UIcon :name="a.icon" class="text-5xl mx-auto mb-4" :class="a.color" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t(`home.audiences.${a.key}.title`) }}</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ t(`home.audiences.${a.key}.body`) }}
            </p>
            <NuxtLink :to="localePath(a.to)">
              <UButton class="w-full rounded-full" variant="soft" :color="a.buttonColor">
                {{ t(`home.audiences.${a.key}.cta`) }}
                <UIcon name="i-heroicons-arrow-right" class="ml-2" />
              </UButton>
            </NuxtLink>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Culture/Values -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <i18n-t keypath="home.culture.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
              <template #accent>
                <span class="text-primary-500">{{ t('home.culture.headingAccent') }}</span>
              </template>
            </i18n-t>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {{ t('home.culture.description') }}
            </p>

            <div class="glass space-y-4 sm:space-y-6 rounded-2xl p-4 sm:p-6">
              <div
                v-for="c in cultureItems"
                :key="c.key"
                class="flex items-start space-x-4"
              >
                <UIcon :name="c.icon" class="text-2xl mt-1" :class="c.color" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t(`home.culture.${c.key}.title`) }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ t(`home.culture.${c.key}.body`) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="glass aspect-square rounded-full flex items-center justify-center">
              <div class="text-center">
                <UIcon name="i-heroicons-sparkles" class="text-8xl text-primary-600 dark:text-primary-400 mb-4" />
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ t('home.culture.imageCaption') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogTitle: () => t('home.seo.ogTitle'),
  ogDescription: () => t('home.seo.ogDescription'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('home.seo.twitterTitle'),
  twitterDescription: () => t('home.seo.twitterDescription'),
  twitterImage: '/images/noktah-logo.png',
  keywords: () => t('home.seo.keywords'),
})

const values = [
  { key: 'bold', icon: 'i-heroicons-bolt', color: 'text-orange-500 dark:text-orange-400' },
  { key: 'creative', icon: 'i-heroicons-paint-brush', color: 'text-rose-500 dark:text-rose-400' },
  { key: 'adaptable', icon: 'i-heroicons-arrows-right-left', color: 'text-emerald-500 dark:text-emerald-400' },
  { key: 'innovative', icon: 'i-heroicons-light-bulb', color: 'text-violet-500 dark:text-violet-400' },
]

const categories = [
  { key: 'healthcare', icon: 'i-heroicons-heart', color: 'text-primary-600 dark:text-primary-400', border: 'border-primary-400/35 dark:border-primary-400/25' },
  { key: 'sports', icon: 'i-heroicons-trophy', color: 'text-lime-600 dark:text-lime-400', border: 'border-lime-400/35 dark:border-lime-400/25' },
  { key: 'creative', icon: 'i-heroicons-camera', color: 'text-amber-600 dark:text-amber-400', border: 'border-amber-400/35 dark:border-amber-400/25' },
  { key: 'software', icon: 'i-heroicons-code-bracket', color: 'text-violet-600 dark:text-violet-400', border: 'border-violet-400/35 dark:border-violet-400/25' },
]

const audiences = [
  { key: 'customers', icon: 'i-heroicons-shopping-bag', color: 'text-primary-600 dark:text-primary-400', to: '/brands', buttonColor: 'primary' },
  { key: 'collaborators', icon: 'i-heroicons-user-group', color: 'text-emerald-600 dark:text-emerald-400', to: '/contact', buttonColor: 'success' },
  { key: 'talent', icon: 'i-heroicons-users', color: 'text-violet-600 dark:text-violet-400', to: '/contact', buttonColor: 'secondary' },
]

const cultureItems = [
  { key: 'experiment', icon: 'i-heroicons-beaker', color: 'text-primary-600 dark:text-primary-400' },
  { key: 'crossFunctional', icon: 'i-heroicons-puzzle-piece', color: 'text-emerald-600 dark:text-emerald-400' },
  { key: 'moveFast', icon: 'i-heroicons-forward', color: 'text-violet-600 dark:text-violet-400' },
]

// Brand portfolio. The status filter was removed along with the retired
// brands — with both remaining brands live, "In Development" was a tab that
// could only ever show an empty grid.
const brandList = [
  { id: 'eskala', name: 'Eskala', url: 'https://eskala.id', icon: 'i-heroicons-megaphone', bg: 'bg-sky-500 dark:bg-sky-600' },
  { id: 'venyu', name: 'Venyu', url: 'https://venyu.co.id', icon: 'i-heroicons-calendar-days', bg: 'bg-lime-500 dark:bg-lime-600' },
]

</script>

<style scoped>
/* Brand filtering animations */
.brand-filter-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.brand-filter-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  position: absolute;
}

.brand-filter-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.brand-filter-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}

.brand-filter-move {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
