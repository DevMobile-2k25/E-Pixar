<script setup></script>

<template>
    <header>
        <div class="container">
            <div class="left">
                <div class="logo">
                    <h1>E-Pixar</h1>
                </div>
                <div class="nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/">About</router-link>
                    <router-link to="/">Contact</router-link>
                    <router-link to="/">Products</router-link>
                </div>
            </div>
            <div class="utils">
                <input type="text">
                <div class="buttons">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    display: flex;
    align-items: center;
    gap: 20px;
}


.utils {
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav a {
    text-decoration: none;
    color: gray;
    font-size: 13pt;
    font-weight: 500;
    transition: color 0.3s ease;
}

input {
    width: 100%;
    height: 3rem;
    border-radius: 20px;
    border: 2px solid #E5E7EB;
    padding: 1rem;
}

button {
    border-radius: 15px;
    width: max-content;
    border: 2px solid #E5E7EB;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-color);
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
    transform: scale(1.01);
    background-color: #e5e7eb;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:active {
    transform: scale(0.9);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


.buttons {
    display: flex;
    gap: 20px;
}
</style>