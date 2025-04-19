<template>
  <section class="sm:flex">
    <Sidebar />
    <MobileNav />
    <MasterContent />
  </section>
</template>

<script setup>
  import Sidebar from "../components/SideBar.vue";
  import MobileNav from "../components/MobileNav.vue";
  import MasterContent from "../components/MasterContent.vue";
</script>
