<script setup>
import CardsHeartOutline from 'vue-material-design-icons/CardsHeartOutline.vue'

defineProps({
    product: {
        type: Object,
        required: true
    }
})

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}
</script>

<template>
    <router-link :to="`/product/${product.id}`" class="cardProduct">
        <div class="photo">
            <img :src="product.cover" alt="">
        </div>
        <div class="text">
            <div class="title">
                <h2>R${{ (product.price) }},00</h2>
                <p>
                    <CardsHeartOutline class="icon" :size="30" color="#000" />
                </p>
            </div>
            <div class="desc">
                <p>{{ truncateText(product.name, 45) }}</p>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.cardProduct {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
    text-decoration: none;
    color: inherit;
}

.photo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

span{
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem .5rem;
    align-items: center;
}

.text h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
}

.desc {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem .5rem;
}

.text {
    display: flex;
    flex-direction: column;
    height: 100px;
}
</style>