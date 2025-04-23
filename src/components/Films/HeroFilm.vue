<script setup>
import router from '@/router';
import { useProductsStore } from '@/stores/products';
import { onMounted } from 'vue';

const productsStore = useProductsStore();

onMounted(() => {
        productsStore.getFilm(router.currentRoute.value.params.id);
    
})
</script>

<template>
    <section :style="{ backgroundImage: `url(${productsStore.state.selectedFilm?.banner})` }">
        <img :src="productsStore.state.selectedFilm?.logo" alt="">
    </section>
    <div class="desc">
        <h3>Description:</h3>
        <p>{{ productsStore.state.selectedFilm?.description }}</p>
        <h3>Data Relesead:</h3>
        <p>{{ productsStore.state.selectedFilm?.year }}</p>
    </div>
</template>

<style scoped>
section {
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    text-align: center;
    clip-path: ellipse(150% 90% at 50% 0%);
}

section img {
    width: 100%;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    object-fit: contain;
    z-index: 10;
}

.desc{
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: -7vh;
}
</style>