<template>
  <el-container class="window">
    <el-aside style="width: auto;">
      <miya-aside/>
    </el-aside>
    <el-container class="container" :class="store.state.application.menu.aside.isNavCollapsed?'container-collapse':''">
      <el-header height="68px">
        <miya-header/>
      </el-header>
      <miya-main/>
    </el-container>
  </el-container>
  <var-back-top bottom="16" :duration="100">
    <svg class="icon" style="font-size: 28px;" aria-hidden="true">
      <use xlink:href="#icon-plane"></use>
    </svg>
  </var-back-top>
</template>
<script setup>
import MiyaAside from "./components/MiyaAside.vue";
import MiyaHeader from "./components/MiyaHeader.vue";
import MiyaMain from "./components/MiyaMain.vue";
import {useStore} from "vuex";

const store = useStore()
</script>
<style lang="less" scoped>
.window {
  height: 100%;
  user-select: none;

  .el-header {
    padding: 0;
  }

  .container-collapse {
    margin-left: 60px !important;
  }

  .container {
    transition: margin-left 0.444s;
    margin-left: 200px;

    .el-header {
      z-index: 999;
      position: sticky;
      top: 0;
    }
  }
}

.icon {
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
