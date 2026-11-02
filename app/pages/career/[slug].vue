<template>
  <div class="min-h-screen">
    <section class="pt-16 pb-24 relative">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <NuxtLink :to="localePath('/career')" class="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <UIcon name="i-heroicons-arrow-left" class="mr-1" /> {{ t('career.list.back') }}
        </NuxtLink>

        <!-- Closed, unknown, or not loadable -->
        <div v-if="!opening" class="glass rounded-2xl p-8 text-center" role="alert">
          <template v-if="loadFailed">
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ t('career.list.loadError') }}</p>
            <UButton class="rounded-full" @click="() => refresh()">{{ t('career.list.retry') }}</UButton>
          </template>
          <template v-else>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('career.detail.unavailableTitle') }}</h1>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ t('career.detail.unavailable') }}</p>
            <UButton :to="localePath('/career')" class="rounded-full">{{ t('career.list.back') }}</UButton>
          </template>
        </div>

        <template v-else>
          <header>
            <CareerUnitLogo :unit="unitKey(opening)" :name="unitName(opening)" class="mb-4" />
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ opening.title }}</h1>
            <p v-if="meta" class="text-gray-600 dark:text-gray-400 mt-2">{{ meta }}</p>
          </header>

          <div v-if="opening.description" class="glass rounded-2xl p-6 sm:p-8">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t('career.detail.description') }}</h2>
            <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">{{ opening.description }}</p>
          </div>
          <div v-if="opening.requirements" class="glass rounded-2xl p-6 sm:p-8">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t('career.detail.requirements') }}</h2>
            <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">{{ opening.requirements }}</p>
          </div>

          <!-- Sent -->
          <div v-if="done" class="glass rounded-2xl p-8 text-center" role="status">
            <UIcon name="i-heroicons-check-circle" class="text-5xl text-primary-500 mb-3" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('career.success.title') }}</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ t('career.success.body') }}</p>
            <UButton :to="localePath('/career')" class="rounded-full">{{ t('career.success.back') }}</UButton>
          </div>

          <!-- The form -->
          <form v-else class="glass rounded-2xl p-6 sm:p-8 space-y-6" novalidate @submit.prevent="submit">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('career.form.title') }}</h2>

            <!-- Shown verbatim, in Bahasa whatever the page language -->
            <div class="rounded-xl border border-amber-300 bg-amber-50 p-4 space-y-2 text-sm text-amber-950 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100" role="note">
              <p class="font-semibold">{{ t('career.form.noticesTitle') }}</p>
              <p>{{ opening.notices?.ai_warning }}</p>
              <p>{{ opening.notices?.references }}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="sm:col-span-2">
                <label :for="id('name')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.name') }}</label>
                <UInput :id="id('name')" v-model="f.name" size="lg" class="w-full" autocomplete="name" :aria-invalid="!!errors.name" />
                <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.name }}</p>
              </div>
              <div>
                <label :for="id('email')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.email') }}</label>
                <UInput :id="id('email')" v-model="f.email" type="email" size="lg" class="w-full" autocomplete="email" inputmode="email" :aria-invalid="!!errors.email" />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.email }}</p>
              </div>
              <div>
                <label :for="id('whatsapp')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.whatsapp') }}</label>
                <UInput :id="id('whatsapp')" v-model="f.whatsapp" type="tel" size="lg" class="w-full" autocomplete="tel" inputmode="tel" :placeholder="t('career.form.whatsappHint')" :aria-invalid="!!errors.whatsapp" />
                <p v-if="errors.whatsapp" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.whatsapp }}</p>
              </div>
              <div>
                <label :for="id('domicile')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.domicile') }}</label>
                <UInput :id="id('domicile')" v-model="f.domicile" size="lg" class="w-full" autocomplete="address-level2" :placeholder="t('career.form.domicileHint')" :aria-invalid="!!errors.domicile" />
                <p v-if="errors.domicile" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.domicile }}</p>
              </div>
              <div>
                <label :for="id('available_from')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.availableFrom') }} <span class="font-normal text-gray-500 dark:text-gray-400">({{ t('career.form.optional') }})</span></label>
                <UInput :id="id('available_from')" v-model="f.available_from" type="date" size="lg" class="w-full" :aria-invalid="!!errors.available_from" />
                <p v-if="errors.available_from" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.available_from }}</p>
              </div>
              <div>
                <label :for="id('expected_salary')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.expectedSalary') }} <span class="font-normal text-gray-500 dark:text-gray-400">({{ t('career.form.optional') }})</span></label>
                <UInput :id="id('expected_salary')" v-model="f.expected_salary" size="lg" class="w-full" inputmode="numeric" :placeholder="t('career.form.expectedSalaryHint')" :aria-invalid="!!errors.expected_salary" />
                <p v-if="errors.expected_salary" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.expected_salary }}</p>
              </div>
              <div>
                <label :for="id('heard_from')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.heardFrom') }} <span class="font-normal text-gray-500 dark:text-gray-400">({{ t('career.form.optional') }})</span></label>
                <UInput :id="id('heard_from')" v-model="f.heard_from" size="lg" class="w-full" maxlength="100" />
              </div>
              <div class="sm:col-span-2">
                <label :for="id('portfolio_url')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.portfolio') }} <span class="font-normal text-gray-500 dark:text-gray-400">({{ t('career.form.optional') }})</span></label>
                <UInput :id="id('portfolio_url')" v-model="f.portfolio_url" type="url" size="lg" class="w-full" inputmode="url" :placeholder="t('career.form.portfolioHint')" :aria-invalid="!!errors.portfolio_url" />
                <p v-if="errors.portfolio_url" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.portfolio_url }}</p>
              </div>
              <div class="sm:col-span-2">
                <label :for="id('cv')" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('career.form.cv') }}</label>
                <input
                  :id="id('cv')"
                  type="file"
                  accept="application/pdf,.pdf"
                  class="block w-full text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-primary-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-primary-600"
                  :aria-invalid="!!errors.cv"
                  @change="cv = ($event.target as HTMLInputElement).files?.[0] ?? null"
                >
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ t('career.form.cvHint') }}</p>
                <p v-if="errors.cv" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.cv }}</p>
              </div>
            </div>

            <div v-if="opening.questions?.length" class="space-y-5">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('career.form.questionsTitle') }}</h3>
              <div v-for="q in opening.questions" :key="q.key">
                <label :for="id('answer_' + q.key)" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ q.text }}</label>
                <UTextarea :id="id('answer_' + q.key)" v-model="answers[q.key]" :rows="4" maxlength="2000" size="lg" class="w-full" :aria-invalid="!!errors['answer_' + q.key]" />
                <p v-if="errors['answer_' + q.key]" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors['answer_' + q.key] }}</p>
              </div>
            </div>

            <div class="space-y-3">
              <div>
                <UCheckbox :id="id('ack')" v-model="ack" :label="t('career.form.ackNotices')" />
                <p v-if="errors.ack" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.ack }}</p>
              </div>
              <div>
                <UCheckbox :id="id('consent')" v-model="consent">
                  <template #label>
                    <i18n-t keypath="career.form.consent" tag="span" scope="global">
                      <template #privacy>
                        <NuxtLink :to="localePath('/privacy-policy')" target="_blank" class="underline underline-offset-2 font-medium">{{ t('career.form.privacyLink') }}</NuxtLink>
                      </template>
                    </i18n-t>
                  </template>
                </UCheckbox>
                <p v-if="errors.consent" class="mt-1 text-sm text-red-600 dark:text-red-300">{{ errors.consent }}</p>
              </div>
            </div>

            <div>
              <TurnstileBox ref="turnstile" v-model="token" />
              <p v-if="siteKey && !token" class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ t('career.form.robotCheck') }}</p>
            </div>

            <div ref="banner">
              <p v-if="banner" class="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-100" role="alert">{{ banner }}</p>
            </div>

            <UButton type="submit" size="lg" class="w-full rounded-full justify-center" :loading="sending" :disabled="sending || closed">
              {{ sending ? t('career.form.submitting') : t('career.form.submit') }}
            </UButton>
          </form>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Detail = CareerOpening & {
  description?: string
  requirements?: string
  questions?: { key: string; text: string }[]
  notices?: { ai_warning?: string; references?: string }
}

