<template>
  <footer class="relative border-t border-white/25 dark:border-white/10">
    <div class="relative">
      <!-- Main Footer Content -->
      <div class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <!-- Company Information -->
            <div class="lg:col-span-2">
              <div class="flex items-center mb-6">
                <div class="glass w-12 h-12 rounded-full flex items-center justify-center p-1 mr-4">
                  <img
                    src="/images/noktah-logo.png"
                    :alt="t('common.logoAlt')"
                    class="w-full h-full object-contain"
                  >
                </div>
                <div>
                  <h3 class="text-2xl font-bold italic text-gray-900 dark:text-white" style="font-family: 'Montserrat', sans-serif;">NOKTAH</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Noktah Inovasi Teknologi</p>
                </div>
              </div>

              <p class="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
                {{ t('footer.tagline') }}
              </p>

              <!-- Address -->
              <div class="mb-6">
                <h4 class="text-gray-900 dark:text-white font-semibold mb-3">{{ t('footer.officeHeading') }}</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  <template v-for="(line, i) in COMPANY.addressLines" :key="line">
                    {{ line }}<br v-if="i < COMPANY.addressLines.length - 1">
                  </template>
                </p>
              </div>

              <!-- Contact Information -->
              <div class="mb-6">
                <h4 class="text-gray-900 dark:text-white font-semibold mb-3">{{ t('footer.contactHeading') }}</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-envelope" class="text-gray-500 dark:text-gray-400 mr-2" />
                    <a :href="COMPANY.emailHref" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      {{ COMPANY.email }}
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-phone" class="text-gray-500 dark:text-gray-400 mr-2" />
                    <a :href="COMPANY.phoneHref" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      {{ COMPANY.phoneDisplay }}
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-simple-icons-whatsapp" class="text-green-500 mr-2" />
                    <a
                      :href="COMPANY.whatsappHref"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center"
                    >
                      {{ COMPANY.phoneDisplay }}
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-xs ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div>
                <h4 class="text-gray-900 dark:text-white font-semibold mb-3">{{ t('footer.socialHeading') }}</h4>
                <div class="flex space-x-4">
                  <a
                    :href="COMPANY.instagramUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    class="glass glass-interactive relative group flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <UIcon name="i-simple-icons-instagram" class="text-lg text-pink-400" />
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="absolute -top-1 -right-1 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    :href="COMPANY.linkedinUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    class="glass glass-interactive relative group flex items-center justify-center w-10 h-10 rounded-full"
                  >
                    <UIcon name="i-simple-icons-linkedin" class="text-lg text-blue-400" />
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="absolute -top-1 -right-1 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-gray-900 dark:text-white font-semibold mb-6">{{ t('footer.quickLinks') }}</h4>
              <ul class="space-y-3">
                <li v-for="item in quickLinks" :key="item.to">
                  <NuxtLink
                    :to="localePath(item.to)"
                    class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    {{ t(item.key) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Our Brands -->
            <div>
              <h4 class="text-gray-900 dark:text-white font-semibold mb-6">{{ t('footer.brandsHeading') }}</h4>
              <ul class="space-y-3">
                <li v-for="brand in brands" :key="brand.name">
                  <a
                    :href="brand.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 block group"
                  >
                    <div class="flex items-center justify-between">
                      <span class="text-gray-900 dark:text-white font-medium">{{ brand.name }}</span>
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p class="text-xs mt-1">{{ t(brand.key) }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-300 dark:border-gray-800">
        <div class="py-8 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                {{ t('footer.copyright', { year }) }}
              </div>

              <div class="flex space-x-6">
                <NuxtLink :to="localePath('/privacy-policy')" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300">
                  {{ t('footer.privacy') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/terms-of-service')" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300">
                  {{ t('footer.terms') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

// Was hardcoded to 2024 and would have quietly gone stale.
const year = new Date().getFullYear()

const quickLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/brands', key: 'nav.brands' },
  { to: '/contact', key: 'nav.contact' },
]

const brands = [
  { name: 'Eskala', url: 'https://eskala.id', key: 'brandTaglines.eskala' },
  { name: 'Venyu', url: 'https://venyu.co.id', key: 'brandTaglines.venyu' },
]
</script>
