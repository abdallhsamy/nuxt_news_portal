<script setup lang="ts">

const trendingNews = [
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
  { title: 'Maariv : Al-Qassam fighters are more efficient and professional than our soldiers', id: 1, short_description: 'A Zionist general admitted that "the fighters of the Al-Qassam Brigades are more efficient than the soldiers of the Zionist army,', featured_image: 'https://www.alqassam.ps/arabic/attachments/gallery/2001/b2825e49ce2059f62dacdbf2a0ac2b74.png'},
]

</script>

<template>
  <div class="h-full p-1 lg:w-1/4 w-full">
    <div class=" bg-[#35356b] px-4 pt-4 pb-4 relative rounded-2xl grid grid-cols-1 divide-y divide-[#595899]">
      <h1 class="title-font sm:text-2xl  mb-3 text-white">Trending News</h1>

      <div v-for="article in trendingNews" class="my-2 ">
        <div class="text-white truncate  text-sm">
          {{ article.title}}
        </div>
        <div class="text-[#595899] truncate  text-xs ">
          {{ article.short_description}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
