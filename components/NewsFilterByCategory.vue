<script setup lang="ts">

const categories = [
  { name: 'Business & Finance', is_checked: true, count: 134},
  { name: 'Computers & IT', is_checked: false, count: 63},
  { name: 'Economics', is_checked: false, count: 54},
  { name: 'General News', is_checked: false, count: 74},
  { name: 'Health, Medicine', is_checked: false, count: 17},
]

const totalSum = categories.reduce((acc, category) => acc + category.count, 0);

</script>

<template>
  <div class="h-full p-1 lg:w-1/4 w-full">
    <div class=" bg-[#35356b] px-4 pt-4 pb-4 relative rounded-2xl">
      <h1 class="title-font sm:text-2xl  mb-3 text-white">Filter</h1>
      <div class="flex items-center justify-between mb-1">
        <div>
          <input type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All News</label>

        </div>
        <div class="text-white">{{ totalSum }}</div>

      </div>
      <div v-for="category in categories" class="flex items-center justify-between mb-1">
        <div>
          <input v-model="category.is_checked" v-bind:id="category.name"  type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ category.name }}</label>
        </div>
        <div class="float-right text-white">{{ category.count }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
