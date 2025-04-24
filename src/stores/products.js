import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { products } from '@/data/products'
import { filmsData } from '@/data/data'

export const useProductsStore = defineStore('products', () => {
  const state = reactive({
    isLoading: false,
    error: null,
    selectedFilm: null,
    films: [],
    selectedProduct: null,
  })

const getProduct = (id) => {
    const product = products.find((product) => product.id == id)
    if (product) {
        state.selectedProduct = product
    } else {
        state.error = 'Product not found'
    }
}

const getFilm = (id) => {
    console.log(id)
    const film = filmsData.find((film) => film.id == id)
    console.log(film)
    if (film) {
        state.selectedFilm = film
    } else {
        state.error = 'Film not found'
    }
}

  return {
    state,
    getProduct,
    getFilm,
  }
})
