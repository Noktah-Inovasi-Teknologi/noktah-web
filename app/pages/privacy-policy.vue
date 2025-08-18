<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 relative overflow-hidden bg-gray-50 dark:bg-[#0D1117]">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/40 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-violet-300/30 dark:bg-violet-700/40 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/30 dark:bg-blue-700/40 rounded-full blur-md animate-pulse animation-delay-2000"></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy <span class="text-primary-500">Policy</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your personal data across all Noktah brands.
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Last Updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Introduction -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-shield-check" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This Privacy Policy applies to <strong>Noktah Inovasi Teknologi</strong> and all our subsidiary brands including <strong>Eskala</strong>, <strong>Memomancy</strong>, <strong>Fieldpass</strong>, and <strong>Heavy Station</strong>. We are operated under <strong>CV. Amerta Meta Data</strong>, an Indonesian company based in Gresik, East Java.
            </p>
            <p>
              This policy complies with Indonesia's Personal Data Protection Law (UU PDP No. 27 of 2022) and explains how we collect, use, process, and protect your personal data when you use our services.
            </p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
              <p class="text-primary-800 dark:text-primary-200 font-medium">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                Age Requirement: Our services are only available to individuals aged 18 years and above.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Information We Collect -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-folder-open" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>
              <p class="mb-3">We collect the following personal data when you use our services:</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Identity Information:</strong> Full name, date of birth, identity document numbers</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Contact Information:</strong> Email address, phone number, physical address</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Digital Content:</strong> Photos, videos, profile images, and other media content</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Personalized Data:</strong> Preferences, settings, usage patterns, and behavioral data</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Technical Information:</strong> IP address, device information, browser type, cookies</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service-Specific Data Collection</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
                  <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    <UIcon name="i-heroicons-sparkles" class="inline mr-2" />
                    Eskala (All-in-One Creative Partner)
                  </h4>
                  <p class="text-sm text-purple-700 dark:text-purple-300">Creative briefs, brand assets, content creation preferences, project specifications, social media content requirements</p>
                </div>
                <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                  <h4 class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                    <UIcon name="i-heroicons-camera" class="inline mr-2" />
                    Memomancy (Photography)
                  </h4>
                  <p class="text-sm text-emerald-700 dark:text-emerald-300">Event details, location preferences, photo session requirements, booking information</p>
                </div>
                <div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
                  <h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                    <UIcon name="i-heroicons-trophy" class="inline mr-2" />
                    Fieldpass (Sports Tech)
                  </h4>
                  <p class="text-sm text-orange-700 dark:text-orange-300">Sports preferences, skill levels, match history, venue bookings, payment information</p>
                </div>
                <div class="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                  <h4 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    <UIcon name="i-heroicons-cpu-chip" class="inline mr-2" />
                    Heavy Station (PC Hardware)
                  </h4>
                  <p class="text-sm text-slate-700 dark:text-slate-300">Hardware specifications, build preferences, purchase history, technical support requests</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Legal Basis for Processing -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-scale" class="text-4xl text-violet-600 dark:text-violet-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Legal Basis for Processing</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>We process your personal data based on the following legal grounds under UU PDP 2022:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-hand-raised" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Consent</h4>
                    <p class="text-sm">Your explicit, informed, and specific consent for particular purposes</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-document-text" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Contract Performance</h4>
                    <p class="text-sm">Processing necessary to perform our services and contractual obligations</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-building-library" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Legal Obligations</h4>
                    <p class="text-sm">Compliance with Indonesian legal and regulatory requirements</p>
                  </div>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-heart" class="text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Vital Interests</h4>
                    <p class="text-sm">Protection of life, health, and safety of data subjects</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-building-office" class="text-violet-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Public Interest</h4>
                    <p class="text-sm">Tasks carried out in the public interest or official authority</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-scale" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Legitimate Interests</h4>
                    <p class="text-sm">Our legitimate business interests that don't override your rights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- How We Use Your Information -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-cog-6-tooth" class="text-4xl text-blue-600 dark:text-blue-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>We use your personal data for the following purposes:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Delivery</h3>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Providing and maintaining our services</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Processing transactions and payments</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customer support and communication</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Account management and authentication</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Business Operations</h3>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Service improvement and development</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analytics and performance monitoring</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Marketing and promotional communications</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Legal compliance and fraud prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Content Ownership and Licensing -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-camera" class="text-4xl text-amber-600 dark:text-amber-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Content Ownership and Licensing</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                Professional Content Creation
              </h3>
              <div class="space-y-3">
                <p class="text-amber-700 dark:text-amber-300">
                  <strong>All creative content produced by our professional teams</strong> (Eskala's creative services including social media content, brand materials, marketing assets, and Memomancy's photography services) become our intellectual property upon completion and payment.
                </p>
                <p class="text-sm text-amber-600 dark:text-amber-400">
                  This includes but is not limited to: social media content, brand identity materials, marketing campaigns, photography, videography, graphic design, copywriting, and any commissioned creative works.
                </p>
              </div>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                <UIcon name="i-heroicons-document-text" class="inline mr-2" />
                User-Generated Content
              </h3>
              <div class="space-y-3">
                <p class="text-blue-700 dark:text-blue-300">
                  <strong>Content you upload or share</strong> (profile pictures, user photos, personal content) remains your property. However, by using our services, you grant us a license to:
                </p>
                <ul class="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Display and store your content as part of our services</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Process and analyze content for service improvement</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check" class="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Create backups and ensure service continuity</span>
                  </li>
                </ul>
                <p class="text-xs text-blue-500 dark:text-blue-400">
                  You can withdraw this license by deleting your content or terminating your account.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Data Sharing and Disclosure -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-share" class="text-4xl text-rose-600 dark:text-rose-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Data Sharing and Disclosure</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>We may share your personal data in the following circumstances:</p>
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-building-office-2" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Within Noktah Brands</h4>
                  <p class="text-sm">Between Eskala, Memomancy, Fieldpass, and Heavy Station for integrated service delivery</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-wrench-screwdriver" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Service Providers</h4>
                  <p class="text-sm">With trusted third-party vendors who assist in service delivery (payment processors, cloud storage, analytics)</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-scale" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Legal Requirements</h4>
                  <p class="text-sm">When required by Indonesian law, court orders, or government authorities</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-shield-exclamation" class="text-rose-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Safety and Security</h4>
                  <p class="text-sm">To protect our rights, safety, and security of users and prevent fraud or illegal activities</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Data Security -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-lock-closed" class="text-4xl text-green-600 dark:text-green-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Data Security</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <p class="mb-4">
              We implement appropriate technical and organizational security measures designed to protect your personal data against unauthorized access, alteration, disclosure, or destruction, in accordance with industry standards and legal requirements.
            </p>

            <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                <UIcon name="i-heroicons-exclamation-triangle" class="inline mr-2" />
                Security Commitment
              </h3>
              <p class="text-yellow-700 dark:text-yellow-300 mb-3">
                We implement reasonable security measures to protect your data. While we strive to maintain appropriate security standards, no method of transmission or storage is 100% secure.
              </p>
              <p class="text-sm text-yellow-600 dark:text-yellow-400">
                In the event of a data breach, we will comply with all notification requirements under UU PDP 2022 and applicable Indonesian law.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Your Rights -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-hand-raised" class="text-4xl text-purple-600 dark:text-purple-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>Under Indonesian Personal Data Protection Law (UU PDP 2022), you have the following rights:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-eye" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Access</h4>
                    <p class="text-sm">Request information about what personal data we hold about you</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-pencil" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Rectification</h4>
                    <p class="text-sm">Request correction of inaccurate or incomplete personal data</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-trash" class="text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Erasure</h4>
                    <p class="text-sm">Request deletion of your personal data under certain circumstances</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Withdraw Consent</h4>
                    <p class="text-sm">Withdraw your consent for data processing at any time</p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-stop" class="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Object</h4>
                    <p class="text-sm">Object to processing of your personal data for specific purposes</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-arrow-down-tray" class="text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Data Portability</h4>
                    <p class="text-sm">Request your data in a structured, machine-readable format</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-pause" class="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Restrict Processing</h4>
                    <p class="text-sm">Request limitation of processing under certain circumstances</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-information-circle" class="text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Right to Information</h4>
                    <p class="text-sm">Be informed about how your data is being processed</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-3">
                <UIcon name="i-heroicons-envelope" class="inline mr-2" />
                Exercising Your Rights
              </h3>
              <p class="text-primary-700 dark:text-primary-300 mb-3">
                To exercise any of these rights, please contact us at <strong>core@noktah.co</strong>. We will respond to your request within the timeframe required by Indonesian law.
              </p>
              <p class="text-sm text-primary-600 dark:text-primary-400">
                Please note that some rights may be limited by legal obligations or legitimate business interests.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Data Retention -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-clock" class="text-4xl text-indigo-600 dark:text-indigo-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Data Retention</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-clock" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">General Principle</h4>
                  <p class="text-sm">We retain personal data only for as long as necessary for the purposes outlined in this policy or as required by Indonesian law.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-scale" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Legal Requirements</h4>
                  <p class="text-sm">Certain data may be retained for longer periods when required by Indonesian tax, accounting, or other legal obligations.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-camera" class="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Professional Content</h4>
                  <p class="text-sm">All creative content produced by our professional teams (Eskala's creative services and Memomancy's photography) may be retained as our intellectual property.</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- International Transfers -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-globe-asia-australia" class="text-4xl text-cyan-600 dark:text-cyan-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">International Data Transfers</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Your personal data may be transferred to and processed outside Indonesia for cloud storage, payment processing, and other service delivery purposes.
            </p>
            <p>
              When we transfer your data internationally, we ensure adequate protection as required by UU PDP 2022 and obtain your consent where necessary.
            </p>
          </div>
        </UCard>

        <!-- Cookies and Tracking -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-computer-desktop" class="text-4xl text-orange-600 dark:text-orange-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Cookies and Tracking Technologies</h2>
            </div>
          </template>
          <div class="space-y-6 text-gray-700 dark:text-gray-300">
            <p>We use cookies and similar tracking technologies to enhance your experience and improve our services.</p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Essential Cookies</h4>
                  <p class="text-sm">Required for basic website functionality and security. These cannot be disabled.</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-chart-bar" class="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Non-Essential Cookies</h4>
                  <p class="text-sm">Used for analytics, personalization, and marketing. You can control these through your browser settings.</p>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <UIcon name="i-heroicons-information-circle" class="inline mr-2" />
                  You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Changes to This Policy -->
        <UCard class="mb-8 p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
          <template #header>
            <div class="flex items-center mb-6">
              <UIcon name="i-heroicons-arrow-path" class="text-4xl text-teal-600 dark:text-teal-400 mr-4" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Changes to This Policy</h2>
            </div>
          </template>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements.
            </p>
            <div class="space-y-3">
              <div class="flex items-start">
                <UIcon name="i-heroicons-bell" class="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Notification of Changes</h4>
                  <p class="text-sm">We will notify you of significant changes via email or prominent notice on our website</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-calendar" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Effective Date</h4>
                  <p class="text-sm">Changes become effective as permitted by law, with advance notice where required</p>
                </div>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-document-text" class="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Continued Use</h4>
                  <p class="text-sm">Your continued use of our services after changes indicates acceptance of the updated policy</p>
                </div>
              </div>
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
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Data Protection Officer</h4>
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
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    We will respond to your privacy-related inquiries within the timeframe required by Indonesian law.
                  </p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Company Information</h4>
                  <div class="text-sm space-y-1">
                    <p><strong>Noktah Inovasi Teknologi</strong></p>
                    <p>CV. Amerta Meta Data</p>
                    <p>Bukit Menganti Regency C-10</p>
                    <p>Boteng, Menganti, Gresik</p>
                    <p>Jawa Timur, Indonesia 61174</p>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Regulatory Authority</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    You may also file complaints with the Indonesian Ministry of Communication and Information Technology regarding data protection matters.
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
              This Privacy Policy complies with Indonesia's Personal Data Protection Law (UU PDP No. 27 of 2022) and other applicable Indonesian regulations. We are committed to protecting your privacy and handling your personal data responsibly.
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>UU PDP 2022 Compliant</span>
              <span>•</span>
              <span>Indonesian Law</span>
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
// SEO Meta
useSeoMeta({
  title: 'Privacy Policy - Noktah Inovasi Teknologi | Data Protection',
  description: 'Learn how Noktah Inovasi Teknologi and our brands (Eskala, Memomancy, Fieldpass, Heavy Station) collect, use, and protect your personal data. UU PDP 2022 compliant privacy practices.',
  ogTitle: 'Privacy Policy - Noktah Inovasi Teknologi',
  ogDescription: 'Comprehensive privacy policy covering all Noktah brands. UU PDP 2022 compliant data protection practices.',
  ogImage: '/images/noktah-logo.png',
  ogUrl: 'https://noktah.co/privacy-policy',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Noktah Privacy Policy',
  twitterDescription: 'Transparent data protection practices across all Noktah brands. UU PDP 2022 compliant.',
  twitterImage: '/images/noktah-logo.png',
  keywords: 'privacy policy, data protection, UU PDP 2022, personal data, noktah privacy, eskala privacy, memomancy privacy'
})

// Last updated date
const lastUpdated = ref('18 Agustus 2025')
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