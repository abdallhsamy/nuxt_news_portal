<script setup lang="ts">
const { article } = defineProps(['article'])

</script>

<template>
  <div class="bg-[#35356b] rounded-2xl w-1/3 p-3">
    <img :alt="article.title"
         :src="article.urlToImage ?? `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAAM1BMVEXr6+urq6vu7u6oqKjDw8PAwMDY2NjV1dXm5uaysrLKysqvr6/f39/Nzc3c3NzS0tK5ubkd/VNiAAACvklEQVR4nO3c2XarIABAUQJqcPb/v7ZGzBzArGoEPPvpPrCaniQCdbhCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSJvVW5N5pS+is3Eqm947zkt1JnbaiTs3efV7lZvWXN6DcO8+n2zJ/1O0d6CbP2337L1Sxd+FnUsxTdG/66/UF3C+7QV1Nv2Um15erUPtl8TLnj/3rv0i4/fp1zj9Y/9ucf7D+4nXOP2R/PVyUT/1N57H8RULvV/ml2az/1/7Bu54Pi3f0Efa/HRfv1HnpkRJfv+wX9Lf0LxNvv/rsud++75tfJNr+MvtseOzXxdmin9eIWPtVZflcW3Xv17XlS3IxTC8Sbb9lL/TYb/5tnSOm5qT7K2f/tEYm3e/5/FPvF9px+Kt62iMm3S9039r08/ik+x3r/3VA2v1e9NOfcP+xj3/ZZblN1pghKfc3x17/D7//PXq/80yRms4ApNzvPlOcm/FJ9zuuFJjpP/V+L/rppz/C/mpJv7S/DTLu+c96L5BZ2+f+zH7bT91Gvf93m/c/7iul002PSfcnvP89bv/4V62/v7v/BNuQWL//4xdg8N3R3c4/orIPGfpI5z9xvyvURtyubttHiljXv3XRTz/9cfVL3Xjc5j/7EB3v/De4Tms/3NsiROkYE+v5r+X3P3rOf0Z9/4unP+H979H73Xe1zMwDfc7rX6dIr3+NWZXl3seb+XlG2dmHVGZMjP2uq9pPN7cmef17XfQH22+efyqn/sx1zvc/Au5vzLncajyIu2khU4X3wP9euP3z1Vs1VPm8ZGfV6lrzZFWI/beHntV1G7Ng4f/aKdh+IXL/Tm8dKszn33X5ozegDvR/wNDDT96A5ZdLf67w/7H//ymg9f8ee5FSd7ZnmFZSiGA/fWODVf/R3nkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKzvD7/USoX++wplAAAAAElFTkSuQmCC`"
         class="rounded-xl h-18">
    <h2 class="text-white truncate my-2 text-xs">
      {{ article.title }}
    </h2>
    <p class="text-xs text-[#595899] truncate">
      {{ article.description }}
    </p>
    <div>
      <!--      <span class="text-xs text-white bg-blue-400 rounded-xl p-1">{{ article.categories[0] }}</span>-->

      <span v-if="article.author" class="text-xs text-white bg-blue-400 rounded-xl p-1">{{ article.author }}</span>
      <div class="text-white text-xs">
        {{ new Date(article.publishedAt).toDateString() }}
      </div>

      <!--      <span class="text-xs text-white bg-blue-400 rounded-xl p-1">{{ article.author }}</span>-->
      <!--      <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
      <!--        <g fill="none">-->
      <!--          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" fill="#F7F7F7"></path>-->
      <!--        </g>-->
      <!--      </svg>-->
      <!--      <span class="text-xs text-white">-->
      <!--        {{ article.favorites ?? 0 }}-->
      <!--      </span>-->
      <!--      <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
      <!--        <g fill="none">-->
      <!--          <path opacity=".3" d="M18 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#F7F7F7"></path>-->
      <!--          <path opacity=".3" d="M6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#F7F7F7"></path>-->
      <!--          <path opacity=".3" d="M18 20.02a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#F7F7F7"></path>-->
      <!--          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#F7F7F7"></path>-->
      <!--        </g>-->
      <!--      </svg>-->
      <!--      <span class="text-xs text-white">-->
      <!--        {{ article.shares ?? 0 }}-->
      <!--      </span>-->
      <!--      <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
      <!--        <g fill="none"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="#F7F7F7"></path>-->
      <!--      </g>-->
      <!--      </svg>-->
      <!--      <span class="text-xs text-white">-->
      <!--        {{ article.comments ?? 0 }}-->
      <!--      </span>-->
    </div>
  </div>

</template>

<style scoped>

</style>
