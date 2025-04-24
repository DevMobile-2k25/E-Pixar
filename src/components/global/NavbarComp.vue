<script setup>
import Home from "vue-material-design-icons/Home.vue";
import Menu from "vue-material-design-icons/Menu.vue";
import Cart from "vue-material-design-icons/Cart.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";

const icons = [     
    { name: "Home", icon: Home, route: "/" },
    { name: "Menu", icon: Menu, route: "/catalog" },
    { name: "Cart", icon: Cart, route: "/cart" },
    { name: "Like", icon: Heart, route: "/likes" },
    { name: "Profile", icon: AccountCircle, route: "/profile" },
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
}

.nav-icon:hover {
    transform: scale(1.2);
}
</style>
