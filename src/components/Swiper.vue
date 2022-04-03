<template>
  <el-carousel arrow="never" :height="height" :autoplay="true">
    <el-carousel-item v-for="item in 3" :key="item">
      <div class="carousel-background" style="background-image: url('/src/assets/img/2.jpg')">
        <div class="carousel-background-mask">
          <div class="carousel-background-content">
            <p>SpringBoot为什么是神</p>
            <div>
              <el-button type="primary" size="large" round>开始阅读</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    height: String,
  }
}
</script>

<style lang="less">
.el-carousel {
  border-radius: 12px;
}

.el-carousel__indicator--horizontal button {
  width: 16px;
  height: 8px;
  border-radius: 16px;
}

.is-active .el-carousel__button {
  background-color: #409EFF !important;
  width: 32px;
}

.carousel-background {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  .carousel-background-mask {
    height: 100%;
    background: linear-gradient(180deg, rgba(49, 49, 48, 0), rgba(22, 29, 39, .5));

    .carousel-background-content {
      position: absolute;
      bottom: 60px;
      left: 60px;
      color: #E4E7ED;
      font-size: 36px;
      text-shadow: 3px 3px 3px rgb(0 0 0 / 60%);
      letter-spacing: .0073529412em !important;
    }
  }
}
</style>
