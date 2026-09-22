<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Breathing Circle Animation -->
      <div class="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div class="breathing-circle"></div>
      </div>

      <div class="text-center z-10 max-w-5xl px-4">
        <div class="mb-8">
          <!-- Noktah Logo -->
          <div class="mb-6">
            <img 
              src="/images/noktah-logo.png" 
              :alt="t('common.logoAlt')" 
              class="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-contain"
            />
          </div>
          
          <!-- Title -->
          <h1 class="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-none">
            <span class="font-bold italic" style="font-family: 'Montserrat', sans-serif;">
              NOKTAH
            </span>
          </h1>
          
          <!-- Subtitle -->
          <div class="overflow-hidden mb-4">
            <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-500">
              {{ t('brands.hero.subtitle') }}
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              {{ t('brands.hero.description') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center animate-bounce">
          <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mb-2">
            <div class="w-1 h-3 bg-gray-400 rounded-full animate-ping mt-2"></div>
          </div>
          <UIcon name="i-heroicons-chevron-down" class="text-xl text-gray-400" />
        </div>
      </div>
    </section>

    <!-- Brand Portfolio Section -->
    <section class="py-20 relative">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('brands.portfolio.headingPre') }} <span class="text-primary-500">{{ t('brands.portfolio.headingAccent') }}</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('brands.portfolio.description') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            v-for="b in portfolioBrands"
            :key="b.id"
            class="group"
            :style="{ '--brand-accent': b.accent, '--brand-ink': b.ink, '--brand-ink-dark': b.inkDark }"
          >
            <a :href="b.url" target="_blank" rel="noopener noreferrer" class="block">
              <div class="glass glass-interactive rounded-2xl overflow-hidden">
                <div class="relative">
                  <!-- Brand header, painted in that brand's own palette -->
                  <div
                    class="h-48 flex items-center justify-center relative overflow-hidden"
                    :style="{ backgroundImage: b.headerGradient }"
                  >
                    <div class="absolute top-4 right-4 z-10">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div class="text-center relative z-10">
                      <UIcon :name="b.icon" class="text-8xl text-white mb-2" />
                      <div class="w-16 h-1 rounded-full mx-auto brand-accent-bg" />
                    </div>
                    <div class="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-xl brand-accent-glow" />
                    <div class="absolute top-0 left-0 w-16 h-16 bg-white/20 rounded-full blur-lg" />
                  </div>

                  <!-- Content -->
                  <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ b.name }}</h3>
                      <div class="px-3 py-1 text-sm font-medium rounded-full brand-badge">
                        {{ t('brands.status.live') }}
                      </div>
                    </div>

                    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {{ t(`brands.${b.id}.body`) }}
                    </p>

                    <div class="space-y-3 mb-6">
                      <div v-for="f in ['f1', 'f2', 'f3', 'f4']" :key="f" class="flex items-start">
                        <div class="w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0 brand-accent-bg" />
                        <span class="text-sm text-gray-700 dark:text-gray-300">{{ t(`brands.${b.id}.${f}`) }}</span>
                      </div>
                    </div>

                    <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div class="flex items-center font-medium brand-link">
                        <span>{{ t(`brands.${b.id}.cta`) }}</span>
                        <UIcon name="i-heroicons-arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross-Field Innovation Section -->
    <section class="py-20 relative">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('brands.difference.headingPre') }} <span class="text-primary-500">{{ t('brands.difference.headingAccent') }}</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('brands.difference.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="glass glass-interactive text-center p-8 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-5xl text-yellow-500 dark:text-yellow-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('brands.difference.shared.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('brands.difference.shared.body') }}</p>
          </UCard>

          <UCard class="glass glass-interactive text-center p-8 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-arrow-path" class="text-5xl text-emerald-500 dark:text-emerald-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('brands.difference.learning.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('brands.difference.learning.body') }}</p>
          </UCard>

          <UCard class="glass glass-interactive text-center p-8 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-puzzle-piece" class="text-5xl text-violet-500 dark:text-violet-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('brands.difference.ecosystem.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('brands.difference.ecosystem.body') }}</p>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

// Each brand's own palette, taken from its live site. Held as data rather
// than Tailwind arbitrary classes because those cannot be generated from
// dynamic values — the hex values are handed to CSS custom properties on
// the card, which the scoped rules below read (so dark mode still works).
const portfolioBrands = [
  {
    id: 'eskala',
    name: 'Eskala',
    url: 'https://eskala.id',
    icon: 'i-heroicons-megaphone',
    headerGradient: 'linear-gradient(to bottom right, #4A90E2, #2E5BBA)',
    accent: '#FF6B35',
    ink: '#2E5BBA',
    inkDark: '#7FB3F0',
  },
  {
    id: 'venyu',
    name: 'Venyu',
    url: 'https://venyu.co.id',
    icon: 'i-heroicons-calendar-days',
    headerGradient: 'linear-gradient(to bottom right, #1A1A17, #2F2F28)',
    accent: '#CFFF4A',
    // the lime is too pale for text on white, so light mode uses a deeper cast
    ink: '#5C7A00',
    inkDark: '#CFFF4A',
  },
]

useSeoMeta({
  title: () => t('brands.seo.title'),
  description: () => t('brands.seo.description'),
  ogTitle: () => t('brands.seo.ogTitle'),
  ogDescription: () => t('brands.seo.ogDescription'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('brands.seo.twitterTitle'),
  twitterDescription: () => t('brands.seo.twitterDescription'),
  twitterImage: '/images/noktah-logo.png',
  keywords: () => t('brands.seo.keywords'),
})
</script>

<style scoped>

/* Brand palettes arrive as CSS custom properties on each card (set inline
   from portfolioBrands), so one rule serves both brands and dark mode still
   gets a real selector — which inline styles cannot provide. */
.brand-accent-bg {
  background-color: var(--brand-accent);
}

.brand-accent-glow {
  background-color: color-mix(in srgb, var(--brand-accent) 30%, transparent);
}

.brand-link {
  color: var(--brand-ink);
  transition: color 0.3s ease;
}

.dark .brand-link {
  color: var(--brand-ink-dark);
}

.brand-badge {
  background-color: color-mix(in srgb, var(--brand-accent) 18%, transparent);
  color: var(--brand-ink);
}

.dark .brand-badge {
  color: var(--brand-ink-dark);
}
/* Breathing circle animation */
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

/* Animation delays */
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-1500 { animation-delay: 1.5s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-2500 { animation-delay: 2.5s; }

/* Smooth section transitions */
section {
  background-attachment: local;
}
</style>