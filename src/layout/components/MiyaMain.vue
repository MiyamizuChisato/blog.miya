<template>
  <div class="miya-main">
    <router-view/>
  </div>
</template>

<script>
import Swiper from "../../components/Swiper.vue";

export default {
  name: "MiyaMain",
  components: {Swiper}
}
</script>

<style lang="less" scoped>
.miya-main {
  padding: 20px;
}
</style>
