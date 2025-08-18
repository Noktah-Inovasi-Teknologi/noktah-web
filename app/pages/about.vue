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
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-none">
            <span class="font-bold italic" style="font-family: 'Montserrat', sans-serif;">
              NOKTAH
            </span>
          </h1>
          
          <!-- Subtitle -->
          <div class="overflow-hidden mb-4">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-500">
              About Our Innovation Journey
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              Discover how we're building cross-field solutions that push beyond conventional limits in technology, creativity, and business.
            </p>
            </div>
        </div>
        
        <!-- Enhanced Scroll Indicator -->
        <div class="flex flex-col items-center animate-fade-in-up animation-delay-1200">
          <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center mb-1 sm:mb-2 animate-bounce">
            <div class="w-1 h-2 sm:h-3 bg-gray-400 rounded-full animate-ping mt-1 sm:mt-2"></div>
          </div>
          <UIcon name="i-heroicons-chevron-down" class="text-lg sm:text-xl text-gray-400" />
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Floating geometric shapes for visual interest -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/40 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-violet-300/30 dark:bg-violet-700/40 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-300/30 dark:bg-blue-700/40 rounded-full blur-md animate-pulse animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We <span class="text-primary-500">Are</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A forward-thinking technology company dedicated to breaking conventional boundaries through innovative cross-field solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div class="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <p>
                <strong class="text-primary-600 dark:text-primary-400">Noktah Inovasi Teknologi</strong> serves as the main holding brand of <strong>CV. Amerta Meta Data</strong>, operating from Gresik, East Java, Indonesia. Our foundation rests on a core principle: the most impactful solutions emerge when diverse fields converge.
              </p>
              <p>
                Rather than confining ourselves to traditional industry silos, we deliberately operate across artificial intelligence, creative services, sports technology, and hardware engineering. This interdisciplinary approach enables us to apply insights from one domain to solve challenges in another, creating unique value propositions.
              </p>
              <p>
                Through our portfolio of four specialized brands, we demonstrate how cross-field innovation can address real market needs while building sustainable, scalable businesses.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-square bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-center p-8">
              <div class="text-center space-y-8">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <UIcon name="i-heroicons-building-office" class="text-4xl text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                    <h4 class="text-base font-bold text-gray-900 dark:text-white">Established</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Innovation Hub</p>
                  </div>
                  <div class="text-center">
                    <UIcon name="i-heroicons-globe-asia-australia" class="text-4xl text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                    <h4 class="text-base font-bold text-gray-900 dark:text-white">Indonesia</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Based in Gresik</p>
                  </div>
                  <div class="text-center">
                    <UIcon name="i-heroicons-rocket-launch" class="text-4xl text-violet-600 dark:text-violet-400 mx-auto mb-3" />
                    <h4 class="text-base font-bold text-gray-900 dark:text-white">4 Brands</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Active Portfolio</p>
                  </div>
                  <div class="text-center">
                    <UIcon name="i-heroicons-puzzle-piece" class="text-4xl text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                    <h4 class="text-base font-bold text-gray-900 dark:text-white">Cross-Field</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Innovation</p>
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
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <!-- Vision -->
          <UCard class="p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-eye" class="text-4xl text-primary-600 dark:text-primary-400 mr-4" />
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
            </template>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To establish Southeast Asia's premier innovation ecosystem where artificial intelligence, creative services, sports technology, and hardware engineering converge to address complex, real-world challenges through collaborative cross-field solutions.
            </p>
          </UCard>

          <!-- Mission -->
          <UCard class="p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
            <template #header>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-flag" class="text-4xl text-emerald-600 dark:text-emerald-400 mr-4" />
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
            </template>
            <div class="space-y-4 text-base text-gray-700 dark:text-gray-300">
              <p class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                Develop breakthrough solutions through strategic integration of diverse technological domains and industry expertise
              </p>
              <p class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                Generate measurable impact by applying bold, creative methodologies with adaptive implementation strategies
              </p>
              <p class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                Cultivate an organizational culture that prioritizes experimental innovation and systematic knowledge advancement
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
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-bolt" class="text-5xl text-orange-500 dark:text-orange-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Bold</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">We pursue ambitious initiatives that others might consider too complex or unconventional. Our willingness to tackle challenging projects with calculated risk-taking drives breakthrough innovation.</p>
          </UCard>

          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-paint-brush" class="text-5xl text-rose-500 dark:text-rose-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Creative</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Our approach to problem-solving transcends traditional boundaries, drawing inspiration and methodologies from diverse disciplines to create novel solutions that conventional thinking might overlook.</p>
          </UCard>

          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-arrows-right-left" class="text-5xl text-emerald-500 dark:text-emerald-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Adaptable</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">We maintain organizational agility that enables rapid response to technological advances and market evolution. This flexibility allows us to capitalize on emerging opportunities while adjusting strategies as conditions change.</p>
          </UCard>

          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-5xl text-violet-500 dark:text-violet-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovative</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Innovation permeates every aspect of our operations, from optimizing established processes to pioneering entirely new solutions. We systematically seek opportunities to enhance efficiency and create value.</p>
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
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <!-- Legal Entity -->
          <UCard class="p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
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
          <UCard class="p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <!-- Step 1 -->
            <div class="text-center relative">
              <div class="w-24 h-24 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-primary-600 dark:text-primary-400">01</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Identify Intersections</h3>
              <p class="text-gray-600 dark:text-gray-400">We look for opportunities where different industries, technologies, or approaches can converge to create new possibilities.</p>
              
              <!-- Connection line -->
              <div class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-400/60 transform translate-x-12"></div>
            </div>

            <!-- Step 2 -->
            <div class="text-center relative">
              <div class="w-24 h-24 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">02</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Experiment Boldly</h3>
              <p class="text-gray-600 dark:text-gray-400">We prototype rapidly, test assumptions, and aren't afraid to fail fast and learn from every iteration.</p>
              
              <!-- Connection line -->
              <div class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-emerald-400/60 transform translate-x-12"></div>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div class="w-24 h-24 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-orange-600 dark:text-orange-400">03</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Scale Impact</h3>
              <p class="text-gray-600 dark:text-gray-400">We build solutions that create meaningful impact, then scale them through our brand portfolio to reach wider audiences.</p>
            </div>
          </div>

          <!-- Innovation Philosophy -->
          <div class="text-center bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl p-12 max-w-5xl mx-auto">
            <div class="flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-sparkles" class="text-4xl text-yellow-500 mr-4 animate-pulse" />
              <h4 class="text-2xl font-bold text-gray-900 dark:text-white">Innovation Philosophy</h4>
            </div>
            <blockquote class="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6 italic">
              "The most interesting projects happen when you combine things that don't usually go together. AI + creative work, sports + tech, hardware + software. That's where we find the best opportunities."
            </blockquote>
            <p class="text-gray-600 dark:text-gray-400">
              This approach shapes all our brands - from Eskala's all-in-one creative partnership delivering revenue-focused brand solutions to Fieldpass's sports booking platform.
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
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <!-- Contact Information -->
          <UCard class="p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
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
          <UCard class="p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
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
                  <a href="https://instagram.com/noktah.it" target="_blank" class="flex items-center p-3 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300">
                    <UIcon name="i-simple-icons-instagram" class="text-2xl text-pink-500 mr-4" />
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">Instagram</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">@noktah.it</p>
                    </div>
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-lg text-gray-500 ml-auto" />
                  </a>
                  
                  <a href="https://id.linkedin.com/company/noktah-inovasi-teknologi" target="_blank" class="flex items-center p-3 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl hover:bg-white/[0.10] transition-all duration-300">
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
                    <UButton class="w-full justify-between rounded-full" variant="soft">
                      Explore Our Brands
                      <UIcon name="i-heroicons-arrow-right" />
                    </UButton>
                  </NuxtLink>
                  <NuxtLink to="/contact" class="block">
                    <UButton class="w-full justify-between rounded-full" variant="outline">
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
// SEO Meta
useSeoMeta({
  title: 'About - Noktah Inovasi Teknologi | Cross-Field Innovation Journey',
  description: 'Learn about Noktah Inovasi Teknologi, the main holding brand of CV. Amerta Meta Data. Discover our vision, mission, values, and cross-field innovation approach combining AI, creative services, sports technology, and hardware engineering.',
  ogTitle: 'About - Noktah Inovasi Teknologi | Innovation Journey',
  ogDescription: 'Forward-thinking technology company dedicated to breaking conventional boundaries through innovative cross-field solutions. Based in Gresik, East Java, Indonesia.',
  ogImage: '/images/noktah-logo.png',
  ogUrl: 'https://noktah.co/about',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About Noktah Inovasi Teknologi',
  twitterDescription: 'Discover our innovation journey: Bold, Creative, Adaptable, Innovative. Building the future through cross-field collaboration.',
  twitterImage: '/images/noktah-logo.png',
  keywords: 'about noktah, innovation company, cross-field technology, CV Amerta Meta Data, Gresik Indonesia, technology company profile, innovation values'
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