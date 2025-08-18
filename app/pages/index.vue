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
          <div class="">
            <img 
              src="/images/noktah-logo.png" 
              alt="Noktah Logo" 
              class="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-contain"
            />
          </div>
          
          <!-- Animated Title -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-none">
            <span class="font-bold italic" style="font-family: 'Montserrat', sans-serif;">
              NOKTAH
            </span>
          </h1>
          
          <!-- Animated Tagline -->
          <div class="overflow-hidden mb-4">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-500">
              Pushing Beyond Conventional Limits
            </p>
          </div>
          
          <!-- Animated Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              An innovation-driven company building cross-field solutions that redefine what's possible in technology, creativity, business, and beyond.
            </p>
          </div>
        </div>
        
        <!-- Enhanced Scroll Indicator -->
        <div class="flex flex-col items-center animate-fade-in-up animation-delay-1200 mb-8">
          <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center mb-1 sm:mb-2 animate-bounce">
            <div class="w-1 h-2 sm:h-3 bg-gray-400 rounded-full animate-ping mt-1 sm:mt-2"></div>
          </div>
          <UIcon name="i-heroicons-chevron-down" class="text-lg sm:text-xl text-gray-400" />
        </div>
        
        <!-- Animated Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-1500 px-4">
          <UButton size="lg" class="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl rounded-full">
            <UIcon name="i-heroicons-rocket-launch" class="mr-2 animate-bounce" />
            Explore Our Brands
          </UButton>
          <UButton variant="outline" size="lg" class="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-full">
            <UIcon name="i-heroicons-users" class="mr-2" />
            Join Our Mission
          </UButton>
        </div>
      </div>
    </section>


    <!-- About/Vision Section -->
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
            Built to <span class="text-primary-500">Innovate</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We believe the best solutions emerge when you combine different industries, perspectives, and technologies. That's why we work across fields to create meaningful impact.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <UCard class="text-center p-4 sm:p-6 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-bolt" class="text-4xl text-orange-500 dark:text-orange-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Bold</h3>
            <p class="text-gray-600 dark:text-gray-400">We embrace calculated risks and aren't afraid to pursue ambitious ideas that create real value.</p>
          </UCard>

          <UCard class="text-center p-4 sm:p-6 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-paint-brush" class="text-4xl text-rose-500 dark:text-rose-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Creative</h3>
            <p class="text-gray-600 dark:text-gray-400">Fresh perspectives and unconventional approaches help us solve problems in ways others haven't considered.</p>
          </UCard>

          <UCard class="text-center p-4 sm:p-6 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-arrows-right-left" class="text-4xl text-emerald-500 dark:text-emerald-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Adaptable</h3>
            <p class="text-gray-600 dark:text-gray-400">We stay agile and responsive, quickly adapting to new technologies and market shifts as they emerge.</p>
          </UCard>

          <UCard class="text-center p-4 sm:p-6 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-light-bulb" class="text-4xl text-violet-500 dark:text-violet-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovative</h3>
            <p class="text-gray-600 dark:text-gray-400">Innovation drives everything we do, from how we approach problems to how we build lasting solutions.</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Brand Portfolio Section -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Dynamic grid pattern background -->
      <div class="absolute inset-0 opacity-20 dark:opacity-10">
        <div class="absolute inset-0 opacity-20 dark:opacity-10"></div>
      </div>
      <!-- Floating brand elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-32 left-8 w-4 h-4 bg-emerald-500/40 dark:bg-emerald-400/30 rounded-full animate-bounce animation-delay-500"></div>
        <div class="absolute bottom-32 right-8 w-6 h-6 bg-teal-500/40 dark:bg-teal-400/30 rounded-full animate-bounce animation-delay-1500"></div>
        <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-500/40 dark:bg-cyan-400/30 rounded-full animate-bounce animation-delay-2500"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Brand <span class="text-primary-500">Universe</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            From AI-powered creative solutions to sports tech platforms, discover our portfolio of brands transforming industries through innovation.
          </p>
          
          <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full p-2 sm:p-3 max-w-fit mx-auto">
            <UButton 
              :variant="selectedFilter === 'all' ? 'soft' : 'ghost'" 
              size="sm" 
              class="rounded-full px-3 sm:px-4 text-sm sm:text-base" 
              @click="setFilter('all')"
            >
              All Brands
            </UButton>
            <UButton 
              :variant="selectedFilter === 'live' ? 'soft' : 'ghost'" 
              size="sm" 
              class="rounded-full px-3 sm:px-4 text-sm sm:text-base" 
              @click="setFilter('live')"
            >
              Live Brands
            </UButton>
            <UButton 
              :variant="selectedFilter === 'development' ? 'soft' : 'ghost'" 
              size="sm" 
              class="rounded-full px-3 sm:px-4 text-sm sm:text-base" 
              @click="setFilter('development')"
            >
              Brands in Development
            </UButton>
          </div>
        </div>
        
        <TransitionGroup 
          name="brand-filter" 
          tag="div" 
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <!-- Eskala - Live Brand -->
          <a v-if="isVisible('live')" key="eskala" href="https://eskala.id" target="_blank" class="block">
            <UCard class="bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-white/70 dark:hover:border-white/30 hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl cursor-pointer">
              <template #header>
                <div class="relative">
                  <div class="absolute top-4 right-4">
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                  </div>
                  <div class="h-48 bg-purple-500 dark:bg-purple-600 rounded-t-3xl flex items-center justify-center">
                    <UIcon name="i-heroicons-sparkles" class="text-6xl text-white" />
                  </div>
                </div>
              </template>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Eskala</h3>
                <p class="text-gray-600 dark:text-gray-400">All-in-One Creative Partner delivering high-quality brand-focused creative services designed to increase revenue and brand impact.</p>
              </div>
            </UCard>
          </a>

          <!-- Memomancy - Live Brand -->
          <a v-if="isVisible('live')" key="memomancy" href="https://memomancy.com" target="_blank" class="block">
            <UCard class="bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-white/70 dark:hover:border-white/30 hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl cursor-pointer">
              <template #header>
                <div class="relative">
                  <div class="absolute top-4 right-4">
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                  </div>
                  <div class="h-48 bg-emerald-500 dark:bg-emerald-600 rounded-t-3xl flex items-center justify-center">
                    <UIcon name="i-heroicons-camera" class="text-6xl text-white" />
                  </div>
                </div>
              </template>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Memomancy</h3>
                <p class="text-gray-600 dark:text-gray-400">Web-centralized photo/videographer service with trained professionals across regions, offering standardized quality and flexible pricing.</p>
              </div>
            </UCard>
          </a>

          <!-- Fieldpass - In Development -->
          <a v-if="isVisible('development')" key="fieldpass" href="https://fieldpass.co" target="_blank" class="block">
            <UCard class="bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-white/70 dark:hover:border-white/30 hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl cursor-pointer">
              <template #header>
                <div class="relative">
                  <div class="absolute top-4 right-4">
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                  </div>
                  <div class="h-48 bg-orange-500 dark:bg-orange-600 rounded-t-3xl flex items-center justify-center">
                    <UIcon name="i-heroicons-trophy" class="text-6xl text-white" />
                  </div>
                </div>
              </template>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Fieldpass</h3>
                <p class="text-gray-600 dark:text-gray-400">Mobile-focused sports reservation app with competitive leaderboards, tournaments, and venue management systems.</p>
              </div>
            </UCard>
          </a>

          <!-- Heavy Station - In Development -->
          <a v-if="isVisible('development')" key="heavystation" href="https://heavystation.id" target="_blank" class="block">
            <UCard class="bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-white/70 dark:hover:border-white/30 hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl cursor-pointer">
              <template #header>
                <div class="relative">
                  <div class="absolute top-4 right-4">
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                  </div>
                  <div class="h-48 bg-slate-600 dark:bg-slate-700 rounded-t-3xl flex items-center justify-center">
                    <UIcon name="i-heroicons-cpu-chip" class="text-6xl text-white" />
                  </div>
                </div>
              </template>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Heavy Station</h3>
                <p class="text-gray-600 dark:text-gray-400">High-quality customizable PC parts brand focused on delivering premium, custom-built computer components.</p>
              </div>
            </UCard>
          </a>
        </TransitionGroup>
      </div>
    </section>

    <!-- Innovation Focus Areas -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Neural network inspired background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="1.5" class="fill-primary-600 dark:fill-primary-400" opacity="0.5"/>
            </pattern>
            <!-- Radial gradient removed for solid colors -->
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <circle cx="200" cy="150" r="40" fill="rgba(139, 92, 246, 0.4)" class="animate-pulse" />
          <circle cx="800" cy="200" r="35" fill="rgba(139, 92, 246, 0.4)" class="animate-pulse animation-delay-1000" />
          <circle cx="400" cy="400" r="45" fill="rgba(139, 92, 246, 0.4)" class="animate-pulse animation-delay-2000" />
          <circle cx="1000" cy="500" r="30" fill="rgba(139, 92, 246, 0.4)" class="animate-pulse animation-delay-1500" />
        </svg>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Where Industries <span class="text-primary-500">Meet</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The magic happens when different fields come together. We combine AI with creativity, technology with sports, and hardware with innovation to build solutions that transcend industry boundaries.
          </p>
        </div>

        <div class="relative">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl p-4 sm:p-6 lg:p-8">
            <div class="text-center group hover:bg-white/40 dark:hover:bg-white/12 hover:backdrop-blur-xl rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 cursor-pointer hover:scale-105">
              <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-primary-400/30 dark:bg-primary-400/20 backdrop-blur-xl border border-primary-300/40 dark:border-primary-500/30 shadow-xl shadow-primary-500/30 dark:shadow-primary-400/40 rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary-500/50 dark:group-hover:shadow-primary-400/60 transition-all duration-500">
                <UIcon name="i-heroicons-cpu-chip" class="text-2xl sm:text-3xl lg:text-4xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Artificial Intelligence</h3>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Smart algorithms that learn and adapt</p>
            </div>
            <div class="text-center group hover:bg-white/40 dark:hover:bg-white/12 hover:backdrop-blur-xl rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 cursor-pointer hover:scale-105">
              <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-emerald-400/30 dark:bg-emerald-400/20 backdrop-blur-xl border border-emerald-300/40 dark:border-emerald-500/30 shadow-xl shadow-emerald-500/30 dark:shadow-emerald-400/40 rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-emerald-500/50 dark:group-hover:shadow-emerald-400/60 transition-all duration-500">
                <UIcon name="i-heroicons-trophy" class="text-2xl sm:text-3xl lg:text-4xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Sports Technology</h3>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Connecting athletes and venues digitally</p>
            </div>
            <div class="text-center group hover:bg-white/40 dark:hover:bg-white/12 hover:backdrop-blur-xl rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 cursor-pointer hover:scale-105">
              <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-amber-400/30 dark:bg-amber-400/20 backdrop-blur-xl border border-amber-300/40 dark:border-amber-500/30 shadow-xl shadow-amber-500/30 dark:shadow-amber-400/40 rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-amber-500/50 dark:group-hover:shadow-amber-400/60 transition-all duration-500">
                <UIcon name="i-heroicons-camera" class="text-2xl sm:text-3xl lg:text-4xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Creative Services</h3>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Professional content creation at scale</p>
            </div>
            <div class="text-center group hover:bg-white/40 dark:hover:bg-white/12 hover:backdrop-blur-xl rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 cursor-pointer hover:scale-105">
              <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-violet-400/30 dark:bg-violet-400/20 backdrop-blur-xl border border-violet-300/40 dark:border-violet-500/30 shadow-xl shadow-violet-500/30 dark:shadow-violet-400/40 rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-violet-500/50 dark:group-hover:shadow-violet-400/60 transition-all duration-500">
                <UIcon name="i-heroicons-wrench-screwdriver" class="text-2xl sm:text-3xl lg:text-4xl text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 class="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">Hardware Engineering</h3>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Custom PC components built for performance</p>
            </div>
          </div>

          <!-- Interactive Connection Network -->
          <div class="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
            <svg class="w-full h-full" viewBox="0 0 1000 300">
              <defs>
                <!-- Connection gradient removed for solid colors -->
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
              </defs>
              
              <!-- Main connection web -->
              <path d="M125,150 Q300,80 500,150 Q700,80 875,150" 
                    stroke="rgb(99, 102, 241)" 
                    stroke-width="2" 
                    fill="none" 
                    filter="url(#glow)"
                    class="animate-pulse"/>
              
              <path d="M125,150 Q300,220 500,150 Q700,220 875,150" 
                    stroke="rgb(99, 102, 241)" 
                    stroke-width="2" 
                    fill="none" 
                    filter="url(#glow)"
                    class="animate-pulse"
                    style="animation-delay: 1s;"/>
              
              <!-- Cross connections -->
              <path d="M250,150 Q500,100 750,150" 
                    stroke="rgb(99, 102, 241)" 
                    stroke-width="1.5" 
                    fill="none" 
                    opacity="0.4"
                    class="animate-pulse"
                    style="animation-delay: 2s;"/>
                    
              <!-- Connection nodes -->
              <circle cx="125" cy="150" r="4" fill="rgb(99, 102, 241)" opacity="0.8" class="animate-pulse"/>
              <circle cx="375" cy="150" r="4" fill="rgb(16, 185, 129)" opacity="0.8" class="animate-pulse" style="animation-delay: 0.5s;"/>
              <circle cx="625" cy="150" r="4" fill="rgb(245, 158, 11)" opacity="0.8" class="animate-pulse" style="animation-delay: 1s;"/>
              <circle cx="875" cy="150" r="4" fill="rgb(139, 92, 246)" opacity="0.8" class="animate-pulse" style="animation-delay: 1.5s;"/>
            </svg>
          </div>
        </div>

        <div class="text-center bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl p-8 max-w-4xl mx-auto">
          <div class="flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-light-bulb" class="text-3xl text-yellow-500 mr-3 animate-pulse" />
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">The Noktah Approach</h4>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">
            "When you mix AI with creative design, or combine sports with technology, amazing things happen. That's where we play."
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Real innovation comes from connecting dots that others don't see.
          </p>
        </div>
      </div>
    </section>

    <!-- For Different Audiences -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Warm community-inspired background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Overlapping circles representing different audiences -->
        <div class="absolute top-20 left-1/4 w-64 h-64 bg-amber-200/20 dark:bg-amber-800/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-1/4 w-72 h-72 bg-rose-200/20 dark:bg-rose-800/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-violet-200/20 dark:bg-violet-800/10 rounded-full blur-2xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built for <span class="text-primary-500">Everyone</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're seeking cutting-edge solutions, partnership opportunities, or a place to build your career, we have something for you.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="mb-6">
                <UIcon name="i-heroicons-shopping-bag" class="text-5xl text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Customers</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Discover cutting-edge solutions that solve real problems and enhance your business or personal life.
            </p>
            <NuxtLink to="/brands">
              <UButton class="w-full rounded-full" variant="soft">
                Explore Solutions
                <UIcon name="i-heroicons-arrow-right" class="ml-2" />
              </UButton>
            </NuxtLink>
          </UCard>

          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="mb-6">
                <UIcon name="i-heroicons-user-group" class="text-5xl text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Collaborators</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Partner with innovators who share your vision for pushing the boundaries of what's possible.
            </p>
            <NuxtLink to="/contact">
              <UButton class="w-full rounded-full" variant="soft" color="emerald">
                Partner With Us
                <UIcon name="i-heroicons-arrow-right" class="ml-2" />
              </UButton>
            </NuxtLink>
          </UCard>

          <UCard class="text-center p-6 lg:p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="mb-6">
                <UIcon name="i-heroicons-users" class="text-5xl text-violet-600 dark:text-violet-400 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Talent</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Build the future with us. Join a team that values creativity, innovation, and pushing conventional limits.
            </p>
            <NuxtLink to="/contact">
              <UButton class="w-full rounded-full" variant="soft" color="violet">
                Join Our Team
                <UIcon name="i-heroicons-arrow-right" class="ml-2" />
              </UButton>
            </NuxtLink>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Culture/Values -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Organic growth patterns -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <!-- Leaf-like organic shapes -->
        <div class="absolute top-16 left-16 w-32 h-48 bg-emerald-400/40 dark:bg-emerald-600/30 rounded-full transform rotate-45 blur-xl"></div>
        <div class="absolute bottom-24 right-20 w-40 h-56 bg-teal-400/40 dark:bg-teal-600/30 rounded-full transform -rotate-12 blur-xl"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-36 bg-green-400/40 dark:bg-green-600/30 rounded-full transform rotate-75 blur-lg"></div>
        <!-- Growth rings -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="w-96 h-96 border border-emerald-300/30 dark:border-emerald-600/25 rounded-full animate-pulse"></div>
          <div class="absolute top-8 left-8 w-80 h-80 border border-green-300/30 dark:border-green-600/25 rounded-full animate-pulse animation-delay-1000"></div>
          <div class="absolute top-16 left-16 w-64 h-64 border border-teal-300/30 dark:border-teal-600/25 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span class="text-primary-500">Culture</span> of Innovation
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We believe that the best innovations come from diverse teams working in an environment that encourages experimentation, celebrates failure as learning, and rewards bold thinking.
            </p>
            
            <div class="space-y-4 sm:space-y-6 bg-white/40 dark:bg-white/10 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-2xl p-4 sm:p-6">
              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-beaker" class="text-2xl text-primary-600 dark:text-primary-400 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Experiment Fearlessly</h3>
                  <p class="text-gray-600 dark:text-gray-400">We encourage taking calculated risks and learning from every outcome.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-puzzle-piece" class="text-2xl text-emerald-600 dark:text-emerald-400 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Think Cross-Functionally</h3>
                  <p class="text-gray-600 dark:text-gray-400">Best solutions emerge when different perspectives collaborate.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <UIcon name="i-heroicons-forward" class="text-2xl text-violet-600 dark:text-violet-400 mt-1" />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Move Fast, Learn Faster</h3>
                  <p class="text-gray-600 dark:text-gray-400">Speed and agility are key to staying ahead in today's world.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-square bg-white/[0.07] backdrop-blur-sm border border-white/60 dark:border-white/30 shadow-2xl shadow-black/10 dark:shadow-black/50 rounded-full flex items-center justify-center">
              <div class="text-center">
                <UIcon name="i-heroicons-sparkles" class="text-8xl text-primary-600 dark:text-primary-400 mb-4" />
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">Innovation in Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: 'Noktah Inovasi Teknologi - Pushing Beyond Conventional Limits',
  description: 'An innovation-driven company building cross-field solutions that redefine what\'s possible in technology, creativity, business, and beyond. Discover our portfolio of brands transforming industries through innovation.',
  ogTitle: 'Noktah Inovasi Teknologi - Cross-Field Innovation',
  ogDescription: 'Building breakthrough solutions through AI, creative services, sports technology, and hardware engineering. Where Industries Meet.',
  ogImage: '/images/noktah-logo.png',
  ogUrl: 'https://noktah.co',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Noktah Inovasi Teknologi - Innovation Hub',
  twitterDescription: 'Cross-field innovation company with brands like Eskala, Memomancy, Fieldpass, and Heavy Station.',
  twitterImage: '/images/noktah-logo.png',
  keywords: 'innovation, technology, AI, creative services, sports technology, hardware engineering, cross-field solutions, Indonesia, Gresik'
})

// Brand filtering state
const selectedFilter = ref('all')

// Filter functions
const setFilter = (filter) => {
  selectedFilter.value = filter
}

const isVisible = (brandStatus) => {
  if (selectedFilter.value === 'all') return true
  if (selectedFilter.value === 'live' && brandStatus === 'live') return true
  if (selectedFilter.value === 'development' && brandStatus === 'development') return true
  return false
}
</script>

<style scoped>
/* Brand filtering animations */
.brand-filter-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.brand-filter-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.brand-filter-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
}

.brand-filter-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.brand-filter-move {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Staggered animation delays */
.brand-filter-enter-active:nth-child(1) { transition-delay: 0ms; }
.brand-filter-enter-active:nth-child(2) { transition-delay: 100ms; }
.brand-filter-enter-active:nth-child(3) { transition-delay: 200ms; }
.brand-filter-enter-active:nth-child(4) { transition-delay: 300ms; }

/* Smooth section transitions */
section {
  background-attachment: local;
  background-blend-mode: normal;
}

/* Solid color styling */
body {
  background: rgb(249, 250, 251) !important;
  background-attachment: fixed;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0D1117 !important;
    background-attachment: fixed;
  }
}
</style>
