<template>
    <div>
        <button @click="openModel('/data/3d/mike.glb')">Mike</button>
  
  
      <ModalViewer
        :isOpen="modalOpen"
        :modelPath="selectedModel"
        @close="modalOpen = false"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ModalViewer from './ModalViewer.vue'
  
  const modalOpen = ref(false)
  const selectedModel = ref(null)
  
  const openModel = (path) => {
    selectedModel.value = path
    modalOpen.value = true
  }
  </script>
  