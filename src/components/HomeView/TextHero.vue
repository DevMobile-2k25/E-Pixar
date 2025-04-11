<script setup>
import ButtonComp from '../global/ButtonComp.vue';
</script>

<template>
    <article>
        <div class="title">
            <h1>Welcome to E-Pixar</h1>
            <h1>Best Store of Pixar</h1>
        </div>
        <div class="desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, fugit omnis excepturi commodi delectus
                sed porro odio alias cum eveniet expedita autem voluptas molestias deserunt maxime odit inventore vitae
                aperiam.</p>
        </div>
        <div class="buttons">
            <ButtonComp text="Shop Now" color="white" size="20%" height="50px" padding="1rem" />
        </div>
        <div class="info">
            <div class="itemInfo">
                <h3>200+</h3>
                <p>Item</p>
            </div>
            <div class="itemInfo">
                <h3>200+</h3>
                <p>Item</p>
            </div>
            <div class="itemInfo">
                <h3>200+</h3>
                <p>Item</p>
            </div>
        </div>
    </article>
</template>

<style scoped>
h1 {
    font-size: 5rem;
    font-weight: 700;
}

.title{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.desc {
    font-weight: 400;
    margin: 20px 0;
    color: #c1c1c1;
}

.info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.itemInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.itemInfo h3 {
    font-size: 2rem;
    font-weight: 800;
}
</style>