<script setup>
import { useRouter } from 'vue-router';
import { PersonsComp } from '@/components';

const router = useRouter();

function navigateToRoute() {
    router.push('/dashboard');
}
</script>

<template>
    <div @click="navigateToRoute" style="width: 100%; height: 100%;">
        <PersonsComp />
        <div class="gradient-div">
            <img src="../assets/images/OneBoard/logo_oneboard.png" alt="">
        </div>
    </div>
</template>

<style>
.gradient-div {
    width: 100%;
    height: 90vh;
    background: linear-gradient(to bottom,
            #71B4F0 13%,
            #71B4F0 31%,
            #97C8F4 60%,
            #C9E2F9 83%,
            #FFFFFF 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.gradient-div img {
    width: 100%;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    object-fit: contain;
    z-index: 10;
}
</style>
