<template>
  <nav
    class="bg-white/30 backdrop-blur-md test:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 test:border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../../assets/logo.png"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-sm lg:text-2xl font-semibold whitespace-nowrap test:text-white"
          >Embilipitiya - Hospital</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <router-link to="/login">
          <button
            type="button"
            class="text-black bg-gradient-to-r from-[#FED963] to-[#FEF2B7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center test:bg-blue-600 test:hover:bg-blue-700 test:focus:ring-blue-800"
          >
            Portal
          </button>
        </router-link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 test:text-gray-400 test:hover:bg-gray-700 test:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-[#FED963] rounded-sm md:bg-transparent md:text-[#FED963] md:p-0 md:test:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:test:hover:text-blue-500 test:text-white test:hover:bg-gray-700 test:hover:text-white md:test:hover:bg-transparent test:border-gray-700"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:test:hover:text-blue-500 test:text-white test:hover:bg-gray-700 test:hover:text-white md:test:hover:bg-transparent test:border-gray-700"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:test:hover:text-blue-500 test:text-white test:hover:bg-gray-700 test:hover:text-white md:test:hover:bg-transparent test:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
  import { onMounted } from "vue";
  import { initFlowbite } from "flowbite";
  import { useRoute } from "vue-router";

  const route = useRoute();
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
</script>
