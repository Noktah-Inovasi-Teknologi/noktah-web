<template>
  <div class="min-h-screen">
    <section class="pt-20 pb-8 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {{ t('career.hero.headingPre') }} <span class="text-primary-500">{{ t('career.hero.headingAccent') }}</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ t('career.hero.description') }}
        </p>
      </div>
    </section>

    <section class="pb-24 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div v-if="error" class="glass rounded-2xl p-8 text-center" role="alert">
          <p class="text-gray-700 dark:text-gray-300 mb-4">{{ t('career.list.loadError') }}</p>
          <UButton class="rounded-full" @click="() => refresh()">{{ t('career.list.retry') }}</UButton>
        </div>

        <div v-else-if="!groups.length && status !== 'pending'" class="glass rounded-2xl p-8 text-center">
          <p class="text-lg text-gray-700 dark:text-gray-300">{{ t('career.list.empty') }}</p>
        </div>

        <div v-for="g in groups" :key="g.key" class="glass rounded-2xl p-5 sm:p-8">
          <CareerUnitLogo :unit="g.key" :name="g.name" class="mb-4" />
          <ul class="divide-y divide-gray-200/70 dark:divide-white/10">
            <li v-for="o in g.items" :key="o.slug" class="py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div class="min-w-0">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">{{ o.title }}</h2>
                <p v-if="meta(o)" class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ meta(o) }}</p>
                <CareerDeadline v-if="o.closes_on" class="mt-2">{{ t('career.list.closes', { date: formatCloseDate(o.closes_on, locale) }) }}</CareerDeadline>
              </div>
              <UButton :to="localePath(`/career/${o.slug}`)" class="rounded-full shrink-0 self-start sm:self-auto">
                {{ t('career.list.view') }}
              </UButton>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, te, locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('career.seo.title'),
  description: () => t('career.seo.description'),
  ogTitle: () => t('career.seo.ogTitle'),
  ogDescription: () => t('career.seo.ogDescription'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('career.seo.ogTitle'),
  twitterDescription: () => t('career.seo.ogDescription'),
  twitterImage: '/images/noktah-logo.png',
  keywords: () => t('career.seo.keywords'),
})

const { data, error, status, refresh } = await useFetch<{ openings: CareerOpening[] }>('/api/career/openings', {
  query: computed(() => ({ locale: locale.value })),
})

// Eskala, Venyu, Noktah in that order; a Unit with nothing open is not shown.
const groups = computed(() => {
  const by = new Map<string, { key: string; name: string; items: CareerOpening[] }>()
  for (const o of data.value?.openings ?? []) {
    const key = unitKey(o)
    if (!by.has(key)) by.set(key, { key, name: unitName(o), items: [] })
    by.get(key)!.items.push(o)
  }
  const rank = (k: string) => (UNIT_ORDER.includes(k) ? UNIT_ORDER.indexOf(k) : UNIT_ORDER.length)
  return [...by.values()].sort((a, b) => rank(a.key) - rank(b.key))
})

const meta = (o: CareerOpening) => [
  o.location,
  o.employment_type && (te(`career.employment.${o.employment_type}`) ? t(`career.employment.${o.employment_type}`) : o.employment_type),
].filter(Boolean).join(' · ')
</script>
