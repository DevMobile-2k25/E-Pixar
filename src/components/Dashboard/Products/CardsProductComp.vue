<script setup>
import {  computed } from 'vue';
import CardsHeartOutline from 'vue-material-design-icons/CardsHeartOutline.vue';
import CardsHeart from 'vue-material-design-icons/CardsHeart.vue';
import { useProductsStore } from '@/stores/products';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const productsStore = useProductsStore();

const isFavorited = computed(() => {
  return productsStore.favorites.some(item => item.id === props.product.id);
});

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function toggleFavorite(event) {
  event.preventDefault();
  
  if (isFavorited.value) {
    productsStore.removeFavorite(props.product);
  } else {
    productsStore.addFavorite(props.product);
  }
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
        <p @click="toggleFavorite">
          <CardsHeart v-if="isFavorited" class="icon" :size="30" color="#ff3b30" />
          <CardsHeartOutline v-else class="icon" :size="30" color="#000" />
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

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem .5rem;
  align-items: center;
}

.title p {
  cursor: pointer;
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