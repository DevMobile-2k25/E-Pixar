<script setup>
import { useProductsStore } from '@/stores/products';
import { computed } from 'vue';
import router from '@/router';

// Get the store
const productsStore = useProductsStore();

// Access cart items from the store
const cartItems = computed(() => productsStore.cart);

// Calculate total price
const calculateSubtotal = () => {
  return cartItems.value.reduce((total, item) => total + Number(item.price), 0);
};

// Calculate discount (fictional logic)
const calculateDiscount = () => {
  const subtotal = calculateSubtotal();
  return subtotal > 100 ? 14.05 : 0;
};

// Calculate final total
const calculateTotal = () => {
  return calculateSubtotal() - calculateDiscount();
};

// Remove item from cart
const removeFromCart = (product) => {
  productsStore.removeFromCart(product);
};
</script>

<template>
  <section class="cart">
    <div class="cart-count" v-if="cartItems.length > 0">
      You have {{ cartItems.length }} products in your Cart
    </div>
    
    <div class="list">
      <div class="card-item" v-for="item in cartItems" :key="item.id">
        <div class="photo">
          <img :src="item.cover || item.variants[0].image" :alt="item.name">
        </div>
        <div class="info">
          <div class="title">
            <h2>{{ item.name }}</h2>
            <button class="remove-button" @click="removeFromCart(item)">×</button>
          </div>
          <div class="desc-type">
            <div class="color-size">
              <span class="label">Type:</span>
              <span>{{ item.type }}</span>
              <span class="label ml-4" v-if="item.variants && item.variants.length">Color:</span>
              <span v-if="item.variants && item.variants.length">{{ item.variants[0].color }}</span>
            </div>
          </div>
          <div class="value-quant">
            <div class="value">{{ item.price }}$</div>
            <div class="quantity">
              <button disabled>-</button>
              <span>1</span>
              <button disabled>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="summary" v-if="cartItems.length > 0">
      <div class="summary-row">
        <span>Total Price</span>
        <span>{{ calculateSubtotal().toFixed(2) }}$</span>
      </div>
      <div class="summary-row">
        <span>Discount</span>
        <span>{{ calculateDiscount().toFixed(2) }}$</span>
      </div>
      <div class="summary-row">
        <span>Estimated delivery fees</span>
        <span>Free</span>
      </div>
      
      <div class="total-row">
        <span class="total-label">Total:</span>
        <span class="total-value">{{ calculateTotal().toFixed(2) }}$</span>
      </div>
      <div class="saving-applied" v-if="calculateDiscount() > 0">
        Saving Applied: {{ calculateDiscount().toFixed(2) }}$
      </div>
      
      <button class="checkout-button">
        <span class="cart-icon">🛒</span>
        Checkout
      </button>
    </div>
    
    <div class="empty-favorites" v-else>
      <p>Você não possui produtos no carrinho :(</p>
      <button class="browse-button" @click="router.push('/dashboard')">Procurar Produtos</button>
    </div>
  </section>
</template>

<style scoped>
.cart {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.cart-count {
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

.quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.summary {
  margin-top: 2rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.saving-applied {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1rem;
}

.checkout-button {
  width: 100%;
  padding: 1rem;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.empty-cart {
  text-align: center;
  padding: 2rem;
  color: #666;
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