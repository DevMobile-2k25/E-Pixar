<script setup>
import { ref } from 'vue';
import CardCarousel from './CardCarousel.vue';
import carsBg from "@/data/images/cars-background.jpg";
import carsLogo from "@/data/images/cars-logo.png";
import divertidamenteBg from "@/data/images/divertidamente-background.jpg";
import divertidamenteLogo from "@/data/images/divertidamente-logo.png";
import monsterBg from "@/data/images/monster-background.jpg";
import monsterLogo from "@/data/images/monster-logo.png";
import redBg from "@/data/images/red-background.jpg";
import redLogo from "@/data/images/red-logo.png";
import ratatouilleBg from "@/data/images/ratatouille-background.jpg";
import ratatouilleLogo from "@/data/images/ratatouille-logo.png";
import toyBg from "@/data/images/toy-background.jpg";
import toyLogo from "@/data/images/toy-logo.png";
import wallBg from "@/data/images/wall-background.jpg";
import wallLogo from "@/data/images/wall-logo.png";
import upBg from "@/data/images/up-background.jpg";
import upLogo from "@/data/images/up-logo.png";

const dataCarrousel = ref([
    {
        bg: carsBg,
        logo: carsLogo,
        route: "/cars"
    },
    {
        bg: divertidamenteBg,
        logo: divertidamenteLogo,
        route: "/divertidamente",
    },
    {
        bg: monsterBg,
        logo: monsterLogo,
        route: "/monsters",
    },
    {
        bg: redBg,
        logo: redLogo,
        route: "/red",
    },
    {
        bg: ratatouilleBg,
        logo: ratatouilleLogo,
        route: "/ratatouille",
    },
    {
        bg: toyBg,
        logo: toyLogo,
        route: "/toy",
    },
    {
        bg: wallBg,
        logo: wallLogo,
        route: "/wall-e",
    },
    {
        bg: upBg,
        logo: upLogo,
        route: "/up",
    },
])
</script>

<template>
    <section class="carousel-container">
      <div class="carousel-wrapper">
        <CardCarousel
          v-for="(item, index) in dataCarrousel"
          :key="index"
          :bg="item.bg"
          :logo="item.logo"
          :route="item.route"
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