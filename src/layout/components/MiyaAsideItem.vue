<template>
  <div class="miya-aside-item">
    <div class="miya-aside-item-icon">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#'+icon"></use>
      </svg>
    </div>
    <div class="miya-aside-item-class"
         :class="store.state.application.menu.aside.isNavCollapsed?'miya-aside-item-class-collapse':''">
      {{ title }}
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  props: {
    title: String,
    icon: String
  }
}

</script>

<style lang="less" scoped>
.is-active .miya-aside-item {
  background-color: #fedbe9;
}

.is-active .icon {
  background-color: #409eff !important;
}

.is-active .miya-aside-item-class {
  color: #409eff !important;
}

.miya-aside-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.444s;

  .miya-aside-item-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      background-color: #f4f4f5;
      padding: 6px;
      border-radius: 8px;
    }
  }

  .miya-aside-item-class {
    font-size: 16px;
    font-weight: bolder;
    color: #909399;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.444s;
    position: relative;
    left: 12px;
  }

  .miya-aside-item-class-collapse {
    width: 0 !important;
    left: -100px;
    color: transparent;
  }
}
</style>
