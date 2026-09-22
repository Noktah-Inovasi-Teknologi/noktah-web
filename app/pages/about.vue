<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div class="breathing-circle" />
      </div>

      <div class="text-center z-10 max-w-5xl px-4">
        <div class="mb-8">
          <div class="mb-6">
            <img
              src="/images/noktah-logo.png"
              :alt="t('common.logoAlt')"
              class="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-contain"
            >
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-none">
            <span class="font-bold italic" style="font-family: 'Montserrat', sans-serif;">
              NOKTAH
            </span>
          </h1>

          <div class="overflow-hidden mb-4">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-500">
              {{ t('about.hero.subtitle') }}
            </p>
          </div>

          <div class="overflow-hidden mb-12">
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              {{ t('about.hero.description') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center animate-fade-in-up animation-delay-1200">
          <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center mb-1 sm:mb-2 animate-bounce">
            <div class="w-1 h-2 sm:h-3 bg-gray-400 rounded-full animate-ping mt-1 sm:mt-2" />
          </div>
          <UIcon name="i-heroicons-chevron-down" class="text-lg sm:text-xl text-gray-400" />
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="about.overview.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('about.overview.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('about.overview.lead') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div class="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <i18n-t keypath="about.overview.p1" tag="p" scope="global">
                <template #company>
                  <strong class="text-primary-600 dark:text-primary-400">Noktah Inovasi Teknologi</strong>
                </template>
                <template #parent>
                  <strong>CV. Amerta Meta Data</strong>
                </template>
              </i18n-t>
              <p>{{ t('about.overview.p2') }}</p>
              <p>{{ t('about.overview.p3') }}</p>
            </div>
          </div>

          <div class="relative">
            <div class="glass aspect-square rounded-2xl flex items-center justify-center p-8">
              <div class="text-center space-y-8">
                <div class="grid grid-cols-2 gap-6">
                  <div v-for="stat in stats" :key="stat.key" class="text-center">
                    <UIcon :name="stat.icon" class="text-4xl mx-auto mb-3" :class="stat.color" />
                    <h4 class="text-base font-bold text-gray-900 dark:text-white">{{ t(`about.overview.${stat.key}`) }}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t(`about.overview.${stat.key}Sub`) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Vision & Mission -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="about.visionMission.heading" tag="h2" class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('about.visionMission.headingAccent') }}</span>
            </template>
          </i18n-t>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <UCard class="glass p-6 lg:p-8 rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-eye" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.visionMission.visionTitle') }}</h3>
              </div>
            </template>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ t('about.visionMission.visionBody') }}
            </p>
          </UCard>

          <UCard class="glass p-6 lg:p-8 rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-flag" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.visionMission.missionTitle') }}</h3>
              </div>
            </template>
            <div class="space-y-4 text-base text-gray-700 dark:text-gray-300">
              <p v-for="n in 3" :key="n" class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                {{ t(`about.visionMission.mission${n}`) }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="about.values.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('about.values.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('about.values.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <UCard
            v-for="v in values"
            :key="v.key"
            class="glass glass-interactive text-center p-6 lg:p-8 rounded-2xl"
          >
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon :name="v.icon" class="text-5xl" :class="v.color" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t(`about.values.${v.key}.title`) }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t(`about.values.${v.key}.body`) }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Company Structure & Legal -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="about.structure.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('about.structure.headingAccent') }}</span>
            </template>
          </i18n-t>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <UCard class="glass p-6 lg:p-8 rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-building-office-2" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.structure.legalTitle') }}</h3>
              </div>
            </template>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('about.structure.holdingLabel') }}</h4>
                <p class="text-gray-700 dark:text-gray-300">Noktah Inovasi Teknologi</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('about.structure.parentLabel') }}</h4>
                <p class="text-gray-700 dark:text-gray-300">CV. Amerta Meta Data</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('about.structure.typeLabel') }}</h4>
                <p class="text-gray-700 dark:text-gray-300">{{ t('about.structure.typeValue') }}</p>
              </div>
            </div>
          </UCard>

          <UCard class="glass p-6 lg:p-8 rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-chart-bar" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.structure.focusTitle') }}</h3>
              </div>
            </template>
            <div class="space-y-3">
              <div v-for="f in focusAreas" :key="f.key" class="flex items-center">
                <UIcon :name="f.icon" class="mr-3" :class="f.color" />
                <span class="text-gray-700 dark:text-gray-300">{{ t(`about.structure.${f.key}`) }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="about.approach.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('about.approach.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('about.approach.description') }}
          </p>
        </div>

        <div class="space-y-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(step, i) in steps"
              :key="step.key"
              class="text-center relative"
            >
              <div class="glass w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold" :class="step.color">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t(`about.approach.${step.key}.title`) }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ t(`about.approach.${step.key}.body`) }}</p>

              <div
                v-if="i < steps.length - 1"
                class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 transform translate-x-12"
                :class="step.line"
              />
            </div>
          </div>

          <div class="glass text-center rounded-2xl p-12 max-w-5xl mx-auto">
            <div class="flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-sparkles" class="text-4xl text-yellow-500 mr-4" />
              <h4 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.approach.philosophyTitle') }}</h4>
            </div>
            <blockquote class="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6 italic">
              {{ t('about.approach.philosophyQuote') }}
            </blockquote>
            <p class="text-gray-600 dark:text-gray-400">
              {{ t('about.approach.philosophyNote') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Location -->
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <i18n-t keypath="about.contact.heading" tag="h2" class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" scope="global">
            <template #accent>
              <span class="text-primary-500">{{ t('about.contact.headingAccent') }}</span>
            </template>
          </i18n-t>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('about.contact.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <UCard class="glass p-6 lg:p-8 rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-map-pin" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.contact.officeTitle') }}</h3>
              </div>
            </template>
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('about.contact.addressLabel') }}</h4>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <template v-for="(line, i) in COMPANY.addressLines" :key="line">
                    {{ line }}<br v-if="i < COMPANY.addressLines.length - 1">
                  </template>
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">{{ t('about.contact.contactLabel') }}</h4>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-envelope" class="text-primary-500 mr-3" />
                    <a :href="COMPANY.emailHref" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                      {{ COMPANY.email }}
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-phone" class="text-emerald-500 mr-3" />
                    <a :href="COMPANY.phoneHref" class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                      {{ COMPANY.phoneDisplay }}
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-simple-icons-whatsapp" class="text-green-500 mr-3" />
                    <a
                      :href="COMPANY.whatsappHref"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 flex items-center"
                    >
                      WhatsApp: {{ COMPANY.phoneDisplay }}
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-xs ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="glass p-6 lg:p-8 rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-link" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('about.contact.connectTitle') }}</h3>
              </div>
            </template>
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-4">{{ t('about.contact.socialLabel') }}</h4>
                <div class="space-y-3">
                  <a
                    :href="COMPANY.instagramUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="glass glass-interactive flex items-center p-3 rounded-2xl"
                  >
                    <UIcon name="i-simple-icons-instagram" class="text-2xl text-pink-500 mr-4" />
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">Instagram</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ COMPANY.instagramHandle }}</p>
                    </div>
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 ml-auto" />
                  </a>

                  <a
                    :href="COMPANY.linkedinUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="glass glass-interactive flex items-center p-3 rounded-2xl"
                  >
                    <UIcon name="i-simple-icons-linkedin" class="text-2xl text-blue-500 mr-4" />
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Noktah Inovasi Teknologi</p>
                    </div>
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 ml-auto" />
                  </a>
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-4">{{ t('about.contact.quickActionsLabel') }}</h4>
                <div class="space-y-3">
                  <NuxtLink :to="localePath('/brands')" class="block">
                    <UButton class="w-full justify-between rounded-full" variant="soft">
                      {{ t('about.contact.ctaBrands') }}
                      <UIcon name="i-heroicons-arrow-right" />
                    </UButton>
                  </NuxtLink>
                  <NuxtLink :to="localePath('/contact')" class="block">
                    <UButton class="w-full justify-between rounded-full" variant="outline">
                      {{ t('about.contact.ctaContact') }}
                      <UIcon name="i-heroicons-arrow-right" />
                    </UButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.description'),
  ogTitle: () => t('about.seo.ogTitle'),
  ogDescription: () => t('about.seo.ogDescription'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('about.seo.twitterTitle'),
  twitterDescription: () => t('about.seo.twitterDescription'),
  twitterImage: '/images/noktah-logo.png',
  keywords: () => t('about.seo.keywords'),
})

