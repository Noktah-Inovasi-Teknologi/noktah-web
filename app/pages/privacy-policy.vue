<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 relative overflow-hidden">

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('privacy.hero.headingPre') }} <span class="text-primary-500">{{ t('privacy.hero.headingAccent') }}</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('privacy.hero.description') }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-4">
            {{ t('privacy.hero.lastUpdatedLabel') }} {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="py-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Introduction -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-shield-check" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.intro.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <i18n-t keypath="privacy.intro.appliesTo" tag="p" scope="global">
                <template #company><strong>Noktah Inovasi Teknologi</strong></template>
                <template #eskala><strong>Eskala</strong></template>
                <template #venyu><strong>Venyu</strong></template>
                <template #parent><strong>CV. Amerta Meta Data</strong></template>
              </i18n-t>
            <p>
              {{ t('privacy.intro.compliance') }}
            </p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
              <p class="text-primary-800 dark:text-primary-200 font-medium">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                {{ t('privacy.intro.ageRequirement') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Information We Collect -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-folder-open" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.collect.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('privacy.collect.personalTitle') }}</h3>
              <p class="mb-3">{{ t('privacy.collect.personalLead') }}</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{{ t('privacy.collect.identityLabel') }}</strong> {{ t('privacy.collect.identityBody') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{{ t('privacy.collect.contactLabel') }}</strong> {{ t('privacy.collect.contactBody') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{{ t('privacy.collect.digitalLabel') }}</strong> {{ t('privacy.collect.digitalBody') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{{ t('privacy.collect.personalizedLabel') }}</strong> {{ t('privacy.collect.personalizedBody') }}</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>{{ t('privacy.collect.technicalLabel') }}</strong> {{ t('privacy.collect.technicalBody') }}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('privacy.collect.serviceTitle') }}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-4">
                  <h4 class="font-semibold text-sky-800 dark:text-sky-200 mb-2">
                    <UIcon name="i-heroicons-megaphone" class="inline mr-2" />
                    {{ t('privacy.collect.eskalaTitle') }}
                  </h4>
                  <p class="text-sm text-sky-700 dark:text-sky-300">{{ t('privacy.collect.eskalaBody') }}</p>
                </div>
                <div class="bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-lg p-4">
                  <h4 class="font-semibold text-lime-800 dark:text-lime-200 mb-2">
                    <UIcon name="i-heroicons-calendar-days" class="inline mr-2" />
                    {{ t('privacy.collect.venyuTitle') }}
                  </h4>
                  <p class="text-sm text-lime-700 dark:text-lime-300">{{ t('privacy.collect.venyuBody') }}</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Legal Basis for Processing -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-scale" class="text-4xl text-violet-600 dark:text-violet-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('privacy.legalBasis.lead') }}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-hand-raised" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.consentTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.legalBasis.consentBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-document-text" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.contractTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.legalBasis.contractBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-building-library" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.legalTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.legalBasis.legalBody') }}</p>
                  </div>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-heart" class="text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.vitalTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.legalBasis.vitalBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-building-office" class="text-violet-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.publicTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.legalBasis.publicBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-scale" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.legalBasis.legitimateTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.legalBasis.legitimateBody') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- How We Use Your Information -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="text-4xl text-blue-600 dark:text-blue-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.use.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('privacy.use.lead') }}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('privacy.use.serviceTitle') }}</h3>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.service1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.service2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.service3') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.service4') }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">{{ t('privacy.use.businessTitle') }}</h3>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.business1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.business2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.business3') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ t('privacy.use.business4') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Content Ownership and Licensing -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-camera" class="text-4xl text-amber-600 dark:text-amber-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.content.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                {{ t('privacy.content.professionalTitle') }}
              </h3>
              <div class="space-y-3">
                <i18n-t keypath="privacy.content.professionalLead" tag="p" class="mb-3" scope="global">
                  <template #highlight><strong>{{ t('privacy.content.professionalHighlight') }}</strong></template>
                </i18n-t>
                <p class="text-sm text-amber-600 dark:text-amber-400">
                  {{ t('privacy.content.professionalDetail') }}
                </p>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                <UIcon name="i-heroicons-document-text" class="inline mr-2" />
                {{ t('privacy.content.ugcTitle') }}
              </h3>
              <div class="space-y-3">
                <i18n-t keypath="privacy.content.ugcLead" tag="p" class="mb-3" scope="global">
                  <template #highlight><strong>{{ t('privacy.content.ugcHighlight') }}</strong></template>
                </i18n-t>
                <ul class="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{{ t('privacy.content.ugc1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{{ t('privacy.content.ugc2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{{ t('privacy.content.ugc3') }}</span>
                  </li>
                </ul>
                <p class="text-xs text-blue-500 dark:text-blue-400">
                  {{ t('privacy.content.ugcWithdraw') }}
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Data Sharing and Disclosure -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-share" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.sharing.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('privacy.sharing.lead') }}</p>
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-building-office-2" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.sharing.internalTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.sharing.internalBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-wrench-screwdriver" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.sharing.vendorsTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.sharing.vendorsBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-scale" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.sharing.legalTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.sharing.legalBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-shield-exclamation" class="text-rose-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.sharing.safetyTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.sharing.safetyBody') }}</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Data Security -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-lock-closed" class="text-4xl text-green-600 dark:text-green-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.security.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              {{ t('privacy.security.lead') }}
            </p>
            
            <p class="mb-4">
              {{ t('privacy.security.detail') }}
            </p>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                {{ t('privacy.security.commitmentTitle') }}
              </h3>
              <p class="text-yellow-700 dark:text-yellow-300 mb-3">
                {{ t('privacy.security.commitmentBody') }}
              </p>
              <p class="text-sm text-yellow-600 dark:text-yellow-400">
                {{ t('privacy.security.breachBody') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Your Rights -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-hand-raised" class="text-4xl text-purple-600 dark:text-purple-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.rights.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>{{ t('privacy.rights.lead') }}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-eye" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.accessTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.accessBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-pencil" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.rectificationTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.rectificationBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-trash" class="text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.erasureTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.erasureBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.withdrawTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.withdrawBody') }}</p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-stop" class="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.objectTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.objectBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-arrow-down-tray" class="text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.portabilityTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.portabilityBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-pause" class="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.restrictTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.restrictBody') }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-information-circle" class="text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.rights.informationTitle') }}</h4>
                    <p class="text-sm">{{ t('privacy.rights.informationBody') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-3">
                <UIcon name="i-heroicons-envelope" class="inline mr-2" />
                {{ t('privacy.rights.exerciseTitle') }}
              </h3>
              <i18n-t keypath="privacy.rights.exerciseLead" tag="p" class="mb-3" scope="global">
                <template #email>
                  <strong>{{ COMPANY.email }}</strong>
                </template>
              </i18n-t>
              <p class="text-sm text-primary-600 dark:text-primary-400">
                {{ t('privacy.rights.exerciseNote') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Data Retention -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-clock" class="text-4xl text-indigo-600 dark:text-indigo-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.retention.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('privacy.retention.lead') }}</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-clock" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.retention.generalTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.retention.generalBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-scale" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.sharing.legalTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.retention.generalNote') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-camera" class="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.retention.professionalTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.retention.professionalBody') }}</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- International Transfers -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-globe-asia-australia" class="text-4xl text-cyan-600 dark:text-cyan-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.transfers.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {{ t('privacy.transfers.lead') }}
            </p>
            <p>
              {{ t('privacy.transfers.detail') }}
            </p>
          </div>
        </UCard>

        <!-- Cookies and Tracking -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-computer-desktop" class="text-4xl text-orange-600 dark:text-orange-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.cookies.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>{{ t('privacy.cookies.lead') }}</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.cookies.essentialTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.cookies.essentialBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-chart-bar" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.cookies.nonEssentialTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.cookies.nonEssentialBody') }}</p>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                  {{ t('privacy.cookies.manage') }}
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Changes to This Policy -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-arrow-path" class="text-4xl text-teal-600 dark:text-teal-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.changes.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {{ t('privacy.changes.lead') }}
            </p>
            <div class="space-y-3">
              <div class="flex items-start">
                <UIcon name="i-heroicons-bell" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.changes.notificationTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.changes.notificationBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-calendar" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.changes.effectiveTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.changes.effectiveBody') }}</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-document-text" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ t('privacy.changes.continuedTitle') }}</h4>
                  <p class="text-sm">{{ t('privacy.changes.continuedBody') }}</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Contact Information -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-envelope" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('privacy.contact.title') }}</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              {{ t('privacy.contact.lead') }}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('privacy.contact.dpoTitle') }}</h4>
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
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('privacy.contact.responseTitle') }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ t('privacy.contact.responseBody') }}
                  </p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('privacy.contact.companyTitle') }}</h4>
                  <div class="text-sm space-y-1">
                    <p><strong>Noktah Inovasi Teknologi</strong></p>
                    <p>CV. Amerta Meta Data</p>
                    <p v-for="line in COMPANY.addressLines" :key="line">{{ line }}</p>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">{{ t('privacy.contact.authorityTitle') }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ t('privacy.contact.authorityBody') }}
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
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('privacy.compliance.title') }}</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              {{ t('privacy.compliance.body') }}
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{{ t('privacy.compliance.badge1') }}</span>
              <span>•</span>
              <span>{{ t('privacy.compliance.badge2') }}</span>
              <span>•</span>
              <span>{{ t('privacy.hero.lastUpdatedLabel') }} {{ lastUpdated }}</span>
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
  title: () => t('privacy.seo.title'),
  description: () => t('privacy.seo.description'),
  ogTitle: () => t('privacy.seo.title'),
  ogDescription: () => t('privacy.seo.description'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  keywords: () => t('privacy.seo.keywords'),
})

// Last updated date
const lastUpdated = computed(() => t('privacy.lastUpdatedDate'))
</script>

<style scoped>
/* Animation delays */
.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-2000 { animation-delay: 2s; }

/* Smooth section transitions */
section {
  background-attachment: local;
}
</style>