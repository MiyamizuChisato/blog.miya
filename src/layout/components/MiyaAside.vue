<template>
  <div class="miya-aside"
       :class="store.state.application.menu.aside.isNavCollapsed?'miya-aside-collapse':''">
    <div @click="refresh" class="miya-aside-head">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinghua"></use>
      </svg>
      <div :class="store.state.application.menu.aside.isNavCollapsed?'miya-aside-head-site-collapse':''"
           class="miya-aside-head-site">Miya
      </div>
    </div>
    <el-scrollbar height="80vh">
      <el-menu :default-active="nav[0].name">
        <el-menu-item @click="to(n.path)" v-for="n in nav" :index="n.name">
          <miya-aside-item :title="n.meta.title" :icon="n.meta.icon"/>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <div class="miya-aside-foot">
      <div class="miya-aside-foot-time">
        <el-switch @click="sendMessage" v-model="isNight" size="large" active-color="#000"
                   class="mt-2" inline-prompt :active-icon="Moon"
                   :inactive-icon="Sunny"/>
      </div>
      <div @click="exchangeCollapse" class="miya-aside-foot-arrow">
        <el-icon class="miya-aside-foot-arrow-wrapper">
          <d-arrow-right v-if="store.state.application.menu.aside.isNavCollapsed"/>
          <d-arrow-left v-else/>
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useStore} from "vuex";
import MiyaAsideItem from "./MiyaAsideItem.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {Moon, Sunny, DArrowLeft, DArrowRight} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

const router = useRouter()
const nav = router.options.routes[0].children
const store = useStore()
const isNight = ref(false)
const to = (path: string) => {
  router.push(path)
}
const refresh = () => {
  window.location.href = '/'
}
const exchangeCollapse = () => {
  store.commit('navCollapseStateChangeHandler')
}
const sendMessage = () => {
  ElMessage.error('暫時未上綫暗黑模式，請等待上綫')
}
</script>

<style lang="less" scoped>
.miya-aside-collapse {
  width: 60px !important;
}

.miya-aside {
  width: 200px;
  height: 100%;
  position: fixed;
  background-color: white;
  transition: width 0.444s;
  border-right: 1px solid #E4E7ED;

  .miya-aside-head {
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 48px;
    }

    .miya-aside-head-site {
      position: relative;
      font-family: Art;
      font-size: 36px;
      transition: all 0.444s;
    }

    .miya-aside-head-site-collapse {
      left: -1000px;
      width: 0;
    }
  }

  .el-menu-item {
    width: 100%;
    padding: 0 !important;
  }

  .miya-aside-foot {
    width: 100%;
    position: absolute;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 0;

    .miya-aside-foot-time, .miya-aside-foot-arrow {
      width: 100%;
      border-top: 1px solid #E4E7ED;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #ecf5ff;
      }

      .miya-aside-foot-arrow-wrapper {
        padding: 8px;
        background-color: #E4E7ED;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
