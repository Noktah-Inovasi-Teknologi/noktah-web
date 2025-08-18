<template>
  <!-- Footer -->
  <footer class="relative bg-slate-100 dark:bg-[#0D1117]">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-20 w-1 h-1 bg-primary-400 rounded-full animate-pulse"></div>
        <div class="absolute bottom-32 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div class="absolute top-1/2 left-1/4 w-1 h-1 bg-violet-400 rounded-full animate-pulse animation-delay-2000"></div>
      </div>
    </div>
    
    <div class="relative">
      <!-- Main Footer Content -->
      <div class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            <!-- Company Information -->
            <div class="lg:col-span-2">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-white/[0.07] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-1 mr-4">
                  <img 
                    src="/images/noktah-logo.png" 
                    alt="Noktah Logo" 
                    class="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 class="text-2xl font-bold italic text-gray-900 dark:text-white" style="font-family: 'Montserrat', sans-serif;">NOKTAH</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Noktah Inovasi Teknologi</p>
                </div>
              </div>
              
              <p class="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
                The main holding brand of CV. Amerta Meta Data, pushing beyond conventional limits through cross-field innovation.
              </p>
              
              <!-- Address -->
              <div class="mb-6">
                <h4 class="text-gray-900 dark:text-white font-semibold mb-3">Our Office</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Bukit Menganti Regency C-10<br>
                  Boteng, Menganti, Gresik<br>
                  Jawa Timur, Indonesia 61174
                </p>
              </div>
              
              <!-- Contact Information -->
              <div class="mb-6">
                <h4 class="text-gray-900 dark:text-white font-semibold mb-3">Contact Us</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-envelope" class="text-gray-500 dark:text-gray-400 mr-2" />
                    <a href="mailto:core@noktah.co" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      core@noktah.co
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-phone" class="text-gray-500 dark:text-gray-400 mr-2" />
                    <a href="tel:+6285173017749" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      +62 851-7301-7749
                    </a>
                  </div>
                  <div class="flex items-center">
                    <UIcon name="i-simple-icons-whatsapp" class="text-green-500 mr-2" />
                    <a href="https://wa.me/6285173017749" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center">
                      +62 851-7301-7749
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-xs ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div>
                <h4 class="text-gray-900 dark:text-white font-semibold mb-3">Connect With Us</h4>
                <div class="flex space-x-4">
                  <a href="https://instagram.com/noktah.it" target="_blank" class="relative group flex items-center justify-center w-10 h-10 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full hover:bg-white/[0.10] transition-all duration-300 hover:scale-110">
                    <UIcon name="i-simple-icons-instagram" class="text-lg text-pink-400" />
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="absolute -top-1 -right-1 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a href="https://id.linkedin.com/company/noktah-inovasi-teknologi" target="_blank" class="relative group flex items-center justify-center w-10 h-10 bg-white/[0.07] backdrop-blur-sm border border-white/[0.29] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full hover:bg-white/[0.10] transition-all duration-300 hover:scale-110">
                    <UIcon name="i-simple-icons-linkedin" class="text-lg text-blue-400" />
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="absolute -top-1 -right-1 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div>
              <h4 class="text-gray-900 dark:text-white font-semibold mb-6">Quick Links</h4>
              <ul class="space-y-3">
                <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">About Us</NuxtLink></li>
                <li><NuxtLink to="/brands" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Our Brands</NuxtLink></li>
                <li><NuxtLink to="/contact" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact Us</NuxtLink></li>
              </ul>
            </div>
            
            <!-- Our Brands -->
            <div>
              <h4 class="text-gray-900 dark:text-white font-semibold mb-6">Our Brands</h4>
              <ul class="space-y-3">
                <li>
                  <a href="https://eskala.id" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 block group">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-900 dark:text-white font-medium">Eskala</span>
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p class="text-xs mt-1">Professional creative partner</p>
                  </a>
                </li>
                <li>
                  <a href="https://memomancy.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 block group">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-900 dark:text-white font-medium">Memomancy</span>
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p class="text-xs mt-1">Photography Services</p>
                  </a>
                </li>
                <li>
                  <a href="https://fieldpass.co" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 block group">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-900 dark:text-white font-medium">Fieldpass</span>
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p class="text-xs mt-1">Sports Technology</p>
                  </a>
                </li>
                <li>
                  <a href="https://heavystation.id" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 block group">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-900 dark:text-white font-medium">Heavy Station</span>
                      <UIcon name="i-heroicons-arrow-top-right-on-square" class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p class="text-xs mt-1">PC Hardware</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-300 dark:border-gray-800">
        <div class="py-8 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <!-- Copyright -->
              <div class="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Noktah Inovasi Teknologi. All rights reserved.
              </div>
              
              <!-- Legal Links -->
              <div class="flex space-x-6">
                <NuxtLink to="/privacy-policy" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms-of-service" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300">Terms of Service</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>