<script setup lang="ts">

import NewsFilterByCategory from "~/components/NewsFilterByCategory.vue";
import NewsList from "~/components/NewsList.vue";
import TrendingNews from "~/components/TrendingNews.vue";
</script>

<template>
  <div class="px-4 py-4 mx-auto flex flex-wrap">
    <NewsList class="lg:order-1"/>
    <NewsFilterByCategory/>
    <TrendingNews class="order-last"/>
  </div>
</template>

<style scoped>

</style>
