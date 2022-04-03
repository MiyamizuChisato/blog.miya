<template>
  <div class="count-card">
    <div class="count-card-head">
      <div>
        <svg class="icon" :style="'background-color: '+backgroundColor" aria-hidden="true">
          <use :xlink:href="'#'+icon"></use>
        </svg>
      </div>
      <div>220</div>
    </div>
    <div class="count-card-body">
      <div class="count-card-body-title">
        {{ title }}
      </div>
      <div class="count-card-body-details">
        {{ des }}
      </div>
    </div>
    <div class="count-card-foot">
      <el-button color="#22bf87"> -> to watch</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountCard",
  props: {
    title: String,
    icon: String,
    des: String,
    backgroundColor: String
  }
}
</script>

<style lang="less" scoped>
.count-card {
  background-color: white;
  border-radius: 8px;
  padding: 10px;

  .count-card-head {
    padding: 10px;
    font-size: 36px;
    font-weight: bolder;
    color: #22bf87;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      font-size: 50px;
      border-radius: 8px;
    }
  }

  .count-card-body {
    padding: 10px;

    .count-card-body-title {
      font-weight: bold;
      color: #1F1D2B;
      font-size: 26px;
      padding-bottom: 10px;
    }

    .count-card-body-details {
      font-size: 14px;
      color: #909399;
      text-indent: 2em;
    }
  }

  .count-card-foot {
    padding: 10px;
    display: flex;
    justify-content: flex-end;

    .el-button {
      color: white;
    }
  }
}

</style>
