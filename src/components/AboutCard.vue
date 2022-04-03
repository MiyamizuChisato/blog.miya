<template>
  <div class="about-card">
    <div class="about-card-head">
      <div class="about-card-head-mask">
        <div class="about-card-head-time">
          <div>{{ date.getFullYear() }}</div>
          <div class="about-card-head-time-tag">年</div>
        </div>
        <div class="about-card-head-split">-</div>
        <div class="about-card-head-time">
          <div>{{ date.getMonth() + 1 > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1) }}</div>
          <div class="about-card-head-time-tag">月</div>
        </div>
        <div class="about-card-head-split">-</div>
        <div class="about-card-head-time">
          <div>{{ date.getDate() }}</div>
          <div class="about-card-head-time-tag">日</div>
        </div>
      </div>
    </div>
    <div class="about-card-body">
      <div class="about-card-body-logo">
        我滴任务完成啦
      </div>
      <div class="about-card-body-details">
        动画、游戏、程序，这是Miya的主要画像，也是这里的主题。本站会收集动画，评价游戏，分享程序。目前在玩：艾尔登法环 ~
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutCard",
  setup() {
    const date = new Date();
    return {
      date
    }
  }
}
</script>

<style lang="less" scoped>
.about-card {
  border-radius: 8px;
  background-color: white;

  .el-divider {
    margin: 0;
  }

  .about-card-head {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-image: url("/src/assets/time.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 136px;

    .about-card-head-mask {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 48px;
      transition: background-color 0.6s;

      &:hover {
        backdrop-filter: blur(3px);
        background-color: rgba(0, 0, 0, 0.4);
      }
    }

    .about-card-head-split {
      position: relative;
      top: -14px;
    }

    .about-card-head-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .about-card-head-time-tag {
        font-size: 16px;
      }
    }
  }

  .about-card-body {
    padding: 12px;

    .about-card-body-logo {
      font-family: Art;
      font-size: 20px;
    }

    .about-card-body-details {
      font-size: 14px;
      text-indent: 2em;
      color: #606266
    }
  }
}
</style>
