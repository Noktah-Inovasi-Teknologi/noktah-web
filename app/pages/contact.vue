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
              {{ t('contact.hero.subtitle') }}
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              {{ t('contact.hero.description') }}
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

    <!-- Contact Form & Information Section -->
    <section class="py-20 relative">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('contact.intro.headingPre') }} <span class="text-primary-500">{{ t('contact.intro.headingAccent') }}</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ t('contact.intro.description') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="order-2 lg:order-1">
            <UCard class="glass p-8 rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-paper-airplane" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('contact.form.title') }}</h3>
                </div>
              </template>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name Field -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ t('contact.form.name') }}
                  </label>
                  <UInput
                    id="name"
                    v-model="form.name"
                    :placeholder="t('contact.form.namePlaceholder')"
                    size="lg"
                    class="w-full"
                    :class="{ 'border-red-500': errors.name }"
                    required
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                </div>

                <!-- Email Field -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ t('contact.form.email') }}
                  </label>
                  <UInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    :placeholder="t('contact.form.emailPlaceholder')"
                    size="lg"
                    class="w-full"
                    :class="{ 'border-red-500': errors.email }"
                    required
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>

                <!-- Company Field -->
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ t('contact.form.company') }}
                  </label>
                  <UInput
                    id="company"
                    v-model="form.company"
                    :placeholder="t('contact.form.companyPlaceholder')"
                    size="lg"
                    class="w-full"
                  />
                </div>

                <!-- Subject Field -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ t('contact.form.subject') }}
                  </label>
                  <USelectMenu
                    v-model="form.subject"
                    :items="subjectOptions"
                    :placeholder="t('contact.form.subjectPlaceholder')"
                    size="lg"
                    class="w-full"
                    :class="{ 'border-red-500': errors.subject }"
                  />
                  <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
                </div>

                <!-- Message Field -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ t('contact.form.message') }}
                  </label>
                  <UTextarea
                    id="message"
                    v-model="form.message"
                    :placeholder="t('contact.form.messagePlaceholder')"
                    rows="6"
                    size="lg"
                    class="w-full"
                    :class="{ 'border-red-500': errors.message }"
                    required
                  />
                  <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <UButton
                    type="submit"
                    size="lg"
                    :loading="isSubmitting"
                    :disabled="isSubmitting"
                    class="w-full rounded-full"
                  >
                    <UIcon name="i-heroicons-paper-airplane" class="mr-2" />
                    {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
                  </UButton>
                </div>
              </form>
            </UCard>
          </div>

          <!-- Contact Information -->
          <div class="order-1 lg:order-2 space-y-8">
            <!-- Office Information -->
            <UCard class="glass p-8 rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-building-office" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('contact.office.title') }}</h3>
                </div>
              </template>
              
              <div class="space-y-6">
                <!-- Address -->
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <UIcon name="i-heroicons-map-pin" class="text-primary-500 mr-2" />
                    {{ t('contact.office.addressLabel') }}
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    <template v-for="(line, i) in COMPANY.addressLines" :key="line">
                      {{ line }}<br v-if="i < COMPANY.addressLines.length - 1">
                    </template>
                  </p>
                </div>
                
                <!-- Business Hours -->
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <UIcon name="i-heroicons-clock" class="text-emerald-500 mr-2" />
                    {{ t('contact.office.hoursLabel') }}
                  </h4>
                  <div class="space-y-2 pl-6">
                    <div class="flex justify-between">
                      <span class="text-gray-700 dark:text-gray-300">{{ t('contact.office.weekdays') }}</span>
                      <span class="text-gray-600 dark:text-gray-400">{{ t('contact.office.weekdayHours') }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-700 dark:text-gray-300">{{ t('contact.office.saturday') }}</span>
                      <span class="text-gray-600 dark:text-gray-400">{{ t('contact.office.saturdayHours') }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-700 dark:text-gray-300">{{ t('contact.office.sunday') }}</span>
                      <span class="text-gray-600 dark:text-gray-400">{{ t('contact.office.closed') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Quick Contact -->
            <UCard class="glass p-8 rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-phone" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('contact.quick.title') }}</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <!-- Email -->
                <a 
                  :href="COMPANY.emailHref" 
                  class="glass glass-interactive flex items-center p-4 rounded-2xl group"
                >
                  <UIcon name="i-heroicons-envelope" class="text-2xl text-primary-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">{{ t('contact.quick.email') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ COMPANY.email }}</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <!-- Phone -->
                <a 
                  :href="COMPANY.phoneHref" 
                  class="glass glass-interactive flex items-center p-4 rounded-2xl group"
                >
                  <UIcon name="i-heroicons-phone" class="text-2xl text-emerald-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">{{ t('contact.quick.call') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ COMPANY.phoneDisplay }}</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <!-- WhatsApp -->
                <a 
                  :href="COMPANY.whatsappHref" 
                  target="_blank"
                  class="glass glass-interactive flex items-center p-4 rounded-2xl group"
                >
                  <UIcon name="i-simple-icons-whatsapp" class="text-2xl text-green-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('contact.quick.whatsappSub') }}</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </UCard>

            <!-- Social Media -->
            <UCard class="glass p-8 rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-share" class="text-4xl text-violet-600 dark:text-violet-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('contact.quick.followTitle') }}</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <!-- Instagram -->
                <a 
                  :href="COMPANY.instagramUrl" 
                  target="_blank"
                  class="glass glass-interactive flex items-center p-4 rounded-2xl group"
                >
                  <UIcon name="i-simple-icons-instagram" class="text-2xl text-pink-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">Instagram</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ COMPANY.instagramHandle }}</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <!-- LinkedIn -->
                <a 
                  :href="COMPANY.linkedinUrl" 
                  target="_blank"
                  class="glass glass-interactive flex items-center p-4 rounded-2xl group"
                >
                  <UIcon name="i-simple-icons-linkedin" class="text-2xl text-blue-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('contact.quick.companyPage') }}</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 relative">
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ t('contact.faq.headingPre') }} <span class="text-primary-500">{{ t('contact.faq.headingAccent') }}</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            {{ t('contact.faq.description') }}
          </p>
        </div>

        <UAccordion :items="faqItems" class="space-y-4">
          <template #default="{ item, index, open }">
            <UButton
              color="neutral"
              variant="ghost"
              class="glass glass-interactive rounded-2xl w-full"
              :ui="{ rounded: 'rounded-2xl', padding: { sm: 'p-6' } }"
            >
              <template #leading>
                <div class="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                  <span class="text-sm font-bold text-primary-600 dark:text-primary-400">{{ index + 1 }}</span>
                </div>
              </template>

              <span class="font-semibold text-gray-900 dark:text-white">{{ item.label }}</span>

            </UButton>
          </template>

          <template #item="{ item }">
            <div class="text-gray-600 dark:text-gray-400 px-6 pb-6">
              {{ item.content }}
            </div>
          </template>
        </UAccordion>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('contact.seo.title'),
  description: () => t('contact.seo.description'),
  ogTitle: () => t('contact.seo.ogTitle'),
  ogDescription: () => t('contact.seo.ogDescription'),
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('contact.seo.twitterTitle'),
  twitterDescription: () => t('contact.seo.twitterDescription'),
  twitterImage: '/images/noktah-logo.png',
  keywords: () => t('contact.seo.keywords'),
})
// Page meta

