<script setup>
import { useProductsStore } from "@/stores/products";
import Home from "vue-material-design-icons/Home.vue";
import Menu from "vue-material-design-icons/Menu.vue";
import Cart from "vue-material-design-icons/Cart.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";

const store = useProductsStore();

const icons = [     
    { name: "Home", icon: Home, route: "/dashboard" },
    { name: "Menu", icon: Menu, route: "/catalog" },
    { name: "Cart", icon: Cart, route: "/cart" },
    { name: "Like", icon: Heart, route: "/likes" },
    { name: "Profile", icon: AccountCircle, route: "/" },
];
</script>

<template>
    <nav class="navbar">
        <router-link
            v-for="item in icons"
            :key="item.name"
            :to="item.route"
            class="nav-icon"
            :title="item.name"
        >
            <component :is="item.icon" size="24" />
            <span v-if="item.name === 'Cart' && store.cart.length" class="badge">
                {{ store.cart.length }}
            </span>
        </router-link>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
}

.nav-icon {
    background: none;
    border: none;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.2s;
    text-decoration: none;
    color: inherit;
    position: relative;
}

.nav-icon:hover {
    transform: scale(1.2);
}

.badge {
    position: absolute;
    top: -5px;
    right: -10px;
    background: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
}
</style>
