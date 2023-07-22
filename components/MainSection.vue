<script setup lang="ts">

import NewsFilterByCategory from "~/components/NewsFilterByCategory.vue";
import NewsList from "~/components/NewsList.vue";
import TrendingNews from "~/components/TrendingNews.vue";
</script>

<template>
  <div class="px-4 py-4 mx-auto flex flex-wrap">
    <NewsFilterByCategory/>
    <NewsList/>
    <TrendingNews/>
  </div>
</template>

<style scoped>

</style>
