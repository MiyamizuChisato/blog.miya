<template>
  <transition enter-active-class="animate__animated animate__zoomIn animate__faster"
              leave-active-class="animate__animated animate__zoomOut animate__faster">
    <p v-show="dis" @click="click">该页面还在构思中......</p>
  </transition>
</template>

<script setup>
import {ref} from "vue";

const click = () => {
  dis.value = !dis.value
}
const dis = ref(true)
</script>

<style scoped>
p {
  font-size: 30px;
  color: #909399;
}
</style>
