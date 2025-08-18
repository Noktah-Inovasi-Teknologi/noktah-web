<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-[#0D1117]">
      <!-- Breathing Circle Animation -->
      <div class="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div class="breathing-circle"></div>
      </div>
      
      <!-- Floating geometric shapes for visual interest -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/40 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-violet-300/30 dark:bg-violet-700/40 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/30 dark:bg-blue-700/40 rounded-full blur-md animate-pulse animation-delay-2000"></div>
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
              Terms of Service
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              Please read these terms carefully before using our services. These terms govern your use of all Noktah brands and services.
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mt-4">
              Last Updated: {{ lastUpdated }}
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
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Introduction & Acceptance -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-document-text" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Introduction & Acceptance</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and <strong>Noktah Inovasi Teknologi</strong>, operated under <strong>CV. Amerta Meta Data</strong>, governing your use of our services and all subsidiary brands including <strong>Eskala</strong>, <strong>Memomancy</strong>, <strong>Fieldpass</strong>, and <strong>Heavy Station</strong>.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. These Terms comply with Indonesian law and regulations, including the Civil Code, Consumer Protection Law, and Electronic Information and Transaction Law.
            </p>
            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p class="text-red-800 dark:text-red-200 font-medium">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                Age Requirement: You must be at least 18 years old to use our services. By using our services, you represent that you meet this age requirement.
              </p>
            </div>
          </div>
        </UCard>

        <!-- User Accounts & Registration -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-user-circle" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">User Accounts & Registration</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Account Creation</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>You must provide accurate, current, and complete information during registration</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>You are responsible for maintaining the confidentiality of your account credentials</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>You must notify us immediately of any unauthorized use of your account</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>One person or entity may maintain only one account per service</span>
                </li>
              </ul>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                Account Security
              </h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                You are fully responsible for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these terms or engage in suspicious activities.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Service Usage & Restrictions -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-4xl text-violet-600 dark:text-violet-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Service Usage & Restrictions</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Permitted Use</h3>
              <p class="mb-3">You may use our services for lawful purposes only, including:</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Creative services and professional consultation through Eskala</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Photography services and booking through Memomancy</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sports facility reservations through Fieldpass</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>PC hardware products and services through Heavy Station</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Prohibited Activities</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Violating any applicable laws or regulations</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Impersonating others or misrepresenting identity</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Uploading malicious code or viruses</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Harassing, threatening, or abusing others</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Attempting to reverse engineer our services</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Scraping or automated data collection</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Interfering with service operations</span>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Distributing spam or unsolicited content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Content & Intellectual Property -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-sparkles" class="text-4xl text-amber-600 dark:text-amber-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Content & Intellectual Property</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4">
                <UIcon name="i-heroicons-briefcase" class="inline mr-2" />
                Professional Content Ownership
              </h3>
              <div class="space-y-3">
                <p class="text-amber-700 dark:text-amber-300">
                  <strong>All professional content created by our teams becomes our intellectual property upon completion and payment:</strong>
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                    <h4 class="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-2">
                      <UIcon name="i-heroicons-sparkles" class="inline mr-1" />
                      Eskala Creative Services
                    </h4>
                    <p class="text-xs text-purple-700 dark:text-purple-300">Social media content, brand materials, marketing campaigns, copywriting, AI-generated content, creative consultation deliverables</p>
                  </div>
                  <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
                    <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-2">
                      <UIcon name="i-heroicons-camera" class="inline mr-1" />
                      Memomancy Photography
                    </h4>
                    <p class="text-xs text-emerald-700 dark:text-emerald-300">Professional photography, videography, edited images, creative direction, final deliverables</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                <UIcon name="i-heroicons-photo" class="inline mr-2" />
                User Content & License
              </h3>
              <div class="space-y-3">
                <p class="text-blue-700 dark:text-blue-300">
                  Content you provide (briefs, reference materials, personal photos) remains yours, but you grant us:
                </p>
                <ul class="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Right to use for service delivery and fulfillment</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Right to create derivative works for your projects</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Right to store and process for service improvement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                <UIcon name="i-heroicons-shield-check" class="inline mr-2" />
                Our Intellectual Property
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                All trademarks, logos, service marks, and trade names (Noktah, Eskala, Memomancy, Fieldpass, Heavy Station) are our exclusive property. Unauthorized use is strictly prohibited.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Payment & Billing -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-credit-card" class="text-4xl text-green-600 dark:text-green-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Payment & Billing</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Payment Terms</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-banknotes" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>All prices are quoted in Indonesian Rupiah (IDR) unless otherwise stated</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Payment is required in advance for most services unless otherwise agreed</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-receipt-percent" class="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>All prices include applicable Indonesian taxes (VAT/PPN) where required</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-arrow-path" class="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Recurring payments for subscriptions are processed automatically</span>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                  <UIcon name="i-heroicons-camera" class="inline mr-2" />
                  Memomancy Booking Terms
                </h4>
                <ul class="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>50% deposit required to confirm photo sessions</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cancellation must be made 48 hours in advance</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weather delays eligible for rescheduling</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Final payment due on session completion</span>
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
                <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-3">
                  <UIcon name="i-heroicons-trophy" class="inline mr-2" />
                  Fieldpass Booking Terms
                </h4>
                <ul class="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Full payment required to confirm reservations</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cancellation must be made 24 hours in advance</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No-show bookings are non-refundable</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weather-related cancellations eligible for rescheduling</span>
                  </li>
                </ul>
              </div>

              <div class="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                <h4 class="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <UIcon name="i-heroicons-cpu-chip" class="inline mr-2" />
                  Heavy Station Purchase Terms
                </h4>
                <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All products include manufacturer warranty</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Return policy: 7 days for defective items</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Installation services available separately</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Technical support included for 30 days</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                Late Payment & Refunds
              </h4>
              <p class="text-red-700 dark:text-red-300 text-sm mb-2">
                Late payments may result in service suspension. Refunds are processed according to Indonesian Consumer Protection Law and our specific service terms.
              </p>
              <p class="text-xs text-red-600 dark:text-red-400">
                Disputed payments will be resolved according to Indonesian banking regulations and our dispute resolution procedures.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Service Availability & Modifications -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-server" class="text-4xl text-blue-600 dark:text-blue-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Service Availability & Modifications</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Availability</h3>
              <p class="mb-3">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. Services may be temporarily unavailable due to:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-wrench-screwdriver" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Scheduled maintenance and updates</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-bolt" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Emergency technical issues</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-shield-exclamation" class="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Security incidents or investigations</span>
                  </li>
                </ul>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-signal-slash" class="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Third-party service disruptions</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-exclamation-triangle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Force majeure events</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-scale" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Legal or regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Modifications</h3>
              <p class="mb-3">We reserve the right to modify, suspend, or discontinue services with reasonable notice:</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-bell" class="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-sm">30 days notice for major changes affecting functionality</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-calendar" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-sm">7 days notice for minor updates and improvements</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-lightning-bolt" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-sm">Immediate changes for security or legal compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- User Conduct & Prohibited Activities -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-shield-exclamation" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">User Conduct & Prohibited Activities</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Community Standards</h3>
              <p class="mb-3">We maintain a professional environment that respects Indonesian cultural values and legal requirements:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">Encouraged Behavior</h4>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional communication</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Constructive feedback</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Respectful collaboration</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Timely project communication</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-red-600 dark:text-red-400 mb-2">Prohibited Behavior</h4>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Harassment or discrimination</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fraudulent activities</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sharing inappropriate content</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Violating intellectual property</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                Enforcement Actions
              </h3>
              <p class="text-yellow-700 dark:text-yellow-300 mb-3">
                Violations may result in warnings, account suspension, or permanent termination depending on severity. We reserve the right to:
              </p>
              <ul class="space-y-2 text-sm text-yellow-600 dark:text-yellow-400">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-eye-slash" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Remove or restrict access to content</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-pause" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Temporarily suspend accounts</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-no-symbol" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Permanently terminate accounts</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-scale" class="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Report illegal activities to authorities</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- Termination of Services -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-power" class="text-4xl text-purple-600 dark:text-purple-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Termination of Services</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Termination by You</h3>
              <p class="mb-3">You may terminate your account at any time:</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-user-minus" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Account deletion can be requested through our support team</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-document-arrow-down" class="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>You can request data export before account deletion</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-banknotes" class="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Outstanding payments must be settled before termination</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Active projects must be completed or transferred</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Termination by Us</h3>
              <p class="mb-3">We may terminate accounts for:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Violation of these Terms</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-credit-card" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Non-payment of fees</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-scale" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Illegal activities</span>
                  </li>
                </ul>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-shield-exclamation" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Security threats</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-clock" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Extended inactivity</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-building-office" class="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-sm">Business closure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                Effect of Termination
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Upon termination, your access to services will cease immediately. Content ownership and licensing terms survive termination. We may retain certain data as required by law or for legitimate business purposes.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Disclaimers & Limitation of Liability -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-exclamation-triangle" class="text-4xl text-yellow-600 dark:text-yellow-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Disclaimers & Limitation of Liability</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                <UIcon name="i-heroicons-shield-exclamation" class="inline mr-2" />
                Service Disclaimers
              </h3>
              <div class="space-y-3 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  <strong>Services are provided "as is" without warranties of any kind.</strong> While we strive for quality and reliability, we cannot guarantee:
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Uninterrupted or error-free operation</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specific business outcomes or results</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compatibility with all systems or platforms</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-x-circle" class="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete security against all threats</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Limitation of Liability</h3>
              <p class="mb-3">
                To the maximum extent permitted by Indonesian law, our liability is limited:
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-currency-dollar" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Financial Limits</h4>
                    <p class="text-sm">Our total liability shall not exceed the amount you paid for services in the 12 months preceding the claim</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-clock" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Types of Damages</h4>
                    <p class="text-sm">We are not liable for indirect, incidental, consequential, or punitive damages</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-shield-check" class="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Professional Services</h4>
                    <p class="text-sm">Eskala and Memomancy services include professional indemnity coverage as required by Indonesian law</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">
                <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                Exceptions
              </h4>
              <p class="text-red-700 dark:text-red-300 text-sm">
                Limitations do not apply to liability for death, personal injury, fraud, or gross negligence. Your statutory consumer rights under Indonesian law remain unaffected.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Governing Law & Dispute Resolution -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-scale" class="text-4xl text-indigo-600 dark:text-indigo-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Governing Law & Dispute Resolution</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Governing Law</h3>
              <p class="mb-3">
                These Terms and your use of our services are governed by and construed in accordance with the laws of the Republic of Indonesia, including:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-document-text" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Indonesian Civil Code</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-shield-check" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consumer Protection Law No. 8/1999</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-computer-desktop" class="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Electronic Information and Transaction Law</span>
                  </li>
                </ul>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-lock-closed" class="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personal Data Protection Law UU PDP 2022</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-building-office" class="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Company Law and Business Regulations</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-banknotes" class="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Taxation and Financial Services Laws</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Dispute Resolution Process</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2 mr-4">
                    <span class="text-primary-600 dark:text-primary-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Direct Communication</h4>
                    <p class="text-sm">Contact our support team at core@noktah.co to resolve issues informally</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mr-4">
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Mediation</h4>
                    <p class="text-sm">If direct resolution fails, disputes may be mediated through Indonesian Consumer Dispute Settlement Agency (BPSK)</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-orange-100 dark:bg-orange-900/30 rounded-full p-2 mr-4">
                    <span class="text-orange-600 dark:text-orange-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Arbitration</h4>
                    <p class="text-sm">Unresolved disputes may be submitted to binding arbitration under Indonesian Arbitration Law</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-red-100 dark:bg-red-900/30 rounded-full p-2 mr-4">
                    <span class="text-red-600 dark:text-red-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Court Jurisdiction</h4>
                    <p class="text-sm">Final disputes are subject to the exclusive jurisdiction of courts in Gresik, East Java, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                <UIcon name="i-heroicons-clock" class="inline mr-2" />
                Time Limitations
              </h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                Claims must be filed within one (1) year of the date the cause of action arose, or as otherwise required by Indonesian law. Consumer protection claims may have different time limits as specified by Indonesian Consumer Protection Law.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Contact Information -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-envelope" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              If you have questions about these Terms of Service, need support, or wish to report violations, please contact us:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Legal & Compliance</h4>
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center">
                      <UIcon name="i-heroicons-envelope" class="text-rose-500 mr-2" />
                      <span>core@noktah.co</span>
                    </div>
                    <div class="flex items-center">
                      <UIcon name="i-heroicons-phone" class="text-green-500 mr-2" />
                      <span>+62 851-7301-7749</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Monday - Friday: 09:00 - 18:00 WIB<br>
                    Saturday: 09:00 - 15:00 WIB<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Legal Entity</h4>
                  <div class="text-sm space-y-1">
                    <p><strong>Noktah Inovasi Teknologi</strong></p>
                    <p>CV. Amerta Meta Data</p>
                    <p>Bukit Menganti Regency C-10</p>
                    <p>Boteng, Menganti, Gresik</p>
                    <p>Jawa Timur, Indonesia 61174</p>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    We aim to respond to all inquiries within 2 business days. Legal matters may require additional processing time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Legal Compliance Statement -->
        <UCard class="p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <div class="text-center space-y-4">
            <div class="flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-shield-check" class="text-3xl text-green-500 mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Legal Compliance</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              These Terms of Service comply with Indonesian legal requirements and international best practices. We are committed to operating transparently and maintaining the highest standards of legal and ethical business conduct.
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Indonesian Law Compliant</span>
              <span>•</span>
              <span>Consumer Protection Act</span>
              <span>•</span>
              <span>UU PDP 2022</span>
              <span>•</span>
              <span>Last Updated: {{ lastUpdated }}</span>
            </div>
          </div>
        </UCard>

      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta
// SEO Meta
useSeoMeta({
  title: 'Terms of Service - Noktah Inovasi Teknologi | Legal Framework',
  description: 'Terms of Service for Noktah Inovasi Teknologi and all brands (Eskala, Memomancy, Fieldpass, Heavy Station). Indonesian law compliant legal framework for services and partnerships.',
  ogTitle: 'Terms of Service - Noktah Inovasi Teknologi',
  ogDescription: 'Comprehensive terms of service covering all Noktah brands. Indonesian law compliant legal framework.',
  ogImage: '/images/noktah-logo.png',
  ogUrl: 'https://noktah.co/terms-of-service',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Noktah Terms of Service',
  twitterDescription: 'Legal framework for all Noktah brands. Indonesian law compliant terms and conditions.',
  twitterImage: '/images/noktah-logo.png',
  keywords: 'terms of service, legal framework, Indonesian law, noktah terms, service agreement, user agreement, legal compliance'
})

// Last updated date
const lastUpdated = ref('18 Agustus 2025')
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