<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-primary-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <!-- Simple Cell Division Animation -->
      <div class="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div 
          v-if="animationState === 'single' || animationState === 'merging'"
          class="cell-single"
          :class="{ 'merging': animationState === 'merging' }"
        ></div>
        <div 
          v-if="animationState === 'dividing' || animationState === 'divided'"
          class="cell-container"
        >
          <div class="cell-left" :class="{ 'dividing': animationState === 'dividing' }"></div>
          <div class="cell-right" :class="{ 'dividing': animationState === 'dividing' }"></div>
        </div>
      </div>

      <div class="text-center z-10 max-w-5xl px-4">
        <div class="mb-8">
          <!-- Animated Lightning Icon -->
          <div class="relative inline-block mb-6">
            <UIcon name="i-heroicons-lightning-bolt" class="text-6xl text-primary-500 mx-auto animate-pulse" />
            <div class="absolute inset-0 animate-ping">
              <UIcon name="i-heroicons-lightning-bolt" class="text-6xl text-primary-300/50 mx-auto" />
            </div>
          </div>
          
          <!-- Animated Title -->
          <h1 class="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-none">
            <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300%">
              NOKTAH
            </span>
          </h1>
          
          <!-- Animated Tagline -->
          <div class="overflow-hidden mb-4">
            <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-500">
              Pushing Beyond Conventional Limits
            </p>
          </div>
          
          <!-- Animated Description -->
          <div class="overflow-hidden mb-12">
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
              An innovation-driven holding company building cross-field solutions that redefine what's possible in technology, business, and beyond.
            </p>
          </div>
        </div>
        
        <!-- Animated Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1500">
          <UButton size="xl" class="px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <UIcon name="i-heroicons-rocket-launch" class="mr-2 animate-bounce" />
            Explore Our Brands
          </UButton>
          <UButton variant="outline" size="xl" class="px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <UIcon name="i-heroicons-users" class="mr-2" />
            Join Our Mission
          </UButton>
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


    <!-- About/Vision Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Innovation is Our <span class="text-primary-500">DNA</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We don't just adapt to change—we create it. Our mission is to pioneer solutions that cross industry boundaries and challenge conventional thinking.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard class="text-center p-6 hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-bolt" class="text-4xl text-orange-500 dark:text-orange-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Bold</h3>
            <p class="text-gray-600 dark:text-gray-400">We take calculated risks others won't, pushing boundaries to discover new possibilities.</p>
          </UCard>

          <UCard class="text-center p-6 hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-paint-brush" class="text-4xl text-rose-500 dark:text-rose-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Creative</h3>
            <p class="text-gray-600 dark:text-gray-400">Every challenge is an opportunity for innovative thinking and creative problem-solving.</p>
          </UCard>

          <UCard class="text-center p-6 hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-arrows-right-left" class="text-4xl text-emerald-500 dark:text-emerald-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Adaptable</h3>
            <p class="text-gray-600 dark:text-gray-400">We embrace emerging technologies and pivot quickly to stay ahead of market demands.</p>
          </UCard>

          <UCard class="text-center p-6 hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex justify-center mb-4">
                <UIcon name="i-heroicons-light-bulb" class="text-4xl text-violet-500 dark:text-violet-400" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovative</h3>
            <p class="text-gray-600 dark:text-gray-400">Innovation isn't just what we do—it's how we think, operate, and approach every project.</p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Brand Portfolio Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Brand <span class="text-primary-500">Universe</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            From live products serving thousands to cutting-edge concepts in development, explore our diverse portfolio of cross-industry innovations.
          </p>
          
          <div class="flex justify-center space-x-4 mb-12">
            <UButton variant="soft" size="sm" class="rounded-full">All Brands</UButton>
            <UButton variant="ghost" size="sm" class="rounded-full">Live Products</UButton>
            <UButton variant="ghost" size="sm" class="rounded-full">In Development</UButton>
            <UButton variant="ghost" size="sm" class="rounded-full">Coming Soon</UButton>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Live Brand Example -->
          <UCard class="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <template #header>
              <div class="relative">
                <div class="absolute top-4 right-4">
                  <UBadge color="green" variant="solid" class="rounded-full">LIVE</UBadge>
                </div>
                <div class="h-48 bg-gradient-to-br from-blue-500 to-primary-600 dark:from-blue-600 dark:to-primary-700 rounded-t-lg flex items-center justify-center">
                  <UIcon name="i-heroicons-globe-alt" class="text-6xl text-white" />
                </div>
              </div>
            </template>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Brand Alpha</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Revolutionary SaaS platform transforming how businesses manage cross-team collaboration.</p>
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-primary-500">Technology • Enterprise</span>
                <UButton variant="ghost" size="xs">Learn More</UButton>
              </div>
            </div>
          </UCard>

          <!-- In Development Brand -->
          <UCard class="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <template #header>
              <div class="relative">
                <div class="absolute top-4 right-4">
                  <UBadge color="yellow" variant="solid" class="rounded-full">DEV</UBadge>
                </div>
                <div class="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 rounded-t-lg flex items-center justify-center">
                  <UIcon name="i-heroicons-cpu-chip" class="text-6xl text-white" />
                </div>
              </div>
            </template>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Brand Beta</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">AI-powered healthcare analytics platform bridging medical research and patient care.</p>
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-primary-500">Healthcare • AI</span>
                <UButton variant="ghost" size="xs">Early Access</UButton>
              </div>
            </div>
          </UCard>

          <!-- Coming Soon Brand -->
          <UCard class="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <template #header>
              <div class="relative">
                <div class="absolute top-4 right-4">
                  <UBadge color="gray" variant="solid" class="rounded-full">SOON</UBadge>
                </div>
                <div class="h-48 bg-gradient-to-br from-violet-500 to-rose-600 dark:from-violet-600 dark:to-rose-700 rounded-t-lg flex items-center justify-center">
                  <UIcon name="i-heroicons-rocket-launch" class="text-6xl text-white" />
                </div>
              </div>
            </template>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Brand Gamma</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Next-generation fintech solution democratizing investment opportunities worldwide.</p>
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-primary-500">Fintech • Investment</span>
                <UButton variant="ghost" size="xs">Get Notified</UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Innovation Focus Areas -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cross-Field <span class="text-primary-500">Innovation</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We thrive at the intersection of industries, creating solutions that bridge traditional boundaries and unlock new value propositions.
          </p>
        </div>

        <div class="relative">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                <UIcon name="i-heroicons-cpu-chip" class="text-3xl text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white">AI & ML</h3>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                <UIcon name="i-heroicons-heart" class="text-3xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Healthcare</h3>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
                <UIcon name="i-heroicons-banknotes" class="text-3xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Fintech</h3>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 bg-violet-100 dark:bg-violet-900/50 rounded-full flex items-center justify-center">
                <UIcon name="i-heroicons-academic-cap" class="text-3xl text-violet-600 dark:text-violet-400" />
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white">EdTech</h3>
            </div>
          </div>

          <!-- Connection Lines (decorative) -->
          <div class="hidden lg:block absolute inset-0 pointer-events-none">
            <svg class="w-full h-full" viewBox="0 0 800 200">
              <defs>
                <pattern id="connectionPattern" patternUnits="userSpaceOnUse" width="4" height="4">
                  <circle cx="2" cy="2" r="1" class="fill-primary-300 dark:fill-primary-700" />
                </pattern>
              </defs>
              <path d="M200,100 Q400,50 600,100" stroke="url(#connectionPattern)" stroke-width="2" fill="none" opacity="0.5" />
              <path d="M200,100 Q400,150 600,100" stroke="url(#connectionPattern)" stroke-width="2" fill="none" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div class="text-center">
          <p class="text-lg text-gray-600 dark:text-gray-400 italic">
            "Innovation happens at the intersection of different fields, where unique perspectives collide to create breakthrough solutions."
          </p>
        </div>
      </div>
    </section>

    <!-- For Different Audiences -->
    <section class="py-20 bg-gradient-to-r from-primary-50/50 via-violet-50/50 to-rose-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built for <span class="text-primary-500">Everyone</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're seeking cutting-edge solutions, partnership opportunities, or a place to build your career, we have something for you.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UCard class="text-center p-8 hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <template #header>
              <div class="mb-6">
                <UIcon name="i-heroicons-shopping-bag" class="text-5xl text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Customers</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Discover cutting-edge solutions that solve real problems and enhance your business or personal life.
            </p>
            <UButton class="w-full" variant="soft">
              Explore Solutions
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </UCard>

          <UCard class="text-center p-8 hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <template #header>
              <div class="mb-6">
                <UIcon name="i-heroicons-handshake" class="text-5xl text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Collaborators</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Partner with innovators who share your vision for pushing the boundaries of what's possible.
            </p>
            <UButton class="w-full" variant="soft" color="emerald">
              Partner With Us
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </UCard>

          <UCard class="text-center p-8 hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <template #header>
              <div class="mb-6">
                <UIcon name="i-heroicons-users" class="text-5xl text-violet-600 dark:text-violet-400 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">For Talent</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Build the future with us. Join a team that values creativity, innovation, and pushing conventional limits.
            </p>
            <UButton class="w-full" variant="soft" color="violet">
              Join Our Team
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Culture/Values -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span class="text-primary-500">Culture</span> of Innovation
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We believe that the best innovations come from diverse teams working in an environment that encourages experimentation, celebrates failure as learning, and rewards bold thinking.
            </p>
            
            <div class="space-y-6">
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
            <div class="aspect-square bg-gradient-to-br from-primary-100 via-violet-100 to-rose-100 dark:from-primary-900/50 dark:via-violet-900/50 dark:to-rose-900/50 rounded-2xl flex items-center justify-center">
              <div class="text-center">
                <UIcon name="i-heroicons-sparkles" class="text-8xl text-primary-600 dark:text-primary-400 mb-4" />
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">Innovation in Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Hub -->
    <section class="py-20 bg-gray-900 dark:bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Push <span class="text-primary-400">Beyond Limits?</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Join us in building the future. Whether you want to use our products, collaborate on projects, or be part of our team, let's connect.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <UCard class="p-6 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div class="text-center">
              <UIcon name="i-heroicons-envelope" class="text-3xl text-primary-400 mb-3" />
              <h3 class="text-lg font-semibold text-white mb-2">Partnership</h3>
              <p class="text-gray-400 text-sm mb-4">Explore collaboration opportunities</p>
              <UButton variant="ghost" size="sm" class="text-primary-400">Contact Us</UButton>
            </div>
          </UCard>
          
          <UCard class="p-6 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div class="text-center">
              <UIcon name="i-heroicons-briefcase" class="text-3xl text-green-400 mb-3" />
              <h3 class="text-lg font-semibold text-white mb-2">Careers</h3>
              <p class="text-gray-400 text-sm mb-4">Build the future with us</p>
              <UButton variant="ghost" size="sm" class="text-green-400">View Openings</UButton>
            </div>
          </UCard>
          
          <UCard class="p-6 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div class="text-center">
              <UIcon name="i-heroicons-banknotes" class="text-3xl text-yellow-400 mb-3" />
              <h3 class="text-lg font-semibold text-white mb-2">Investment</h3>
              <p class="text-gray-400 text-sm mb-4">Join our growth journey</p>
              <UButton variant="ghost" size="sm" class="text-yellow-400">Learn More</UButton>
            </div>
          </UCard>
          
          <UCard class="p-6 bg-gray-800 hover:bg-gray-700 transition-colors">
            <div class="text-center">
              <UIcon name="i-heroicons-newspaper" class="text-3xl text-purple-400 mb-3" />
              <h3 class="text-lg font-semibold text-white mb-2">Newsletter</h3>
              <p class="text-gray-400 text-sm mb-4">Stay updated on our journey</p>
              <UButton variant="ghost" size="sm" class="text-purple-400">Subscribe</UButton>
            </div>
          </UCard>
        </div>
        
        <div class="border-t border-gray-800 pt-8">
          <p class="text-gray-400 text-center">
            © 2024 Noktah. Pushing beyond conventional limits, one innovation at a time.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Simple animation states: single -> dividing -> divided (linger) -> merging -> single
const animationState = ref('single')

function startAnimationCycle() {
  // Start the cycle
  setTimeout(() => {
    animationState.value = 'dividing'
    
    // After 1s of dividing animation, go to divided (linger) state
    setTimeout(() => {
      animationState.value = 'divided'
      
      // After 2s of lingering, start merging
      setTimeout(() => {
        animationState.value = 'merging'
        
        // After 1s of merging animation, back to single and restart cycle
        setTimeout(() => {
          animationState.value = 'single'
          startAnimationCycle() // Restart the cycle
        }, 1000)
      }, 2000)
    }, 1000)
  }, 2000) // Initial delay of 2s in single state
}

// Start animation on mount
onMounted(() => {
  startAnimationCycle()
  
  onBeforeUnmount(() => {
    // Clear any pending timeouts (cleanup handled by Vue's reactivity)
  })
})
</script>
