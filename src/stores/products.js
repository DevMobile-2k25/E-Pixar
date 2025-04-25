import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { products } from '@/data/products'
import { filmsData } from '@/data/data'
import { useStorage } from '@vueuse/core'

export const useProductsStore = defineStore('products', () => {
  const state = reactive({
    isLoading: false,
    error: null,
    selectedFilm: null,
    films: [],
    selectedProduct: null,
  })

  const favorites = useStorage('favorites', [])
  const cart = useStorage('cart', [])

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

  const addFavorite = (product) => {
    if (!favorites.value.some((item) => item.id === product.id)) {
      favorites.value.push(product)
    } else {
      state.error = 'Product already in favorites'
    }
  }

  const removeFavorite = (product) => {
    const index = favorites.value.findIndex((item) => item.id === product.id)
    if (index !== -1) {
      favorites.value.splice(index, 1)
    } else {
      state.error = 'Product not found in favorites'
    }
  }

  const addToCart = (product) => {
    if (!cart.value.some((item) => item.id === product.id)) {
      cart.value.push(product)
    } else {
      state.error = 'Product already in cart'
    }
  }

  const removeFromCart = (product) => {
    const index = cart.value.findIndex((item) => item.id === product.id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    } else {
      state.error = 'Product not found in cart'
    }
  }

  return {
    state,
    getProduct,
    getFilm,
    addFavorite,
    removeFavorite,
    addToCart,
    removeFromCart,
    favorites,
    cart,
  }
})
