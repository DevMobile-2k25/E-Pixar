<script setup>
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { NavbarComp } from './components'

const route = useRoute()
</script>

<template>
  <div>
    <template v-if="route.path === '/'">
      <RouterView />
    </template>
    <template v-else>
      <div class="content">
        <RouterView />
        <div class="space">
        </div>
        <NavbarComp />
      </div>
    </template>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.space {
  height: 10vh;
}
</style>
