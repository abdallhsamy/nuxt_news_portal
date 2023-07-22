<script lang="ts" setup>

// import {loading} from "@nuxt/ui-templates";
import {useNewsApiData} from "#imports";
import Navbar from "~/components/Navbar.vue";
import MainSection from "~/components/MainSection.vue";
import TrendingNews from "~/components/TrendingNews.vue";

// const {data} = await useFetch('/api/get-data')
useHead({
  meta: [
    // {name: 'description', content: data.value.pageMeta.description}
  ]
})

// const articles = [
//   {
//     title: 'title',
//     description: 'description',
//   }
// ]

// const { data } = await useFetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5778983e954d628ad8a8c8c70fcf6f');
//
// const articles = data.articles
// console.log(data)
// const { data, pending, refresh, error } = await useNewsApiData('top-headlines?country=eg&apiKey=9f5778983e954d628ad8a8c8c70fcf6f')

// const articles = data.value.articles
// async asyncData({ $axios }) {
//   try {
//     const response = await $axios.$get(
//         'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY'
//     );
//     return {
//       articles: response.articles,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       articles: [],
//     };
//   }
// },
// };

const loading = false;
</script>

<template>
  <div>
    <Navbar/>
    <MainSection/>
  </div>
</template>
