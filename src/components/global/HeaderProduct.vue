<script setup>
import Magnify from "vue-material-design-icons/Magnify.vue";
import ChevronRight from "vue-material-design-icons/ChevronLeft.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
    router.back();
}
</script>

<template>
        <header>
                <div class="container">
                        <button @click="goBack">
                                <ChevronRight class="icon" :size="40" />
                        </button>
                        <img src="../../assets/images/OneBoard/logo_oneboard.png" alt="">
                        <button>
                                <Magnify class="icon" :size="40" />
                        </button>
                </div>
        </header>
</template>

<style scoped>
header {
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: end;
        justify-content: end;
}

.container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
}

img {
        width: 30%;
}

span {
        display: flex;
        justify-content: center;
        align-items: center;
}

button {
        border: 0;
        background: transparent;
        margin-right: .5rem;
}
</style>