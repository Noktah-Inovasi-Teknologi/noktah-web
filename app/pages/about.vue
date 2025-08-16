<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-[#0D1117]">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="breathing-circle"></div>
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/40 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-violet-300/30 dark:bg-violet-700/40 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
      </div>

      <div class="text-center z-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <img 
            src="/images/noktah-logo.png" 
            alt="Noktah Logo" 
            class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto object-contain mb-6 sm:mb-8"
          />
          
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 leading-none">
            About <span class="text-primary-500">Noktah</span>
          </h1>
          
          <p class="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
            Inovasi Teknologi
          </p>
          
          <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-2 sm:px-0">
            Building cross-field solutions that redefine what's possible in technology, creativity, business, and beyond. We are the main holding brand of CV. Amerta Meta Data.
          </p>
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

    <!-- Company Overview -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Who We <span class="text-primary-500">Are</span>
            </h2>
            <div class="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <p>
                <strong class="text-primary-600 dark:text-primary-400">Noktah Inovasi Teknologi</strong> is the main holding brand of <strong>CV. Amerta Meta Data</strong>, founded on the principle that true innovation emerges when different industries, perspectives, and technologies converge.
              </p>
              <p>
                We are not just a technology company—we are cross-field innovators who believe that the most impactful solutions come from connecting dots that others don't see. Our approach combines artificial intelligence with creative design, sports technology with user experience, and hardware engineering with innovation.
              </p>
              <p>
                Based in Gresik, East Java, Indonesia, we push beyond conventional limits to create meaningful solutions that transform how people work, play, and connect.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-square bg-white/50 dark:bg-white/15 backdrop-blur-2xl border border-white/60 dark:border-white/30 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl flex items-center justify-center p-8">
              <div class="text-center space-y-8">
                <div class="grid grid-cols-2 gap-4 sm:gap-6">
                  <div class="text-center">
                    <UIcon name="i-heroicons-building-office" class="text-2xl sm:text-3xl md:text-4xl text-primary-600 dark:text-primary-400 mx-auto mb-2 sm:mb-3" />
                    <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Established</h4>
                    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Innovation Hub</p>
                  </div>
                  <div class="text-center">
                    <UIcon name="i-heroicons-globe-asia-australia" class="text-2xl sm:text-3xl md:text-4xl text-emerald-600 dark:text-emerald-400 mx-auto mb-2 sm:mb-3" />
                    <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Indonesia</h4>
                    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Based in Gresik</p>
                  </div>
                  <div class="text-center">
                    <UIcon name="i-heroicons-rocket-launch" class="text-2xl sm:text-3xl md:text-4xl text-violet-600 dark:text-violet-400 mx-auto mb-2 sm:mb-3" />
                    <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">4 Brands</h4>
                    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Portfolio</p>
                  </div>
                  <div class="text-center">
                    <UIcon name="i-heroicons-puzzle-piece" class="text-2xl sm:text-3xl md:text-4xl text-orange-600 dark:text-orange-400 mx-auto mb-2 sm:mb-3" />
                    <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Cross-Field</h4>
                    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Vision & Mission -->
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
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Vision & <span class="text-primary-500">Mission</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <!-- Vision -->
          <UCard class="p-8 bg-white/45 dark:bg-white/12 backdrop-blur-2xl border border-white/60 dark:border-white/25 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-eye" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
            </template>
            <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To become the leading cross-field innovation hub in Southeast Asia, where different industries converge to create solutions that transform how people live, work, and interact with technology.
            </p>
          </UCard>

          <!-- Mission -->
          <UCard class="p-8 bg-white/45 dark:bg-white/12 backdrop-blur-2xl border border-white/60 dark:border-white/25 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-flag" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
            </template>
            <div class="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <p class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                Build innovative solutions by combining different fields and technologies
              </p>
              <p class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                Create meaningful impact through bold, creative, and adaptable approaches
              </p>
              <p class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                Foster a culture of experimentation and continuous learning
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core <span class="text-primary-500">Values</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            These values guide everything we do, from how we approach problems to how we build lasting solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard class="text-center p-8 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/15 hover:border-white/70 dark:hover:border-white/30 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 hover:scale-105 transition-all duration-500 rounded-3xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-bolt" class="text-5xl text-orange-500 dark:text-orange-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Bold</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">We embrace calculated risks and aren't afraid to pursue ambitious ideas that create real value. Boldness drives breakthrough innovation.</p>
          </UCard>

          <UCard class="text-center p-8 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/15 hover:border-white/70 dark:hover:border-white/30 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 hover:scale-105 transition-all duration-500 rounded-3xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-paint-brush" class="text-5xl text-rose-500 dark:text-rose-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Creative</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Fresh perspectives and unconventional approaches help us solve problems in ways others haven't considered. Creativity is our competitive edge.</p>
          </UCard>

          <UCard class="text-center p-8 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/15 hover:border-white/70 dark:hover:border-white/30 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 hover:scale-105 transition-all duration-500 rounded-3xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-arrows-right-left" class="text-5xl text-emerald-500 dark:text-emerald-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Adaptable</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">We stay agile and responsive, quickly adapting to new technologies and market shifts as they emerge. Flexibility enables rapid growth.</p>
          </UCard>

          <UCard class="text-center p-8 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/15 hover:border-white/70 dark:hover:border-white/30 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 hover:scale-105 transition-all duration-500 rounded-3xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-5xl text-violet-500 dark:text-violet-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovative</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Innovation drives everything we do, from how we approach problems to how we build lasting solutions. We constantly push boundaries.</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Company Structure & Legal -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Company <span class="text-primary-500">Structure</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <!-- Legal Entity -->
          <UCard class="p-8 bg-white/45 dark:bg-white/12 backdrop-blur-2xl border border-white/60 dark:border-white/25 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-building-office-2" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Legal Entity</h3>
              </div>
            </template>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Holding Brand</h4>
                <p class="text-gray-700 dark:text-gray-300">Noktah Inovasi Teknologi</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Parent Company</h4>
                <p class="text-gray-700 dark:text-gray-300">CV. Amerta Meta Data</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Company Type</h4>
                <p class="text-gray-700 dark:text-gray-300">Commanditaire Vennootschap (CV)</p>
              </div>
            </div>
          </UCard>

          <!-- Business Focus -->
          <UCard class="p-8 bg-white/45 dark:bg-white/12 backdrop-blur-2xl border border-white/60 dark:border-white/25 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-chart-bar" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Business Focus</h3>
              </div>
            </template>
            <div class="space-y-3">
              <div class="flex items-center">
                <UIcon name="i-heroicons-cpu-chip" class="text-primary-500 mr-3" />
                <span class="text-gray-700 dark:text-gray-300">Artificial Intelligence Solutions</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-camera" class="text-amber-500 mr-3" />
                <span class="text-gray-700 dark:text-gray-300">Creative & Photography Services</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-trophy" class="text-emerald-500 mr-3" />
                <span class="text-gray-700 dark:text-gray-300">Sports Technology Platforms</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-wrench-screwdriver" class="text-violet-500 mr-3" />
                <span class="text-gray-700 dark:text-gray-300">Hardware Engineering</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-puzzle-piece" class="text-orange-500 mr-3" />
                <span class="text-gray-700 dark:text-gray-300">Cross-Field Innovation</span>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Floating innovation elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-4 h-4 bg-primary-500/40 dark:bg-primary-400/30 rounded-full animate-bounce animation-delay-500"></div>
        <div class="absolute bottom-20 right-10 w-6 h-6 bg-emerald-500/40 dark:bg-emerald-400/30 rounded-full animate-bounce animation-delay-1500"></div>
        <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-500/40 dark:bg-orange-400/30 rounded-full animate-bounce animation-delay-2500"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Noktah <span class="text-primary-500">Approach</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            How we turn cross-field thinking into tangible innovation that creates real impact.
          </p>
        </div>

        <div class="space-y-16">
          <!-- Approach Steps -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Step 1 -->
            <div class="text-center relative">
              <div class="w-24 h-24 bg-white/50 dark:bg-white/15 backdrop-blur-2xl border border-white/60 dark:border-white/30 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-primary-600 dark:text-primary-400">01</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Identify Intersections</h3>
              <p class="text-gray-600 dark:text-gray-400">We look for opportunities where different industries, technologies, or approaches can converge to create new possibilities.</p>
              
              <!-- Connection line -->
              <div class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-400/60 transform translate-x-12"></div>
            </div>

            <!-- Step 2 -->
            <div class="text-center relative">
              <div class="w-24 h-24 bg-white/50 dark:bg-white/15 backdrop-blur-2xl border border-white/60 dark:border-white/30 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">02</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Experiment Boldly</h3>
              <p class="text-gray-600 dark:text-gray-400">We prototype rapidly, test assumptions, and aren't afraid to fail fast and learn from every iteration.</p>
              
              <!-- Connection line -->
              <div class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-emerald-400/60 transform translate-x-12"></div>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div class="w-24 h-24 bg-white/50 dark:bg-white/15 backdrop-blur-2xl border border-white/60 dark:border-white/30 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-orange-600 dark:text-orange-400">03</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Scale Impact</h3>
              <p class="text-gray-600 dark:text-gray-400">We build solutions that create meaningful impact, then scale them through our brand portfolio to reach wider audiences.</p>
            </div>
          </div>

          <!-- Innovation Philosophy -->
          <div class="text-center bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-3xl p-12 max-w-5xl mx-auto">
            <div class="flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-sparkles" class="text-4xl text-yellow-500 mr-4 animate-pulse" />
              <h4 class="text-2xl font-bold text-gray-900 dark:text-white">Innovation Philosophy</h4>
            </div>
            <blockquote class="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6 italic">
              "Real innovation happens at the intersections. When you mix AI with creative design, combine sports with technology, or merge hardware with software thinking—that's where magic happens."
            </blockquote>
            <p class="text-gray-600 dark:text-gray-400">
              This philosophy drives every brand in our portfolio, from Eskala's AI-powered creative solutions to Fieldpass's sports technology platform.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Location -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span class="text-primary-500">Touch</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to push beyond conventional limits together? Let's explore how we can collaborate.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <!-- Contact Information -->
          <UCard class="p-8 bg-white/45 dark:bg-white/12 backdrop-blur-2xl border border-white/60 dark:border-white/25 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-map-pin" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Our Office</h3>
              </div>
            </template>
            <div class="space-y-6">
              <!-- Address -->
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Address</h4>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bukit Menganti Regency C-10<br>
                  Boteng, Menganti, Gresik<br>
                  Jawa Timur, Indonesia 61174
                </p>
              </div>
              
              <!-- Contact Details -->
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h4>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-envelope" class="text-primary-500 mr-3" />
                    <a href="mailto:core@noktah.co" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                      core@noktah.co
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-phone" class="text-emerald-500 mr-3" />
                    <a href="tel:+6285173017749" class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                      +62 851-7301-7749
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-simple-icons-whatsapp" class="text-green-500 mr-3" />
                    <a href="https://wa.me/6285173017749" target="_blank" class="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 flex items-center">
                      WhatsApp: +62 851-7301-7749
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-xs ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Social & Links -->
          <UCard class="p-8 bg-white/45 dark:bg-white/12 backdrop-blur-2xl border border-white/60 dark:border-white/25 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-3xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-link" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Connect With Us</h3>
              </div>
            </template>
            <div class="space-y-6">
              <!-- Social Media -->
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Social Media</h4>
                <div class="space-y-3">
                  <a href="https://instagram.com/noktah.it" target="_blank" class="flex items-center p-3 bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/40 dark:border-white/20 rounded-2xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300">
                    <UIcon name="i-simple-icons-instagram" class="text-2xl text-pink-500 mr-4" />
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">Instagram</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">@noktah.it</p>
                    </div>
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 ml-auto" />
                  </a>
                  
                  <a href="https://id.linkedin.com/company/noktah-inovasi-teknologi" target="_blank" class="flex items-center p-3 bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/40 dark:border-white/20 rounded-2xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300">
                    <UIcon name="i-simple-icons-linkedin" class="text-2xl text-blue-500 mr-4" />
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Noktah Inovasi Teknologi</p>
                    </div>
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 ml-auto" />
                  </a>
                </div>
              </div>
              
              <!-- Quick Actions -->
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
                <div class="space-y-3">
                  <NuxtLink to="/brands" class="block">
                    <UButton class="w-full justify-between" variant="soft">
                      Explore Our Brands
                      <UIcon name="i-heroicons-arrow-right" />
                    </UButton>
                  </NuxtLink>
                  <NuxtLink to="/contact" class="block">
                    <UButton class="w-full justify-between" variant="outline">
                      Contact Us
                      <UIcon name="i-heroicons-arrow-right" />
                    </UButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta
useSeoMeta({
  title: 'About - Noktah Inovasi Teknologi',
  description: 'Learn about Noktah Inovasi Teknologi, the main holding brand of CV. Amerta Meta Data. Discover our vision, mission, values, and cross-field innovation approach.',
  ogTitle: 'About - Noktah Inovasi Teknologi',
  ogDescription: 'Cross-field innovation company building solutions that redefine what\'s possible in technology, creativity, business, and beyond.',
  ogImage: '/images/noktah-logo.png',
  twitterCard: 'summary_large_image'
})
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