// Form reactive state
const form = ref({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)

// Subject options. Computed so switching language re-labels the select
// in place rather than leaving stale strings behind.
const SUBJECT_KEYS = [
  'partnership', 'project', 'career',
  'eskala', 'venyu',
  'general', 'support', 'media',
]
const subjectOptions = computed(() => SUBJECT_KEYS.map(k => t(`contact.subjects.${k}`)))

// FAQ items, likewise locale-reactive.
const faqItems = computed(() =>
  [1, 2, 3, 4, 5, 6].map(n => ({
    label: t(`contact.faq.q${n}`),
    content: t(`contact.faq.a${n}`),
  })),
)

// Form validation
const validateForm = () => {
  errors.value = {}
  let isValid = true

  if (!form.value.name.trim()) {
    errors.value.name = t('contact.validation.nameRequired')
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = t('contact.validation.emailRequired')
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = t('contact.validation.emailInvalid')
    isValid = false
  }

  if (!form.value.subject) {
    errors.value.subject = t('contact.validation.subjectRequired')
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = t('contact.validation.messageRequired')
    isValid = false
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = t('contact.validation.messageTooShort')
    isValid = false
  }

  return isValid
}

// Form submission
const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Simulate form submission (replace with actual implementation)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form on success
    form.value = {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
    
    // Show success message (you can implement toast notifications)
    alert(t('contact.form.successAlert'))
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert(t('contact.form.errorAlert'))
  } finally {
    isSubmitting.value = false
  }
}
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