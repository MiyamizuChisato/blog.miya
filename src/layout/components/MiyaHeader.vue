<template>
  <div class="miya-header" :class="isDisplay?'miya-header-top-display':''">
    <div class="miya-header-search" :class="isDisplay?'miya-header-search-top-display':''">
      <input placeholder="★ 输入关键字查询 ~ ★" type="text">
      <el-icon class="icon" :size="24">
        <search/>
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import {Search} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";

const isDisplay = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    isDisplay.value = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 0
  })
})
</script>

<style lang="less" scoped>
.miya-header-top-display {
  background-color: white;
}

.miya-header {
  transition: background-color 0.1s;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  height: 100%;

  .miya-header-search-top-display {
    input {
      background-color: #efefef !important;
    }
  }

  .miya-header-search {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      height: 44px;
      width: 456px;
      border-radius: 12px;
      padding: 0 40px 0 12px;
      border: 0;
      outline: none;
      transition: all .3s;
    }

    .icon {
      color: #909399;
      cursor: pointer;
      position: relative;
      left: -34px;
    }
  }
}
</style>
