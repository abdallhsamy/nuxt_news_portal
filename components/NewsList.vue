<script setup lang="ts">
import NewsCard from "~/components/NewsCard.vue";

const {
  data,
  pending,
  refresh,
  error
} = await useFetch('/api/articles')

</script>

<template>
  <div class="h-full p-1 lg:w-1/2">
    <Carrossel/>
    
    <div class="flex py-4 items-center justify-between">
      <div>
        <span class="text-white text-lg">
        All News
      </span>
        <span class="text-[#595899]">
        ({{ data.totalResults }} new posts)
      </span>
      </div>
      <div class="">
        <form>
          <label for="default-search" class=" text-sm font-medium text-white sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-1 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-[#595899] dark:bg-[#27264e] dark:border-[#595899] dark:placeholder-gray-400 dark:text-white dark:focus:[#595899] dark:focus:border-[#595899]" placeholder="Search " required>
          </div>
        </form>
      </div>
    </div>

    <div class="flex  flex-wrap gap-4">
      <template v-for="article in data.articles">
        <NewsCard :article="article"/>
      </template>
    </div>
  </div>

</template>

<style scoped>

</style>
