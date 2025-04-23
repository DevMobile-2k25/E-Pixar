<script setup>
import CardCarousel from './CardCarousel.vue';
import { filmsData } from '@/data/data';
</script>

<template>
    <section class="carousel-container">
      <div class="carousel-wrapper">
        <CardCarousel
          v-for="(item, index) in filmsData"
          :key="index"
          :bg="item.banner"
          :logo="item.logo"
          :route="item.id"
        />
      </div>
    </section>
  </template>
  

<style scoped>
.carousel-container {
  overflow-x: auto;
  width: 100%;
  padding: 1rem 0;
}

.carousel-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  padding: 0 1rem;
}

.carousel-wrapper::-webkit-scrollbar {
  display: none;
}

.carousel-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none; 
}
</style>