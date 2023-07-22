<script setup lang="ts">

</script>

<template>

  <nav class="bg-white border-gray-200 dark:bg-[#35356b] dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
<!--        <img src="/logo.svg" class="h-8 mr-3" alt="Logo" />-->
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#6153e8]">News Portal</span>
        &nbsp;
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Website</span>
      </a>
      <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#605f9f] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#605f9f] dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#35356b] md:dark:bg-[#35356b] dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-[#605f9f] bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-[#605f9f] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-[#605f9f] md:dark:hover:text-blue-500 dark:focus:text-[#605f9f] dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Categories <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#35356b] dark:divide-gray-600">
              <ul class="py-2 text-sm text-[#605f9f] dark:text-[#605f9f]" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Business & Finance</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Computers & IT</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Economics</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-[#605f9f] hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-[#605f9f] dark:hover:text-white">Sign out</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-[#605f9f] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#605f9f] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Business & Finance</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-[#605f9f] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#605f9f] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Computers & IT</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-[#605f9f] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#605f9f] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">General News</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>

</style>
