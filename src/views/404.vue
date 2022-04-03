<template>
  <div class="page">
    <div class="page-mask">
      <div class="page-mask-404">404</div>
      <div @click="refresh">
        <el-link>
          <div class="return">
            返回首页
          </div>
        </el-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const refresh = () => {
  window.location.href = '/'
}
</script>
<style lang="less" scoped>
.page {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/img/404.jpg");
  background-position: center;
  background-size: cover;

  .page-mask {
    width: 100%;
    height: 100%;
    background: linear-gradient(200deg, rgba(49, 49, 48, 0), rgba(22, 29, 39, 0.7));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .page-mask-404 {
      padding: 20px;
      font-size: 12em;
      color: #fefffe;
      font-weight: 1000;
      letter-spacing: 24px;
    }
  }

  .return {
    font-size: 1.2rem;
  }
}
</style>
