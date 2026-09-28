<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('dataDeletion.hero.headingPre') }} <span class="text-primary-500">{{ t('dataDeletion.hero.headingAccent') }}</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('dataDeletion.hero.description') }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-4">
            {{ t('dataDeletion.hero.lastUpdatedLabel') }} {{ t('dataDeletion.lastUpdatedDate') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Who this page is for -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-user-group" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.who.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('dataDeletion.who.lead') }}</p>
            <ul class="space-y-2">
              <li v-for="key in whoKeys" :key="key" class="flex items-start">
                <UIcon name="i-heroicons-check" class="text-primary-500 mr-2 mt-1 shrink-0" />
                <span>{{ t(`dataDeletion.who.${key}`) }}</span>
              </li>
            </ul>
          </div>
        </UCard>

        <!-- Disconnect the app -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-link-slash" class="text-4xl text-orange-600 dark:text-orange-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.disconnect.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('dataDeletion.disconnect.lead') }}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="glass-thin rounded-xl p-4">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <UIcon name="i-simple-icons-instagram" class="mr-2" />
                  Instagram
                </h3>
                <p class="text-sm">{{ t('dataDeletion.disconnect.instagram') }}</p>
              </div>
              <div class="glass-thin rounded-xl p-4">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <UIcon name="i-simple-icons-tiktok" class="mr-2" />
                  TikTok
                </h3>
                <p class="text-sm">{{ t('dataDeletion.disconnect.tiktok') }}</p>
              </div>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
              <p class="text-sm text-amber-800 dark:text-amber-200">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                {{ t('dataDeletion.disconnect.note') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- Send a request -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-envelope" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.request.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <i18n-t keypath="dataDeletion.request.lead" tag="p" scope="global">
              <template #email><strong>{{ COMPANY.email }}</strong></template>
              <template #subject><strong>{{ t('dataDeletion.request.mailSubject') }}</strong></template>
            </i18n-t>
            <ul class="space-y-2">
              <li v-for="key in includeKeys" :key="key" class="flex items-start">
                <UIcon name="i-heroicons-check" class="text-rose-500 mr-2 mt-1 shrink-0" />
                <span>{{ t(`dataDeletion.request.${key}`) }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-3 pt-2">
              <UButton :to="mailtoHref" external icon="i-heroicons-envelope" size="lg" class="rounded-full">
                {{ t('dataDeletion.request.button') }}
              </UButton>
              <UButton :to="COMPANY.whatsappHref" external target="_blank" color="neutral" variant="outline" icon="i-simple-icons-whatsapp" size="lg" class="rounded-full">
                {{ t('dataDeletion.request.whatsapp') }}
              </UButton>
            </div>
            <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
              <p class="text-sm text-primary-800 dark:text-primary-200">
                <UIcon name="i-heroicons-finger-print" class="inline mr-2" />
                {{ t('dataDeletion.request.verify') }}
              </p>
            </div>
          </div>
        </UCard>

        <!-- What happens next -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-clipboard-document-check" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.process.title') }}</h2>
            </div>
          </template>
          <ol class="space-y-5 text-gray-700 dark:text-gray-300">
            <li v-for="(key, i) in processKeys" :key="key" class="flex items-start">
              <span class="glass-thin rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-white mr-4 shrink-0">{{ i + 1 }}</span>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">{{ t(`dataDeletion.process.${key}Title`) }}</h3>
                <p class="text-sm">{{ t(`dataDeletion.process.${key}Body`) }}</p>
              </div>
            </li>
          </ol>
        </UCard>

        <!-- What we may keep -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-archive-box" class="text-4xl text-indigo-600 dark:text-indigo-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.keep.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('dataDeletion.keep.lead') }}</p>
            <ul class="space-y-3">
              <li v-for="key in keepKeys" :key="key" class="flex items-start">
                <UIcon name="i-heroicons-lock-closed" class="text-indigo-500 mr-3 mt-1 shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ t(`dataDeletion.keep.${key}Title`) }}</h3>
                  <p class="text-sm">{{ t(`dataDeletion.keep.${key}Body`) }}</p>
                </div>
              </li>
            </ul>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('dataDeletion.keep.note') }}</p>
          </div>
        </UCard>

        <!-- Data held for a client -->
        <UCard class="glass mb-8 p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-building-storefront" class="text-4xl text-sky-600 dark:text-sky-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.clients.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('dataDeletion.clients.body') }}</p>
            <p>{{ t('dataDeletion.clients.forward') }}</p>
          </div>
        </UCard>

        <!-- Status and complaints -->
        <UCard class="glass p-8 rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="text-4xl text-teal-600 dark:text-teal-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('dataDeletion.status.title') }}</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>{{ t('dataDeletion.status.body') }}</p>
            <p>{{ t('dataDeletion.status.complaint') }}</p>
            <i18n-t keypath="dataDeletion.status.policy" tag="p" scope="global">
              <template #link>
                <NuxtLink :to="localePath('/privacy-policy')" class="text-primary-600 dark:text-primary-400 underline underline-offset-2">{{ t('footer.privacy') }}</NuxtLink>
              </template>
            </i18n-t>
          </div>
        </UCard>

      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('dataDeletion.seo.title'),
  description: () => t('dataDeletion.seo.description'),
  ogTitle: () => t('dataDeletion.seo.title'),
  ogDescription: () => t('dataDeletion.seo.description'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
})

// Key names only — the strings are looked up with t() in the template, so
// they follow a language switch without a reload.
const whoKeys = ['connected', 'clients', 'endUsers', 'visitors']
const includeKeys = ['includeName', 'includeService', 'includeAccount', 'includeScope', 'includeContact']
const processKeys = ['ack', 'verify', 'stop', 'delete', 'done']
const keepKeys = ['legal', 'claims', 'aggregate', 'record']

// Pre-filled request so nobody has to guess what to send.
const mailtoHref = computed(() =>
  `mailto:${COMPANY.email}?subject=${encodeURIComponent(t('dataDeletion.request.mailSubject'))}&body=${encodeURIComponent(t('dataDeletion.request.mailBody'))}`,
)
</script>