const { t, te, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const siteKey = useRuntimeConfig().public.turnstileSiteKey

const { data: opening, error, refresh } = await useFetch<Detail>(
  () => `/api/career/openings/${encodeURIComponent(String(route.params.slug))}`,
  { query: computed(() => ({ locale: locale.value })) },
)
// A 404 means closed or unknown; anything else is the Hub being out of reach.
const loadFailed = computed(() => !!error.value && error.value.statusCode !== 404)

useSeoMeta({
  title: () => opening.value ? `${opening.value.title} — ${t('career.detail.seoSuffix')}` : t('career.seo.title'),
  description: () => opening.value?.description?.slice(0, 160) || t('career.seo.description'),
  ogTitle: () => opening.value?.title ?? t('career.seo.ogTitle'),
  ogDescription: () => t('career.seo.ogDescription'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  robots: () => opening.value ? 'index, follow' : 'noindex',
})

const meta = computed(() => {
  const o = opening.value
  if (!o) return ''
  return [
    o.location,
    o.employment_type && (te(`career.employment.${o.employment_type}`) ? t(`career.employment.${o.employment_type}`) : o.employment_type),
    o.closes_on && t('career.detail.closes', { date: formatCloseDate(o.closes_on, locale.value) }),
  ].filter(Boolean).join(' · ')
})

// The form. Nothing is stored on this side; what is typed stays in these refs until the Hub accepts it.
const uid = useId()
const id = (n: string) => `${uid}-${n}`
const f = reactive({ name: '', email: '', whatsapp: '', domicile: '', available_from: '', expected_salary: '', heard_from: '', portfolio_url: '' })
const answers = reactive<Record<string, string>>({})
const cv = ref<File | null>(null)
const ack = ref(false)
const consent = ref(false)
const token = ref('')
const turnstile = ref<{ reset: () => void }>()
const errors = ref<Record<string, string>>({})
const banner = ref('')
const bannerEl = useTemplateRef<HTMLElement>('banner')
const sending = ref(false)
const done = ref(false)
const closed = ref(false)

const err = (k: string) => t(`career.errors.${k}`)

function validate() {
  const e: Record<string, string> = {}
  if (!f.name.trim()) e.name = err('name')
  if (!/^[^@\s<>,;"']+@[^@\s<>,;"']+\.[^@\s<>,;"']+$/.test(f.email.trim())) e.email = err('email')
  const wa = f.whatsapp.replace(/\D/g, '')
  if (wa.length < 8 || wa.length > 15) e.whatsapp = err('whatsapp')
  if (!f.domicile.trim()) e.domicile = err('domicile')
  if (f.expected_salary.trim() && !/^\d[\d.,\s]*$/.test(f.expected_salary.trim())) e.expected_salary = err('expected_salary')
  if (f.portfolio_url.trim() && !/^https?:\/\/\S+\.\S+/i.test(f.portfolio_url.trim())) e.portfolio_url = err('portfolio_url')
  if (!cv.value || (cv.value.type !== 'application/pdf' && !cv.value.name.toLowerCase().endsWith('.pdf')) || cv.value.size > 10 * 1024 * 1024) {
    e.cv = cv.value ? err('unreadable_file') : err('cv')
  }
  for (const q of opening.value?.questions ?? []) if (!answers[q.key]?.trim()) e['answer_' + q.key] = err('answer')
  if (!ack.value) e.ack = err('ack')
  if (!consent.value) e.consent = err('consent')
  return e
}

const fieldMessage = (field: string, fallback: string) =>
  te(`career.errors.${field}`) ? err(field) : field.startsWith('answer_') ? err('answer') : fallback

async function submit() {
  banner.value = ''
  errors.value = validate()
  const firstBad = Object.keys(errors.value)[0]
  if (firstBad) {
    document.getElementById(id(firstBad))?.focus()
    return
  }
  if (siteKey && !token.value) {
    banner.value = err('spam')
    return
  }

  const body = new FormData()
  body.set('opening', String(route.params.slug))
  body.set('locale', locale.value)
  for (const [k, v] of Object.entries(f)) if (v.trim()) body.set(k, v.trim())
  for (const q of opening.value?.questions ?? []) body.set('answer_' + q.key, answers[q.key]!.trim())
  body.set('consent', '1')
  body.set('cv', cv.value!)
  body.set('cf-turnstile-response', token.value)

  sending.value = true
  try {
    const res = await $fetch.raw<{ received?: boolean; error?: string; field?: string; message?: string }>('/api/career/apply', {
      method: 'POST', body, ignoreResponseError: true,
    })
    const d = res._data
    if (res.ok && d?.received) {
      done.value = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (d?.error === 'closed') { closed.value = true; banner.value = err('closed') }
    else if (d?.error === 'unreadable_file') errors.value = { cv: err('unreadable_file') }
    else if (d?.error === 'invalid' && d.field) {
      errors.value = { [d.field]: fieldMessage(d.field, d.message ?? err('generic')) }
      document.getElementById(id(d.field))?.focus()
    }
    else if (d?.error === 'spam') banner.value = err('spam')
    else if (d?.error === 'unavailable') banner.value = err('unavailable')
    else banner.value = err('generic')
  } catch {
    banner.value = err('unavailable') // no answer at all: the typed answers stay on the page
  } finally {
    sending.value = false
    turnstile.value?.reset() // a Turnstile token works once
    if (banner.value) await nextTick(() => bannerEl.value?.scrollIntoView({ block: 'center', behavior: 'smooth' }))
  }
}
</script>
