<script setup>
import Magnify from "vue-material-design-icons/Magnify.vue";
import ChevronRight from "vue-material-design-icons/ChevronLeft.vue";
import { useProductsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const store = useProductsStore();
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
                        <h2>{{ store.state.selectedFilm?.title }}</h2>
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
        width: 50%;
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