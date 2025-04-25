<script setup>
import router from '@/router';
import { useProductsStore } from '@/stores/products';
import { onMounted, ref, computed } from 'vue';
import Cart from 'vue-material-design-icons/Cart.vue';

const store = useProductsStore();
const currentImage = ref(null);
const tempImage = ref(null);

onMounted(async () => {
    await store.getProduct(router.currentRoute.value.params.id);
    currentImage.value = store.state.selectedProduct?.cover;
});

const displayedImage = computed(() => {
    return tempImage.value || currentImage.value || store.state.selectedProduct?.cover;
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
</script>

<template>
    <section>
        <div class="photo">
            <img :src="displayedImage" alt="Imagem do produto" />
        </div>

        <div class="infos">
            <div class="heart">
                <div class="name">
                    {{ store.state.selectedProduct?.name }}
                </div>
                <div class="favorite">
                    <span @click="store.toggleFavorite(store.state.selectedProduct?.id)">
                        ❤️
                    </span>
                </div>
            </div>
            <div class="prize">
                <div class="rating">⭐️⭐️⭐️⭐️⭐️ 5</div>
                <div class="value">R$ {{ store.state.selectedProduct?.price }},00</div>
            </div>
        </div>

        <div class="variants">
            <p>Colors:</p>
            <div style="display: flex; gap: 10px;">
                <div v-for="variant in store.state.selectedProduct?.variants" :key="variant.color" class="variant-dot"
                    :style="{ backgroundColor: variant.color }" @mouseenter="hoverImage(variant.image)"
                    @mouseleave="clearHover" @click="selectImage(variant.image)"></div>
            </div>
        </div>
        <button class="addToCart" @click="store.addToCart(store.state.selectedProduct)">
            <Cart class="icon" :size="20" />
            <span>Add</span>
        </button>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.addToCart {
    width: 30%;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    position: fixed;
    top: 87%;
    right: 3%;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    ;
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
    color: red;
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
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.prize {
    display: flex;
    gap: 20px;
    margin-top: 5px;
    justify-content: space-between;
}

.variants {
    display: flex;
    gap: 10px;
    padding: 20px;
    width: 100%;
    flex-direction: column;
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
</style>
