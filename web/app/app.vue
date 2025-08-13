<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <h1 class="text-2xl font-bold text-gray-800">TestSite</h1>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Testing</span>
                <span class="block text-indigo-600 xl:inline">Tailwind CSS</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                This is a basic landing page to test if Tailwind CSS classes are working properly. 
                We're testing responsive design, colors, typography, and layout utilities.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <Button variant="default" size="lg" class="w-full md:text-lg">
                    Get Started
                  </Button>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="secondary" size="lg" class="w-full md:text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Testing Tailwind Classes
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Various Tailwind utilities being tested including responsive design, flexbox, grid, colors, and animations.
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <span class="text-xl font-bold">1</span>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Responsive Design</p>
              <p class="mt-2 ml-16 text-base text-gray-500">
                Testing responsive utilities like sm:, md:, lg:, and xl: breakpoints.
              </p>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <span class="text-xl font-bold">2</span>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Color System</p>
              <p class="mt-2 ml-16 text-base text-gray-500">
                Testing various color utilities including gradients and hover states.
              </p>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <span class="text-xl font-bold">3</span>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Layout Utilities</p>
              <p class="mt-2 ml-16 text-base text-gray-500">
                Testing flexbox, grid, spacing, and positioning utilities.
              </p>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <span class="text-xl font-bold">4</span>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Typography</p>
              <p class="mt-2 ml-16 text-base text-gray-500">
                Testing font sizes, weights, and text utilities across different screen sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card Section -->
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">Test Cards</h2>
          <p class="mt-4 text-lg text-gray-600">Testing card layouts and hover effects</p>
        </div>
        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold">A</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Card One</h3>
                  <p class="text-sm text-gray-500">Testing basic card layout</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold">B</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Card Two</h3>
                  <p class="text-sm text-gray-500">Testing hover effects</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold">C</span>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Card Three</h3>
                  <p class="text-sm text-gray-500">Testing grid layout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-400">
            &copy; 2024 Tailwind Test Site. Testing all the classes work properly.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
