<script setup>
import CarroselPersons from './CarroselPersons.vue';
import TextHero from './TextHero.vue';
</script>

<template>
    <section>
        <div class="container">
            <TextHero />
            <CarroselPersons />
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 80%;
    margin: auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>