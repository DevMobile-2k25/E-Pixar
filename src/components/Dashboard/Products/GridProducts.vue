<script setup>
import CardsProductComp from './CardsProductComp.vue';
import { products } from '@/data/products';
const getRandomizedSubset = (array) => {
    return array.sort(() => Math.random() - 0.5).slice(0, 6);
};

const randomizedProducts = getRandomizedSubset(products);
</script>

<template>
    <div class="gridProducts">
        <CardsProductComp v-for="(product, index) in randomizedProducts" :key="index" :product="product" />
    </div>
</template>

<style scoped>
.gridProducts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 20px;
}
</style>