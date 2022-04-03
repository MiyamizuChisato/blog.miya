<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <div>
        <swiper height="600px"/>
      </div>
    </el-col>
    <el-col :span="6">
      <el-affix :offset="80">
        <div>
          <find-me-card/>
        </div>
        <div style="margin-top: 20px">
          <friend-card/>
        </div>
      </el-affix>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6">
      <div>
        <template v-for="i in paths">
          <count-card v-if="i.meta.card.show"
                      :title="i.meta.card.title"
                      :background-color="i.meta.card.backgroundColor"
                      :des="i.meta.card.des"
                      :icon="i.meta.icon"
                      style="margin-bottom: 20px"/>
        </template>
        <el-affix :offset="80">
          <about-card/>
        </el-affix>
      </div>
    </el-col>
    <el-col :span="12">
      <article-card v-for="i in 10" height="300px" style="margin-bottom: 20px"/>
    </el-col>
  </el-row>
</template>
<script setup>
import ArticleCard from "../components/ArticleCard.vue";
import Swiper from '../components/Swiper.vue'
import CountCard from "../components/CountCard.vue";
import FindMeCard from "../components/FindMeCard.vue";
import FriendCard from "../components/FriendCard.vue";
import AboutCard from "../components/AboutCard.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const paths = router.options.routes[0].children
</script>
<style lang="less" scoped>
.el-affix {
  width: 100% !important;
}

.el-row {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
