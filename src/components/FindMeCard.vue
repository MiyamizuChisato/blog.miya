<template>
  <div class="find-me-card">
    <div class="find-me-card-head">
      <span>找到我</span>
    </div>
    <div class="find-me-card-body">

      <div class="find-me-card-body-item">
        <el-link>
          Github
        </el-link>
      </div>
      <div class="find-me-card-body-item">
        <el-link>
          Twitter
        </el-link>
      </div>
      <div class="find-me-card-body-item">
        <el-link>
          哔哩哔哩
        </el-link>
      </div>
      <div class="find-me-card-body-item">
        <el-link>
          腾讯QQ
        </el-link>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "FindMeCard"
}
</script>

<style lang="less" scoped>
.find-me-card {
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  background-color: white;

  .find-me-card-head {
    border-bottom: 1px solid #22bf87;
    display: flex;
    justify-content: flex-start;
    font-size: 20px;

    span {
      font-size: 16px;
      color: #606266;
      position: relative;
      top: 2px;
      border-bottom: 4px solid #409EFF;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .find-me-card-body {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .find-me-card-body-item {
      display: flex;
      box-sizing: border-box;
      font-size: 14px;
      padding-left: 20px;
      padding-top: 4px;
      padding-bottom: 4px;
      margin-top: 4px;
      margin-bottom: 4px;
      background-color: #f1f0f0;
      width: 100%;
      border-radius: 8px;
      color: #909399;
    }
  }
}
</style>
