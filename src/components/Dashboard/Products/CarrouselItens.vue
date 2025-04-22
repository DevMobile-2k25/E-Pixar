<script setup>
import { ref } from 'vue';

const productTypes = ref([
    { name: "Blusas" },
    { name: "Macacão" },
    { name: "Pijamas" },
    { name: "Boné" },
    { name: "Calça" },
    { name: "Calça" },
    { name: "Calça" },
    { name: "Calça" },
]);

const selectedIndex = ref(null);

const selectItem = (index) => {
    selectedIndex.value = index;
};
</script>

<template>
    <section class="carousel-container">
        <div class="carousel-wrapper">
            <div
                v-for="(product, index) in productTypes"
                :key="index"
                class="carousel-item"
                :class="{ selected: selectedIndex === index }"
                @click="selectItem(index)"
            >
                <span class="product-name">{{ product.name }}</span>
            </div>
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

.carousel-item {
    width: 200px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;
    position: relative;
    color: gray;
    font-weight: 350;
    padding: 0.5rem;
}

.carousel-item.selected {
    color: black;
    font-weight: 600;
}

.carousel-wrapper::-webkit-scrollbar {
    display: none;
}

.carousel-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