const stats = [
  { key: 'statEstablished', icon: 'i-heroicons-building-office', color: 'text-primary-600 dark:text-primary-400' },
  { key: 'statCountry', icon: 'i-heroicons-globe-asia-australia', color: 'text-emerald-600 dark:text-emerald-400' },
  { key: 'statBrands', icon: 'i-heroicons-rocket-launch', color: 'text-violet-600 dark:text-violet-400' },
  { key: 'statCrossField', icon: 'i-heroicons-puzzle-piece', color: 'text-orange-600 dark:text-orange-400' },
]

const values = [
  { key: 'bold', icon: 'i-heroicons-bolt', color: 'text-orange-500 dark:text-orange-400' },
  { key: 'creative', icon: 'i-heroicons-paint-brush', color: 'text-rose-500 dark:text-rose-400' },
  { key: 'adaptable', icon: 'i-heroicons-arrows-right-left', color: 'text-emerald-500 dark:text-emerald-400' },
  { key: 'innovative', icon: 'i-heroicons-light-bulb', color: 'text-violet-500 dark:text-violet-400' },
]

const focusAreas = [
  { key: 'focus1', icon: 'i-heroicons-cpu-chip', color: 'text-primary-500' },
  { key: 'focus2', icon: 'i-heroicons-camera', color: 'text-amber-500' },
  { key: 'focus3', icon: 'i-heroicons-trophy', color: 'text-emerald-500' },
  { key: 'focus4', icon: 'i-heroicons-wrench-screwdriver', color: 'text-violet-500' },
  { key: 'focus5', icon: 'i-heroicons-puzzle-piece', color: 'text-orange-500' },
]

const steps = [
  { key: 'step1', color: 'text-primary-600 dark:text-primary-400', line: 'bg-primary-400/60' },
  { key: 'step2', color: 'text-emerald-600 dark:text-emerald-400', line: 'bg-emerald-400/60' },
  { key: 'step3', color: 'text-orange-600 dark:text-orange-400', line: '' },
]
</script>

<style scoped>
/* Page-local breathing circle: smaller and calmer than the hero one on
   the homepage, sized for a shorter section. */
.breathing-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  animation: breathe 4s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .breathing-circle {
    animation: none;
  }
}
</style>
