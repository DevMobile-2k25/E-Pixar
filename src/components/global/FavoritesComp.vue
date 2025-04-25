<script setup>
import { useProductsStore } from '@/stores/products';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

// Get the store
const productsStore = useProductsStore();
const router = useRouter();

// Access favorites items from the store
const favoriteItems = computed(() => productsStore.favorites);

// Remove item from favorites
const removeFromFavorites = (product) => {
  productsStore.removeFavorite(product);
};

// Add item to cart
const addToCart = (product) => {
  productsStore.addToCart(product);
};

// Navigate to product detail
const goToProduct = (productId) => {
  router.push(`/product/${productId}`);
};
</script>

<template>
  <section class="favorites">
    <div class="favorites-count" v-if="favoriteItems.length > 0">
      You have {{ favoriteItems.length }} products in your Favorites
    </div>
    
    <div class="list" v-if="favoriteItems.length > 0">
      <div class="card-item" v-for="item in favoriteItems" :key="item.id">
        <div class="photo" @click="goToProduct(item.id)">
          <img :src="item.cover || item.variants[0].image" :alt="item.name">
        </div>
        <div class="info">
          <div class="title">
            <h2 @click="goToProduct(item.id)">{{ item.name }}</h2>
            <button class="remove-button" @click="removeFromFavorites(item)">×</button>
          </div>
          <div class="desc-type">
            <div class="color-size">
              <span class="label">Type:</span>
              <span>{{ item.type }}</span>
              <span class="label ml-4" v-if="item.variants && item.variants.length">Colors:</span>
              <div class="color-options" v-if="item.variants && item.variants.length">
                <span 
                  v-for="(variant, index) in item.variants" 
                  :key="index" 
                  class="color-dot"
                  :style="{ backgroundColor: variant.color }"
                  :title="variant.color"
                ></span>
              </div>
            </div>
          </div>
          <div class="value-quant">
            <div class="value">R${{ item.price }},00</div>
            <div class="actions">
              <button class="add-to-cart-button" @click="addToCart(item)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="empty-favorites" v-else>
      <p>Você não possui produtos favoritados :(</p>
      <button class="browse-button" @click="router.push('/dashboard')">Procurar Produtos</button>
    </div>
  </section>
</template>

<style scoped>
.favorites {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.favorites-count {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-item {
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eaeaea;
}

.photo {
  width: 80px;
  height: 100px;
  background: #f5f5f5;
  margin-right: 1rem;
  overflow: hidden;
  cursor: pointer;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.title h2 {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  max-width: 80%;
  cursor: pointer;
}

.title h2:hover {
  color: #ff3b30;
}

.remove-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #999;
}

.desc-type {
  font-size: 0.8rem;
  color: #666;
  margin: 0.5rem 0;
}

.color-size {
  display: flex;
  align-items: center;
}

.label {
  margin-right: 0.25rem;
  color: #999;
}

.ml-4 {
  margin-left: 1rem;
}

.color-options {
  display: flex;
  gap: 4px;
}

.color-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #ddd;
}

.value-quant {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.value {
  font-weight: 600;
  color: #ff3b30;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.add-to-cart-button {
  padding: 0.25rem 0.5rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background: #333;
}

.empty-favorites {
  text-align: center;
  padding: 2rem;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.browse-button {
  padding: 0.75rem 1.5rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.browse-button:hover {
  background: #333;
}
</style>