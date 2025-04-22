<script setup>
import CardsProductComp from './CardsProductComp.vue';
import { products } from '@/data/products';
</script>

<template>
    <div class="gridProducts">
        <CardsProductComp v-for="(product, index) in products" :key="index" :product="product" />
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