<template>
    <primitive v-if="model" :object="model" />
  </template>
  
  <script setup>
  import { shallowRef, watchEffect } from 'vue'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  
  const props = defineProps({
    modelPath: {
      type: String,
      required: true,
    },
  })
  
  const model = shallowRef(null)
  
  watchEffect(() => {
    if (!props.modelPath) return
    const loader = new GLTFLoader()
    loader.load(props.modelPath, (gltf) => {
      model.value = gltf.scene
    })
  })
  </script>
  