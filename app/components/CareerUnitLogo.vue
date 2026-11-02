<template>
  <!-- The logos have dark lettering, so they sit on a white plate in light and dark mode alike. -->
  <span class="inline-flex items-center rounded-xl bg-white px-4 py-2 ring-1 ring-black/5">
    <img v-if="src" :src="src" :alt="name" class="h-7 w-auto sm:h-8" height="32">
    <span v-else class="font-semibold text-gray-900">{{ name }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ unit: string; name: string }>()
const src = computed(() => unitLogo(props.unit))
</script>
