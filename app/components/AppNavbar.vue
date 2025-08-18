<template>
  <div class="sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0 flex items-center space-x-3">
          <div class="w-12 h-12 bg-white/[0.07] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-1">
            <img 
              src="/images/noktah-logo.png" 
              alt="Noktah Logo" 
              class="w-full h-full object-contain"
            />
          </div>
          <h1 class="text-xl font-bold italic text-gray-900 dark:text-white" style="font-family: 'Montserrat', sans-serif;">
            NOKTAH
          </h1>
        </div>

        <!-- Navigation Menu -->
        <div class="hidden md:flex bg-white/[0.07] backdrop-blur-sm rounded-full px-2 py-2 border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] space-x-2">
          <NuxtLink
            to="/"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            active-class="!bg-primary-500 !text-white !hover:bg-primary-600"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            active-class="!bg-primary-500 !text-white !hover:bg-primary-600"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="/brands"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            active-class="!bg-primary-500 !text-white !hover:bg-primary-600"
          >
            Brands
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            active-class="!bg-primary-500 !text-white !hover:bg-primary-600"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Color Mode Toggle -->
        <div class="flex items-center space-x-4">
          <ClientOnly>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-sun" class="text-lg text-yellow-500" />
              <USwitch
                :model-value="$colorMode.value === 'dark'"
                @update:model-value="$colorMode.preference = $event ? 'dark' : 'light'"
                color="primary"
                size="sm"
              />
              <UIcon name="i-heroicons-moon" class="text-lg text-gray-600 dark:text-gray-300" />
            </div>
          </ClientOnly>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <UButton
              icon="i-heroicons-bars-3"
              variant="ghost"
              color="gray"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-3 border-t border-gray-200 dark:border-gray-800">
          <NuxtLink
            to="/"
            class="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-base font-medium transition-colors"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-base font-medium transition-colors"
            @click="mobileMenuOpen = false"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="/brands"
            class="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-base font-medium transition-colors"
            @click="mobileMenuOpen = false"
          >
            Brands
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-base font-medium transition-colors"
            @click="mobileMenuOpen = false"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>