<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <div class="wrapper">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
