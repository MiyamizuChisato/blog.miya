<template>
  <div class="article-card">
    <div class="article-card-main" :style="'height:'+height" @click="to" @mouseenter="mouseIn" @mouseleave="mouseOut">
      <div class="article-card-main-mask">
        <transition appear
                    enter-active-class="animate__animated animate__fadeInDown animate__faster"
                    leave-active-class="animate__animated animate__fadeOutUp animate__faster">
          <div v-show="!isShow" class="article-card-main-center-tag">
            <el-tag effect="dark">后端</el-tag>
          </div>
        </transition>
        <transition appear
                    enter-active-class="animate__animated animate__zoomIn animate__faster"
                    leave-active-class="animate__animated animate__zoomOut animate__faster">
          <div v-show="isShow" class="article-card-main-details">
            本文浏览需要读者具有一定的SpringBoot和SpringCloud的前置知识，如没有前置知识，可以纯做科普阅读。
          </div>
        </transition>
        <transition appear
                    enter-active-class="animate__animated animate__fadeInUp animate__faster"
                    leave-active-class="animate__animated animate__fadeOutDown animate__faster">
          <div v-show="!isShow" class="article-card-main-center-title">
            组件停止更新的SpringCloud是否已经丢失了微服务的一席之地
          </div>
        </transition>
      </div>
    </div>
    <div class="article-card-foot">
      <div class="article-card-foot-time">
        <el-icon :size="20">
          <calendar/>
        </el-icon>
        <time>2022/01/01</time>
      </div>
      <div class="article-card-foot-comment">
        <el-icon :size="20">
          <comment/>
        </el-icon>
        <div>3</div>
      </div>
      <div class="article-card-foot-view">
        <el-icon :size="20">
          <View/>
        </el-icon>
        <div>20</div>
      </div>
      <div class="article-card-foot-read">
        <el-button type="primary">开始阅读</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {Calendar, Comment, View} from "@element-plus/icons-vue";

export default {
  name: "ArticleCard",
  components: {Calendar, Comment, View},
  setup: function () {
    const router = useRouter()
    const isShow = ref(false)
    const mouseIn = () => {
      isShow.value = true;
    }
    const mouseOut = () => {
      isShow.value = false;
    }
    const to = () => {
      router.push('/404')
    }
    return {
      isShow, mouseIn, mouseOut, to
    }
  },
  props: {
    height: String
  }
}
</script>

<style lang="less" scoped>
.article-card {
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.11);
  }

  &:hover .article-card-main-mask {
    background: rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
  }

  .article-card-main {
    cursor: pointer;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-sizing: border-box;
    background-image: url("/src/assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;

    .article-card-main-mask {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      padding: 20px;
      box-sizing: border-box;
      transition: all 0.6s;

      .article-card-main-center-tag {
        justify-content: center;
        align-items: center;
      }

      .article-card-main-center-title {
        font-size: 30px;
        text-align: center;
        text-shadow: 3px 3px 3px rgb(0 0 0 / 60%);
      }

      .article-card-main-details {
        font-size: 17px;
        text-align: center;
        position: fixed;
        padding: 20px;
      }
    }
  }

  .article-card-foot {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #ffffff;
    padding-left: 12px;
    padding-right: 12px;

    .article-card-foot-time,
    .article-card-foot-comment,
    .article-card-foot-view {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      font-size: 13px;
    }

    .article-card-foot-read {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex: 5;
    }
  }
}
</style>
