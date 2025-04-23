<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    bg: {
        type: String,
        default: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhcmR8ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080',
    },
    logo: {
        type: String,
        default: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhcmR8ZW58MHx8fHwxNjg5NTY1NzA3&ixlib=rb-4.0.3&q=80&w=1080',
    },
    route: {
        type: String,
        default: '/dashboard',
    },
});
</script>

<template>
    <router-link :style="{ backgroundImage: `url(${bg})` }" class="card-carousel" :to="`/film/${route}`">
        <img :src="logo" alt="Logo" />
    </router-link>
</template>

<style scoped>
.card-carousel {
    width: 150px;
    border: 2px solid gray;
    height: 200px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
}

.card-carousel img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
}
</style>