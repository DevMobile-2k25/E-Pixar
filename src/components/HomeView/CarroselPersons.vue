<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import monsterSa from '@/assets/images/monster-sa.png';
import mcqueen from '@/assets/images/mcqueen.png';
import nemo from '@/assets/images/nemo.png';
import incrivio from '@/assets/images/incrivio.png';
import diver from '@/assets/images/diver.png';

const images = [
    monsterSa,
    mcqueen,
    nemo,
    incrivio,
    diver,
];

const currentImageIndex = ref(0);
const isFading = ref(false);
let intervalId;

const startCarousel = () => {
    intervalId = setInterval(() => {
        isFading.value = true;
        setTimeout(() => {
            currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
            isFading.value = false;
        }, 500); // Tempo da transição
    }, 3000);
};

const stopCarousel = () => {
    clearInterval(intervalId);
};

onMounted(startCarousel);
onUnmounted(stopCarousel);
</script>

<template>
    <div class="star star-1"></div>
    <div class="star star-2"></div>
    <article class="carousel">
        <img :src="images[currentImageIndex]" alt="Carousel Image" :class="{ fade: isFading }" />
    </article>
</template>

<style scoped>
.carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.carousel img {
    max-width: 100%;
    height: auto;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
}

.carousel img.fade {
    opacity: 0;
}

.star {
    position: absolute;
    width: 70px;
    height: 70px;
    background: black;
    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
    opacity: 0.8;
}

.star-1 {
    top: 25%;
    left: 55%;
}

.star-2 {
    bottom: 10%;
    right: 15%;
}
</style>