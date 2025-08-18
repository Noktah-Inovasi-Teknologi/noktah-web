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
              Our Brand Universe
            </p>
          </div>
          
          <!-- Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              Discover our portfolio of innovative brands, each designed to push boundaries in their respective fields through cross-industry innovation.
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

    <!-- Brand Portfolio Section -->
    <section class="py-20 relative bg-gray-50 dark:bg-[#0D1117]">
      <!-- Floating brand elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-32 left-8 w-4 h-4 bg-emerald-500/40 dark:bg-emerald-400/30 rounded-full animate-bounce animation-delay-500"></div>
        <div class="absolute bottom-32 right-8 w-6 h-6 bg-teal-500/40 dark:bg-teal-400/30 rounded-full animate-bounce animation-delay-1500"></div>
        <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-500/40 dark:bg-cyan-400/30 rounded-full animate-bounce animation-delay-2500"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span class="text-primary-500">Brands</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Each brand represents our commitment to innovation across different industries, combining cutting-edge technology with creative solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Eskala Brand Card -->
          <div class="group">
            <a href="https://eskala.id" target="_blank" class="block">
              <div class="eskala-card bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-white/70 dark:hover:border-white/30 hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl overflow-hidden">
                <div class="relative">
                  <!-- Brand Header with Eskala Colors -->
                  <div class="h-48 bg-gradient-to-br from-[#4A90E2] to-[#2E5BBA] flex items-center justify-center relative overflow-hidden">
                    <div class="absolute top-4 right-4">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                    </div>
                    <!-- Eskala Logo/Icon -->
                    <div class="text-center">
                      <UIcon name="i-heroicons-sparkles" class="text-8xl text-white mb-2" />
                      <div class="w-16 h-1 bg-[#FF6B35] rounded-full mx-auto"></div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute bottom-0 right-0 w-24 h-24 bg-[#FF6B35]/30 rounded-full blur-xl"></div>
                    <div class="absolute top-0 left-0 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                  </div>
                  
                  <!-- Content -->
                  <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Eskala</h3>
                      <div class="px-3 py-1 bg-[#4A90E2]/20 dark:bg-[#4A90E2]/30 text-[#2E5BBA] dark:text-[#4A90E2] text-sm font-medium rounded-full">
                        Live
                      </div>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      Professional-grade creative partner leveraging AI agents and automation to deliver impactful, revenue-increasing content. Eskala bridges the gap between creative vision and business results through intelligent workflows and data-driven design strategies.
                    </p>
                    
                    <!-- Features -->
                    <div class="space-y-3 mb-6">
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">AI-Powered Creative Workflows</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Professional Content Creation</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Revenue-Focused Design Strategy</span>
                      </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div class="flex items-center text-[#4A90E2] font-medium group-hover:text-[#2E5BBA] transition-colors duration-300">
                        <span>Explore Eskala</span>
                        <UIcon name="i-heroicons-arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Memomancy Brand Card -->
          <div class="group">
            <a href="https://memomancy.com" target="_blank" class="block">
              <div class="memomancy-card bg-white/40 dark:bg-white/12 backdrop-blur-2xl border-2 border-[#1F1F1F] dark:border-[#F5F2EB] shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-[#1F1F1F] dark:hover:border-[#F5F2EB] hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl overflow-hidden">
                <div class="relative">
                  <!-- Brand Header with Memomancy Colors -->
                  <div class="h-48 bg-gradient-to-br from-[#F5F2EB] to-[#E8E5DE] dark:from-[#1F1F1F] dark:to-[#2A2A2A] flex items-center justify-center relative overflow-hidden">
                    <div class="absolute top-4 right-4">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-[#1F1F1F] dark:text-[#F5F2EB] opacity-80 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <!-- Memomancy Logo/Icon -->
                    <div class="text-center">
                      <UIcon name="i-heroicons-camera" class="text-8xl text-[#1F1F1F] dark:text-[#F5F2EB] mb-2" />
                      <div class="w-16 h-1 bg-[#E3FE01] rounded-full mx-auto"></div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute bottom-0 right-0 w-24 h-24 bg-[#E3FE01]/30 rounded-full blur-xl"></div>
                    <div class="absolute top-0 left-0 w-16 h-16 bg-[#E3FE01]/20 rounded-full blur-lg"></div>
                  </div>
                  
                  <!-- Content -->
                  <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Memomancy</h3>
                      <div class="px-3 py-1 bg-[#E3FE01]/30 text-[#1F1F1F] dark:text-[#F5F2EB] text-sm font-medium rounded-full border border-[#1F1F1F] dark:border-[#F5F2EB]">
                        Live
                      </div>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      Web-centralized photography and videography service network featuring trained professionals across multiple regions. Memomancy delivers consistent, high-quality visual content with standardized processes and flexible pricing models tailored to diverse client needs.
                    </p>
                    
                    <!-- Features -->
                    <div class="space-y-3 mb-6">
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#E3FE01] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Professional Photography Network</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#E3FE01] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Standardized Quality Assurance</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#E3FE01] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Flexible Regional Coverage</span>
                      </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div class="flex items-center text-[#1F1F1F] dark:text-[#F5F2EB] font-medium group-hover:text-[#E3FE01] transition-colors duration-300">
                        <span>Explore Memomancy</span>
                        <UIcon name="i-heroicons-arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Heavy Station Brand Card -->
          <div class="group">
            <a href="https://heavystation.id" target="_blank" class="block">
              <div class="heavy-station-card bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-[#2C2C2C] shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-[#2C2C2C] hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl overflow-hidden">
                <div class="relative">
                  <!-- Brand Header with Heavy Station Colors -->
                  <div class="h-48 bg-gradient-to-br from-[#121212] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
                    <div class="absolute top-4 right-4">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                    </div>
                    <!-- Heavy Station Logo/Icon -->
                    <div class="text-center">
                      <UIcon name="i-heroicons-cpu-chip" class="text-8xl text-white mb-2" />
                      <div class="w-16 h-1 bg-[#FA1D33] rounded-full mx-auto"></div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute bottom-0 right-0 w-24 h-24 bg-[#FA1D33]/30 rounded-full blur-xl"></div>
                    <div class="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                  </div>
                  
                  <!-- Content -->
                  <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Heavy Station</h3>
                      <div class="px-3 py-1 bg-[#FA1D33]/20 text-[#FA1D33] text-sm font-medium rounded-full border border-[#2C2C2C]">
                        In Development
                      </div>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      Premium customizable PC components brand focused on delivering high-quality, custom-built computer hardware. Heavy Station combines cutting-edge technology with personalized configurations to meet the demanding requirements of enthusiasts and professionals.
                    </p>
                    
                    <!-- Features -->
                    <div class="space-y-3 mb-6">
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#FA1D33] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">High-Quality Components</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#FA1D33] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Custom Build Configurations</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-[#FA1D33] rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Premium Hardware Solutions</span>
                      </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div class="flex items-center text-[#FA1D33] font-medium group-hover:text-[#121212] dark:group-hover:text-white transition-colors duration-300">
                        <span>Explore Heavy Station</span>
                        <UIcon name="i-heroicons-arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Fieldpass Brand Card -->
          <div class="group">
            <a href="https://fieldpass.co" target="_blank" class="block">
              <div class="fieldpass-card bg-white/40 dark:bg-white/12 backdrop-blur-2xl border border-white/50 dark:border-white/20 shadow-2xl shadow-black/10 dark:shadow-black/50 hover:bg-white/60 dark:hover:bg-white/18 hover:border-white/70 dark:hover:border-white/30 hover:-translate-y-3 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-500 rounded-2xl overflow-hidden">
                <div class="relative">
                  <!-- Brand Header with Default Theme -->
                  <div class="h-48 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 flex items-center justify-center relative overflow-hidden">
                    <div class="absolute top-4 right-4">
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-2xl text-white/80 hover:text-white transition-colors duration-300" />
                    </div>
                    <!-- Fieldpass Logo/Icon -->
                    <div class="text-center">
                      <UIcon name="i-heroicons-trophy" class="text-8xl text-white mb-2" />
                      <div class="w-16 h-1 bg-white rounded-full mx-auto"></div>
                    </div>
                    <!-- Decorative elements -->
                    <div class="absolute bottom-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                    <div class="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                  </div>
                  
                  <!-- Content -->
                  <div class="p-8">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Fieldpass</h3>
                      <div class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium rounded-full">
                        In Development
                      </div>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      Mobile-focused sports reservation platform featuring competitive leaderboards, tournament management, and comprehensive venue coordination systems. Fieldpass revolutionizes sports facility booking through gamification and community-driven engagement.
                    </p>
                    
                    <!-- Features -->
                    <div class="space-y-3 mb-6">
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Sports Facility Reservations</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Competitive Leaderboards</span>
                      </div>
                      <div class="flex items-center">
                        <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span class="text-sm text-gray-700 dark:text-gray-300">Tournament Management</span>
                      </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div class="flex items-center text-orange-600 dark:text-orange-400 font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-300">
                        <span>Explore Fieldpass</span>
                        <UIcon name="i-heroicons-arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross-Field Innovation Section -->
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
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Noktah <span class="text-primary-500">Difference</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Each brand benefits from our cross-field innovation approach, applying insights from one industry to solve challenges in another.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="text-center p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-5xl text-yellow-500 dark:text-yellow-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Shared Innovation</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Insights from AI development enhance our creative workflows, while hardware expertise improves our software solutions.</p>
          </UCard>

          <UCard class="text-center p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-arrow-path" class="text-5xl text-emerald-500 dark:text-emerald-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Each brand's challenges become learning opportunities that strengthen our entire portfolio and drive innovation forward.</p>
          </UCard>

          <UCard class="text-center p-8 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.10] hover:border-white/[0.35] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 rounded-2xl">
            <template #header>
              <div class="flex justify-center mb-6">
                <UIcon name="i-heroicons-puzzle-piece" class="text-5xl text-violet-500 dark:text-violet-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Integrated Ecosystem</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">Our brands work together as an interconnected ecosystem, creating synergies that benefit customers across all touchpoints.</p>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta
useSeoMeta({
  title: 'Our Brands - Noktah Inovasi Teknologi',
  description: 'Discover Noktah\'s innovative brand portfolio: Eskala (AI-powered creative solutions), Memomancy (professional photography), Fieldpass (sports technology), and Heavy Station (premium PC hardware).',
  ogTitle: 'Our Brands - Noktah Inovasi Teknologi',
  ogDescription: 'Explore our portfolio of brands transforming industries through cross-field innovation and cutting-edge technology solutions.',
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