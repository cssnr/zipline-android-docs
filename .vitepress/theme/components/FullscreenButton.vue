<script setup>
const requestFullscreen = () => document.querySelector('.swiper')?.requestFullscreen()
</script>

<style>
:root {
  --swiper-pagination-fraction-color: var(--vp-c-purple-1);
  --swiper-navigation-color: var(--vp-c-purple-1);
  --swiper-navigation-sides-offset: 4px;
}
.inline-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

<template>
  <button @click="requestFullscreen" class="inline-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-fullscreen-icon lucide-fullscreen"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="10" height="8" x="7" y="8" rx="1" />
    </svg>
    <slot>View in Full Screen</slot>
  </button>
</template>
