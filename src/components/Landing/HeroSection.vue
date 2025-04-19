<template>
  <main class="lg:h-[80vh] h-[40vh] bg-hero bg-cover bg-center relative">
    <router-link to="/login">
      <button
        class="find flex justify-center bg-white/30 backdrop-blur-md hover:bg-black hover:text-white items-center gap-2 px-6 py-2 rounded-lg border border-black text-black absolute bottom-4 right-10"
      >
        Find a Portal
        <i class="pi pi-arrow-up-right"></i>
      </button>
    </router-link>
  </main>
</template>

<script setup>
  import "primeicons/primeicons.css";
  import { useRoute } from "vue-router";

  const route = useRoute();
</script>
