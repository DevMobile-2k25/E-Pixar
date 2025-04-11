<template>
    <div
        v-if="isOpen"
        class="modal-overlay"
    >
        <div class="modal-close-button">
            <button @click="$emit('close')">✖</button>
        </div>

        <TresCanvas clear-color="#000000">
            <TresPerspectiveCamera :position="[3, 3, 3]" />
            <OrbitControls />
            <TresAmbientLight :intensity="1" />
            <Suspense>
                <GLBModel :modelPath="modelPath" />
            </Suspense>
        </TresCanvas>
    </div>
</template>

<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import GLBModel from './GLBModel.vue'

defineProps({
    isOpen: Boolean,
    modelPath: String,
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}

.modal-close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 51;
}

.modal-close-button button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}
</style>
