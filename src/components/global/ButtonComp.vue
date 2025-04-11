<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'primary'
    },
    background: {
        type: String,
        default: 'black'
    },
    size: {
        type: String,
        default: '100px'
    },
    padding: {
        type: String,
        default: '10px'
    },
})
</script>

<template>
    <button :style="{ backgroundColor: props.background, color: props.color, width: props.size, padding: props.padding }"
        class="btn">
        {{ props.text }}
    </button>
</template>

<style scoped>
.btn {
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
}
</style>