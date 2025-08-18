<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-[#0D1117]">
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
              Let's Build Something Amazing
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              Ready to push beyond conventional limits? Connect with our team to explore collaboration opportunities and innovative solutions.
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
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Floating contact elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/40 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-violet-300/30 dark:bg-violet-700/40 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/30 dark:bg-blue-700/40 rounded-full blur-md animate-pulse animation-delay-2000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span class="text-primary-500">Touch</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're looking for innovative solutions, partnership opportunities, or want to join our team, we'd love to hear from you.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="order-2 lg:order-1">
            <UCard class="p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-paper-airplane" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
                </div>
              </template>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name Field -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <UInput
                    id="name"
                    v-model="form.name"
                    placeholder="Your full name"
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
                    Email Address *
                  </label>
                  <UInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="your.email@example.com"
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
                    Company/Organization
                  </label>
                  <UInput
                    id="company"
                    v-model="form.company"
                    placeholder="Your company name (optional)"
                    size="lg"
                    class="w-full"
                  />
                </div>

                <!-- Subject Field -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <USelectMenu
                    v-model="form.subject"
                    :options="subjectOptions"
                    placeholder="Select a subject"
                    size="lg"
                    class="w-full"
                    :class="{ 'border-red-500': errors.subject }"
                  />
                  <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
                </div>

                <!-- Message Field -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <UTextarea
                    id="message"
                    v-model="form.message"
                    placeholder="Tell us about your project, partnership opportunity, or how we can help..."
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
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </UButton>
                </div>
              </form>
            </UCard>
          </div>

          <!-- Contact Information -->
          <div class="order-1 lg:order-2 space-y-8">
            <!-- Office Information -->
            <UCard class="p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-building-office" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Our Office</h3>
                </div>
              </template>
              
              <div class="space-y-6">
                <!-- Address -->
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <UIcon name="i-heroicons-map-pin" class="text-primary-500 mr-2" />
                    Address
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    Bukit Menganti Regency C-10<br>
                    Boteng, Menganti, Gresik<br>
                    Jawa Timur, Indonesia 61174
                  </p>
                </div>
                
                <!-- Business Hours -->
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <UIcon name="i-heroicons-clock" class="text-emerald-500 mr-2" />
                    Business Hours
                  </h4>
                  <div class="space-y-2 pl-6">
                    <div class="flex justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                      <span class="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Saturday</span>
                      <span class="text-gray-600 dark:text-gray-400">9:00 AM - 2:00 PM</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Sunday</span>
                      <span class="text-gray-600 dark:text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Quick Contact -->
            <UCard class="p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-phone" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Quick Contact</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <!-- Email -->
                <a 
                  href="mailto:core@noktah.co" 
                  class="flex items-center p-4 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300 group"
                >
                  <UIcon name="i-heroicons-envelope" class="text-2xl text-primary-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">Email Us</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">core@noktah.co</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <!-- Phone -->
                <a 
                  href="tel:+6285173017749" 
                  class="flex items-center p-4 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300 group"
                >
                  <UIcon name="i-heroicons-phone" class="text-2xl text-emerald-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">Call Us</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">+62 851-7301-7749</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <!-- WhatsApp -->
                <a 
                  href="https://wa.me/6285173017749" 
                  target="_blank"
                  class="flex items-center p-4 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300 group"
                >
                  <UIcon name="i-simple-icons-whatsapp" class="text-2xl text-green-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Quick messaging</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </UCard>

            <!-- Social Media -->
            <UCard class="p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
              <template #header>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-share" class="text-4xl text-violet-600 dark:text-violet-400 mr-4" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Follow Us</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <!-- Instagram -->
                <a 
                  href="https://instagram.com/noktah.it" 
                  target="_blank"
                  class="flex items-center p-4 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300 group"
                >
                  <UIcon name="i-simple-icons-instagram" class="text-2xl text-pink-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">Instagram</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">@noktah.it</p>
                  </div>
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <!-- LinkedIn -->
                <a 
                  href="https://id.linkedin.com/company/noktah-inovasi-teknologi" 
                  target="_blank"
                  class="flex items-center p-4 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300 group"
                >
                  <UIcon name="i-simple-icons-linkedin" class="text-2xl text-blue-500 mr-4" />
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Company Page</p>
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
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Neural network inspired background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="1.5" class="fill-primary-600 dark:fill-primary-400" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span class="text-primary-500">Questions</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Common questions about working with Noktah and our brands.
          </p>
        </div>

        <UAccordion :items="faqItems" class="space-y-4">
          <template #default="{ item, index, open }">
            <UButton
              color="white"
              variant="ghost"
              class="bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] w-full"
              :ui="{ rounded: 'rounded-2xl', padding: { sm: 'p-6' } }"
            >
              <template #leading>
                <div class="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                  <span class="text-sm font-bold text-primary-600 dark:text-primary-400">{{ index + 1 }}</span>
                </div>
              </template>

              <span class="font-semibold text-gray-900 dark:text-white">{{ item.label }}</span>

              <template #trailing>
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
                />
              </template>
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
// Page meta
useSeoMeta({
  title: 'Contact Us - Noktah Inovasi Teknologi',
  description: 'Get in touch with Noktah Inovasi Teknologi. Contact our team for innovative solutions, partnership opportunities, or career inquiries. Located in Gresik, East Java, Indonesia.',
  ogTitle: 'Contact Us - Noktah Inovasi Teknologi',
  ogDescription: 'Connect with our cross-field innovation team. We\'re ready to push beyond conventional limits together.',
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image'
})

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

// Subject options
const subjectOptions = [
  'Partnership Opportunities',
  'Project Collaboration',
  'Career Opportunities',
  'Brand Inquiries (Eskala)',
  'Brand Inquiries (Memomancy)',
  'Brand Inquiries (Fieldpass)',
  'Brand Inquiries (Heavy Station)',
  'General Inquiry',
  'Technical Support',
  'Media & Press'
]

// FAQ items
const faqItems = [
  {
    label: 'What makes Noktah different from other technology companies?',
    content: 'Noktah specializes in cross-field innovation, combining insights from AI, creative services, sports technology, and hardware engineering. This interdisciplinary approach allows us to create unique solutions that traditional single-industry companies might miss.'
  },
  {
    label: 'How can I partner with Noktah or one of your brands?',
    content: 'We\'re always open to meaningful partnerships. Contact us through this form selecting "Partnership Opportunities" as your subject, or reach out directly via email. We\'ll discuss how our expertise can complement your goals.'
  },
  {
    label: 'Do you offer services for individual clients or only businesses?',
    content: 'Our brands serve both individual and business clients. Eskala and Memomancy work with businesses and individuals, while Fieldpass and Heavy Station cater to both consumer and enterprise markets.'
  },
  {
    label: 'What industries do you work with?',
    content: 'We work across multiple industries including technology, creative services, sports and recreation, hardware manufacturing, and any sector where cross-field innovation can create value. Our diverse portfolio allows us to bring unique perspectives to various challenges.'
  },
  {
    label: 'How do I join the Noktah team?',
    content: 'We\'re always looking for talented individuals who share our passion for innovation. Select "Career Opportunities" in the contact form above, or email us directly with your resume and a note about how you\'d like to contribute to our cross-field innovation mission.'
  },
  {
    label: 'What is your typical project timeline?',
    content: 'Project timelines vary significantly based on scope and complexity. We typically provide detailed timelines during our initial consultation phase. Our cross-field approach sometimes allows us to accelerate development by applying proven solutions from other industries.'
  }
]

// Form validation
const validateForm = () => {
  errors.value = {}
  let isValid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.value.subject) {
    errors.value.subject = 'Please select a subject'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
    isValid = false
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
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
    alert('Thank you for your message! We\'ll get back to you soon.')
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error sending your message. Please try again.')
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