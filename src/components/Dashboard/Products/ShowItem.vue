<script setup>
import router from '@/router';
import { useProductsStore } from '@/stores/products';
import { onMounted, ref, computed } from 'vue';
import Cart from 'vue-material-design-icons/Cart.vue';
import CardsHeartOutline from 'vue-material-design-icons/CardsHeartOutline.vue';
import CardsHeart from 'vue-material-design-icons/CardsHeart.vue';

const store = useProductsStore();
const currentImage = ref(null);
const tempImage = ref(null);
const showAddedToCart = ref(false);
const showAddedToFavorites = ref(false);

onMounted(async () => {
    await store.getProduct(router.currentRoute.value.params.id);
    currentImage.value = store.state.selectedProduct?.cover;
});

const displayedImage = computed(() => {
    return tempImage.value || currentImage.value || store.state.selectedProduct?.cover;
});

// Check if product is in favorites
const isFavorited = computed(() => {
    if (!store.state.selectedProduct) return false;
    return store.favorites.some(item => item.id === store.state.selectedProduct.id);
});

// Check if product is in cart
const isInCart = computed(() => {
    if (!store.state.selectedProduct) return false;
    return store.cart.some(item => item.id === store.state.selectedProduct.id);
});

const hoverImage = (img) => {
    tempImage.value = img;
};

const clearHover = () => {
    tempImage.value = null;
};

const selectImage = (img) => {
    currentImage.value = img;
};

const toggleFavorite = () => {
    if (!store.state.selectedProduct) return;
    
    if (isFavorited.value) {
        store.removeFavorite(store.state.selectedProduct);
    } else {
        store.addFavorite(store.state.selectedProduct);
        showAddedToFavorites.value = true;
        setTimeout(() => {
            showAddedToFavorites.value = false;
        }, 2000);
    }
};

const addToCart = () => {
    if (!store.state.selectedProduct || isInCart.value) return;
    
    store.addToCart(store.state.selectedProduct);
    showAddedToCart.value = true;
    setTimeout(() => {
        showAddedToCart.value = false;
    }, 2000);
};
</script>

<template>
    <section v-if="store.state.selectedProduct">
        <div class="photo">
            <img :src="displayedImage" alt="Imagem do produto" />
        </div>

        <div class="infos">
            <div class="heart">
                <div class="name">
                    {{ store.state.selectedProduct?.name }}
                </div>
                <div class="favorite" @click="toggleFavorite">
                    <CardsHeart v-if="isFavorited" class="icon" :size="30" color="#ff3b30" />
                    <CardsHeartOutline v-else class="icon" :size="30" color="#000" />
                </div>
            </div>
            <div class="prize">
                <div class="rating">⭐️⭐️⭐️⭐️⭐️ 5</div>
                <div class="value">R$ {{ store.state.selectedProduct?.price }},00</div>
            </div>
        </div>

        <div class="description">
            <h3>Product Description</h3>
            <p>{{ store.state.selectedProduct?.description }}</p>
        </div>
        <div class="description">
            <h3>Quantidade Em Estoque:</h3>
            <p>{{ store.state.selectedProduct?.quantity }}</p>
        </div>

        <div class="variants">
            <p>Colors:</p>
            <div style="display: flex; gap: 10px;">
                <div v-for="variant in store.state.selectedProduct?.variants" :key="variant.color" class="variant-dot"
                    :style="{ backgroundColor: variant.color }" @mouseenter="hoverImage(variant.image)"
                    @mouseleave="clearHover" @click="selectImage(variant.image)"></div>
            </div>
        </div>

        <div class="cart-actions">
            <button class="addToCart" :class="{ disabled: isInCart }" @click="addToCart">
                <Cart class="icon" :size="20" />
                <span>{{ isInCart ? 'In Cart' : 'Add to Cart' }}</span>
            </button>
        </div>

        <div class="toast cart-toast" v-if="showAddedToCart">
            Product added to cart!
        </div>

        <div class="toast favorites-toast" v-if="showAddedToFavorites">
            Product added to favorites!
        </div>
    </section>
    <div v-else class="loading">
        Loading product details...
    </div>
</template>

<style scoped>
section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px; /* Space for fixed button */
}

span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.addToCart {
    width: 100%;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 18px;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
}

.addToCart:hover {
    background-color: #333;
}

.addToCart.disabled {
    background-color: #555;
    cursor: default;
}

.cart-actions {
    width: 100%;
    position: fixed;
    bottom: 70px;
    left: 0;
    padding: 0 20px;
    z-index: 10;
    max-width: 400px;
}

.photo {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
}

.value {
    font-size: 24px;
    color: #ff3b30;
    font-weight: bold;
}

.infos {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    padding: 20px;
}

.heart {
    font-size: 24px;
    margin-bottom: 10px;
    transition: transform 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.favorite {
    cursor: pointer;
}

.name {
    font-size: 20px;
    font-weight: 600;
    flex: 1;
    margin-right: 10px;
}

.prize {
    display: flex;
    gap: 20px;
    margin-top: 5px;
    justify-content: space-between;
    align-items: center;
}

.rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
}

.description {
    width: 100%;
    padding: 20px;
}

.description h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 600;
}

.description p {
    line-height: 1.6;
    color: #555;
}

.variants {
    display: flex;
    gap: 10px;
    padding: 20px;
    width: 100%;
    flex-direction: column;
}

.variants p {
    font-weight: 600;
    margin: 0;
}

.variant-dot {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #ccc;
    transition: transform 0.2s, border-color 0.2s;
}

.variant-dot:hover {
    transform: scale(1.2);
    border-color: #000;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    width: 100%;
    font-size: 18px;
    color: #666;
}

.toast {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 100;
    animation: fadeIn 0.3s, fadeOut 0.3s 1.7s;
}

.cart-toast {
    background-color: #2ecc71;
}

.favorites-toast {
    background-color: #ff3b30;
}

@keyframes fadeIn {
    from { opacity: 0; bottom: 60px; }
    to { opacity: 1; bottom: 80px; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
</style>