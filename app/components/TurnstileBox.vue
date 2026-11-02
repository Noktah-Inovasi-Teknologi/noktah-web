<template>
  <div ref="box" />
</template>

<script setup lang="ts">
// Cloudflare Turnstile, loaded as a script tag only where a form needs it. v-model carries the token;
// a token works once, so the form calls reset() after every attempt.
const model = defineModel<string>({ default: '' })
const box = ref<HTMLElement>()
const siteKey = useRuntimeConfig().public.turnstileSiteKey
const { locale } = useI18n()
let widget: string | undefined

type Turnstile = { render: (el: HTMLElement, o: Record<string, unknown>) => string; reset: (id?: string) => void; remove: (id?: string) => void }
const api = () => (window as unknown as { turnstile?: Turnstile }).turnstile

function load() {
  return new Promise<void>((resolve) => {
    if (api()) return resolve()
    let s = document.querySelector<HTMLScriptElement>('script[data-turnstile]')
    if (!s) {
      s = document.createElement('script')
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      s.async = true
      s.dataset.turnstile = '1'
      document.head.appendChild(s)
    }
    s.addEventListener('load', () => resolve())
  })
}

onMounted(async () => {
  if (!siteKey) return
  await load()
  if (!box.value || !api()) return
  widget = api()!.render(box.value, {
    sitekey: siteKey,
    language: locale.value === 'en' ? 'en' : 'id',
    callback: (token: string) => { model.value = token },
    'expired-callback': () => { model.value = '' },
    'error-callback': () => { model.value = '' },
  })
})

onBeforeUnmount(() => { if (widget) api()?.remove(widget) })

defineExpose({ reset() { model.value = ''; if (widget) api()?.reset(widget) } })
</script>
