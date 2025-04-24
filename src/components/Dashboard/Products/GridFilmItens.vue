<script setup>
import CardsProductComp from './CardsProductComp.vue';

defineProps({
    items: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div v-if="items.length === 0" style="text-align: center; margin-top: 20px;">
        <h2>Não há produtos disponíveis.</h2>
    </div>
    <div v-if="items.length > 0">

        <h2>Produtos:</h2>
        <div class="gridProducts">
            <CardsProductComp v-for="(product, index) in items" :key="index" :product="product" />
        </div>
    </div>
</template>

<style scoped>
.gridProducts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 20px;
}

h2 {
    margin: 0 20px;
    font-size: 24px;
    font-weight: bold;
}
</style>