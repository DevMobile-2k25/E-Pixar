<script setup>
import mike from '@/assets/images/Dashboard/mike_fita.png'
import sully from '@/assets/images/Dashboard/sully_fita.png'
</script>

<template>
    <section>
        <div class="light-blue"></div>
        <div class="dark-blue"></div>
        <img class="sully" :src="sully" alt="">
        <img class="mike" :src="mike" alt="">
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 30vh;
    display: grid;
    grid-template-columns: 30% 70%;
    margin: 20px auto;
    position: relative;
}

.light-blue {
    background-color: #7B93C8;
    width: 100%;
    height: 100%;
}

.dark-blue {
    background-color: #8095BF;
    width: 100%;
    height: 100%;
}

.sully {
    position: absolute;
    bottom: 0; 
    left: 0%; 
    width: 40%; 
}

.mike {
    position: absolute;
    top: 25%; 
    left: 30%; 
    width: 70%; 
}
</style>