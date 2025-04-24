<script setup>
import { HeroFilm, HeaderFilm, GridFilmItens } from '@/components';
import { onMounted } from 'vue';
import { products } from '@/data/products';



import { useRoute } from 'vue-router';
import { ref } from 'vue';

const a = ref([]);
const route = useRoute();

onMounted(() => {
    const filmId = route.params.id;
    
    for(const item of products){
        console.log(item.id)
        if(item.filmId == filmId){
            console.log(item)
            a.value.push(item);
        }
    }
});
</script>

<template>
    <HeaderFilm />
    <HeroFilm />
    <GridFilmItens :items='a'  />
</template>

<style scoped></style>