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
              alt="Noktah Logo" 
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
              {{ t('terms.hero.headingPre') }} <span class="text-primary-500">{{ t('terms.hero.headingAccent') }}</span>
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              {{ t('terms.hero.description') }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-4">
              {{ t('terms.hero.lastUpdatedLabel') }} {{ lastUpdated }}
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

    <!-- Terms of Service Content -->
    <section class="py-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Introduction & Acceptance -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-document-text" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.intro.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <i18n-t keypath="terms.intro.agreement" tag="p" scope="global">
                <template #company><strong>Noktah Inovasi Teknologi</strong></template>
                <template #parent><strong>CV. Amerta Meta Data</strong></template>
                <template #eskala><strong>Eskala</strong></template>
                <template #venyu><strong>Venyu</strong></template>
              </i18n-t>
            <p>
              {{ t('terms.intro.acceptance') }}
            </p>
            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p class="text-red-800 dark:text-red-200 font-medium">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                {{ t('terms.intro.ageRequirement') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- User Accounts & Registration -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-user-circle" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.accounts.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.accounts.creationTitle') }}</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.accounts.c1') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.accounts.c2') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.accounts.c3') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.accounts.c4') }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                {{ t('terms.accounts.securityTitle') }}
              </h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                {{ t('terms.accounts.securityBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Service Usage & Restrictions -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-4xl text-violet-600 dark:text-violet-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.usage.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.usage.permittedTitle') }}</h3>
              <p class="mb-3">{{ t('terms.usage.permittedLead') }}</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{{ t('terms.usage.p1') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{{ t('terms.usage.p2') }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.usage.prohibitedTitle') }}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x1') }}</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x2') }}</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x3') }}</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x4') }}</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x5') }}</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x6') }}</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x7') }}</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.usage.x8') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Content & Intellectual Property -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-sparkles" class="text-4xl text-amber-600 dark:text-amber-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.ip.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4">
                <UIcon name="i-heroicons-briefcase" class="inline mr-2" />
                {{ t('terms.ip.professionalTitle') }}
              </h3>
              <div class="space-y-3">
                <p class="text-amber-700 dark:text-amber-300">
                  <strong>{{ t('terms.ip.professionalLead') }}</strong>
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                    <h4 class="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-2">
                      <UIcon name="i-heroicons-sparkles" class="inline mr-1" />
                      {{ t('terms.ip.eskalaTitle') }}
                    </h4>
                    <p class="text-xs text-purple-700 dark:text-purple-300">{{ t('terms.ip.eskalaBody') }}</p>
                  </div>
                  <div class="bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-lg p-3">
                    <h4 class="font-semibold text-lime-800 dark:text-lime-200 text-sm mb-2">
                      <UIcon name="i-heroicons-calendar-days" class="inline mr-1" />
                      {{ t('terms.ip.venyuTitle') }}
                    </h4>
                    <p class="text-xs text-lime-700 dark:text-lime-300">{{ t('terms.ip.venyuBody') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                <UIcon name="i-heroicons-photo" class="inline mr-2" />
                {{ t('terms.ip.userTitle') }}
              </h3>
              <div class="space-y-3">
                <p class="text-blue-700 dark:text-blue-300">
                  {{ t('terms.ip.userLead') }}
                </p>
                <ul class="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{{ t('terms.ip.u1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{{ t('terms.ip.u2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{{ t('terms.ip.u3') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                <UIcon name="i-heroicons-shield-check" class="inline mr-2" />
                {{ t('terms.ip.ourTitle') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ t('terms.ip.ourBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Payment & Billing -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-credit-card" class="text-4xl text-green-600 dark:text-green-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.payment.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.payment.termsTitle') }}</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-banknotes" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.payment.t1') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.payment.t2') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-receipt-percent" class="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.payment.t3') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-arrow-path" class="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.payment.t4') }}</span>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <h4 class="font-semibold text-sky-800 dark:text-sky-200 mb-3">
                  <UIcon name="i-heroicons-megaphone" class="inline mr-2" />
                  {{ t('terms.payment.eskalaTitle') }}
                </h4>
                <ul class="space-y-2 text-sm text-sky-700 dark:text-sky-300">
                  <li v-for="n in ['e1', 'e2', 'e3']" :key="n" class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-sky-500 mr-2 mt-0.5 shrink-0" />
                    <span>{{ t(`terms.payment.${n}`) }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                {{ t('terms.payment.lateTitle') }}
              </h4>
              <p class="text-red-700 dark:text-red-300 text-sm mb-2">
                {{ t('terms.payment.lateBody') }}
              </p>
              <p class="text-xs text-red-600 dark:text-red-400">
                {{ t('terms.payment.disputeBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Service Availability & Modifications -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-server" class="text-4xl text-blue-600 dark:text-blue-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.availability.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.availability.availabilityTitle') }}</h3>
              <p class="mb-3">
                {{ t('terms.availability.availabilityLead') }}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-wrench-screwdriver" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.availability.a1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-bolt" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.availability.a2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-shield-exclamation" class="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.availability.a3') }}</span>
                  </li>
                </ul>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-signal-slash" class="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.availability.a4') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-exclamation-triangle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.availability.a5') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-scale" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.availability.a6') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.availability.modificationsTitle') }}</h3>
              <p class="mb-3">{{ t('terms.availability.modificationsLead') }}</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-bell" class="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-sm">{{ t('terms.availability.m1') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-calendar" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-sm">{{ t('terms.availability.m2') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-bolt" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-sm">{{ t('terms.availability.m3') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- User Conduct & Prohibited Activities -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-shield-exclamation" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.conduct.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.conduct.standardsTitle') }}</h3>
              <p class="mb-3">{{ t('terms.conduct.standardsLead') }}</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">{{ t('terms.conduct.encouragedTitle') }}</h4>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.e1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.e2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.e3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.e4') }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-red-600 dark:text-red-400 mb-2">{{ t('terms.conduct.prohibitedTitle') }}</h4>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.x1') }}</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.x2') }}</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.x3') }}</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{{ t('terms.conduct.x4') }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                {{ t('terms.conduct.enforcementTitle') }}
              </h3>
              <p class="text-yellow-700 dark:text-yellow-300 mb-3">
                {{ t('terms.conduct.enforcementLead') }}
              </p>
              <ul class="space-y-2 text-sm text-yellow-600 dark:text-yellow-400">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-eye-slash" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.conduct.f1') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-pause" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.conduct.f2') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-no-symbol" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.conduct.f3') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-scale" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.conduct.f4') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- Termination of Services -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-power" class="text-4xl text-purple-600 dark:text-purple-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.termination.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.termination.byYouTitle') }}</h3>
              <p class="mb-3">{{ t('terms.termination.byYouLead') }}</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-user-minus" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.termination.y1') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-document-arrow-down" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.termination.y2') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-banknotes" class="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.termination.y3') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{{ t('terms.termination.y4') }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.termination.byUsTitle') }}</h3>
              <p class="mb-3">{{ t('terms.termination.byUsLead') }}</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.termination.u1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-credit-card" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.termination.u2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-scale" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.termination.u3') }}</span>
                  </li>
                </ul>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-shield-exclamation" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.termination.u4') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-clock" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.termination.u5') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-building-office" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">{{ t('terms.termination.u6') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                {{ t('terms.termination.effectTitle') }}
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ t('terms.termination.effectBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Disclaimers & Limitation of Liability -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-exclamation-triangle" class="text-4xl text-yellow-600 dark:text-yellow-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.liability.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                <UIcon name="i-heroicons-shield-exclamation" class="inline mr-2" />
                {{ t('terms.liability.disclaimersTitle') }}
              </h3>
              <div class="space-y-3 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  <strong>{{ t('terms.liability.asIs') }}</strong> {{ t('terms.liability.disclaimersLead') }}
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.liability.d1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.liability.d2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.liability.d3') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.liability.d4') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.liability.limitationTitle') }}</h3>
              <p class="mb-3">
                {{ t('terms.liability.limitationLead') }}
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-currency-dollar" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.liability.financialTitle') }}</h4>
                    <p class="text-sm">{{ t('terms.liability.financialBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.liability.damagesTitle') }}</h4>
                    <p class="text-sm">{{ t('terms.liability.damagesBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-shield-check" class="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.liability.professionalTitle') }}</h4>
                    <p class="text-sm">{{ t('terms.liability.professionalBody') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                {{ t('terms.liability.exceptionsTitle') }}
              </h4>
              <p class="text-red-700 dark:text-red-300 text-sm">
                {{ t('terms.liability.exceptionsBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Governing Law & Dispute Resolution -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-scale" class="text-4xl text-indigo-600 dark:text-indigo-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.law.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.law.governingTitle') }}</h3>
              <p class="mb-3">
                {{ t('terms.law.governingLead') }}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-document-text" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.law.l1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-shield-check" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.law.l2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-computer-desktop" class="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.law.l3') }}</span>
                  </li>
                </ul>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-lock-closed" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.law.l4') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-building-office" class="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.law.l5') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-banknotes" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('terms.law.l6') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('terms.law.disputeTitle') }}</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2 mr-4">
                    <span class="text-primary-600 dark:text-primary-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.law.step1Title') }}</h4>
                    <p class="text-sm">{{ t('terms.law.step1Body') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mr-4">
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.law.step2Title') }}</h4>
                    <p class="text-sm">{{ t('terms.law.step2Body') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-orange-100 dark:bg-orange-900/30 rounded-full p-2 mr-4">
                    <span class="text-orange-600 dark:text-orange-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.law.step3Title') }}</h4>
                    <p class="text-sm">{{ t('terms.law.step3Body') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-red-100 dark:bg-red-900/30 rounded-full p-2 mr-4">
                    <span class="text-red-600 dark:text-red-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('terms.law.step4Title') }}</h4>
                    <p class="text-sm">{{ t('terms.law.step4Body') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                <UIcon name="i-heroicons-clock" class="inline mr-2" />
                {{ t('terms.law.timeTitle') }}
              </h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                {{ t('terms.law.timeBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Contact Information -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-envelope" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('terms.contact.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              {{ t('terms.contact.lead') }}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('terms.contact.legalTitle') }}</h4>
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center">
                      <UIcon name="i-heroicons-envelope" class="text-rose-500 mr-2" />
                      <span>{{ COMPANY.email }}</span>
                    </div>
                    <div class="flex items-center">
                      <UIcon name="i-heroicons-phone" class="text-green-500 mr-2" />
                      <span>{{ COMPANY.phoneDisplay }}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('terms.contact.hoursTitle') }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ t('terms.contact.hours1') }}<br>
                    {{ t('terms.contact.hours2') }}<br>
                    {{ t('terms.contact.hours3') }}
                  </p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('terms.contact.entityTitle') }}</h4>
                  <div class="text-sm space-y-1">
                    <p><strong>Noktah Inovasi Teknologi</strong></p>
                    <p>CV. Amerta Meta Data</p>
                    <p v-for="line in COMPANY.addressLines" :key="line">{{ line }}</p>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('terms.contact.responseTitle') }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ t('terms.contact.responseBody') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Legal Compliance Statement -->
        <UCard class="glass p-8 rounded-2xl">
          <div class="text-center space-y-4">
            <div class="flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-shield-check" class="text-3xl text-green-500 mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('terms.compliance.title') }}</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              {{ t('terms.compliance.body') }}
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{{ t('terms.compliance.badge1') }}</span>
              <span>•</span>
              <span>{{ t('terms.compliance.badge2') }}</span>
              <span>•</span>
              <span>{{ t('terms.compliance.badge3') }}</span>
              <span>•</span>
              <span>{{ t('terms.hero.lastUpdatedLabel') }} {{ lastUpdated }}</span>
            </div>
          </div>
        </UCard>

      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('terms.seo.title'),
  description: () => t('terms.seo.description'),
  ogTitle: () => t('terms.seo.title'),
  ogDescription: () => t('terms.seo.description'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  keywords: () => t('terms.seo.keywords'),
})
// Page meta

// Last updated date
const lastUpdated = computed(() => t('terms.lastUpdatedDate'))
</script>

<style scoped>
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