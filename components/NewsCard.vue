<script setup lang="ts">
const { article } = defineProps(['article'])

</script>

<template>
  <div class="bg-[#35356b] rounded-2xl w-1/3 p-3">
    <img class="rounded-xl h-18" src="https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png" alt="image">
    <h2 class="text-white truncate my-2 text-xs">
      {{ article.title }}
    </h2>
    <p class="text-xs text-[#595899]">
      {{ article.shortDescription }}
    </p>
    <div>
      <span class="text-xs text-white bg-blue-400 rounded-xl p-1">{{ article.categories[0] }}</span>
      <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" fill="#F7F7F7"></path>
        </g>
      </svg>
      <span class="text-xs text-white">
        {{ article.favorites }}
      </span>
      <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none">
          <path opacity=".3" d="M18 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#F7F7F7"></path>
          <path opacity=".3" d="M6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#F7F7F7"></path>
          <path opacity=".3" d="M18 20.02a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#F7F7F7"></path>
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#F7F7F7"></path>
        </g>
      </svg>
      <span class="text-xs text-white">
        {{ article.shares }}
      </span>
      <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="#F7F7F7"></path>
      </g>
      </svg>
      <span class="text-xs text-white">
        {{ article.comments }}
      </span>
    </div>
  </div>

</template>

<style scoped>

</style>
