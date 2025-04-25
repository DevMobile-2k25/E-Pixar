<template>
    <div class="catalog-container">

        <div class="filters-container">
            <button class="filter-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
            </button>
            <button class="popular-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20V10"></path>
                    <path d="M18 20V4"></path>
                    <path d="M6 20v-6"></path>
                </svg>
                Popular
            </button>
        </div>

        <div class="products-grid">
            <div v-for="product in displayProducts" :key="product.id" class="product-card">
                <div class="product-image" @click="navigateToProduct(product.id)">
                    <img :src="product.cover" :alt="product.name" />
                </div>
                <div class="product-info">
                    <div class="price-favorite">
                        <span class="price">R${{ product.price }},00</span>
                        <button 
                            class="favorite-button" 
                            @click="toggleFavorite(product)"
                            :class="{ 'favorited': isFavorite(product) }"
                        >
                            <CardsHeart v-if="isFavorite(product)" class="icon" :size="20" color="#ff3b30" />
                            <CardsHeartOutline v-else class="icon" :size="20" color="#000" />
                        </button>
                    </div>
                    <h3 class="product-name">{{ truncateName(product.name) }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed,  } from 'vue';
import { useRouter } from 'vue-router';
import CardsHeartOutline from 'vue-material-design-icons/CardsHeartOutline.vue';
import CardsHeart from 'vue-material-design-icons/CardsHeart.vue';
import { useProductsStore } from '@/stores/products';
import { products } from '@/data/products';

const router = useRouter();
const productsStore = useProductsStore();

const displayProducts = computed(() => {
    return products;
});

const truncateName = (name) => {
    if (name.length > 30) {
        return name.substring(0, 30) + '...';
    }
    return name;
};

const toggleFavorite = (product) => {
    if (isFavorite(product)) {
        productsStore.removeFavorite(product);
    } else {
        productsStore.addFavorite(product);
    }
};

const isFavorite = (product) => {
    return productsStore.favorites.some(item => item.id === product.id);
};

const navigateToProduct = (productId) => {
    router.push(`/product/${productId}`);
};
</script>

<style scoped>
/* Estilos mantidos do componente original */
.catalog-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.catalog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.back-button {
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
}

.catalog-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}

.search-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
}

.filters-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.filter-button, .popular-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #e0e0e0;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.product-card {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.product-image {
    height: 200px;
    overflow: hidden;
    cursor: pointer;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-image img:hover {
    transform: scale(1.05);
}

.product-info {
    padding: 12px;
    background-color: #ffffff;
}

.price-favorite {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.price {
    font-weight: bold;
    font-size: 16px;
}

.favorite-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    padding: 0;
    gap: 4px;
}

.favorite-button.favorited {
    color: #ff3e3e;
}

.product-name {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    color: #333;
}
</style>
