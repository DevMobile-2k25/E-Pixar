<script setup>
import Magnify from "vue-material-design-icons/Magnify.vue";
</script>

<template>
    <header>
        <div class="container">
            <img src="../../assets/images/OneBoard/logo_oneboard.png" alt="">
            <button>
                <Magnify class="icon" :size="40" />
            </button>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: end;
    justify-content: end;
}

.container {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    width: 50%;
}

span {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    border: 0;
    background: transparent;
}
</style>