<template>
  <div class="friend-card">
    <div class="friend-card-head">
      <span>友情链接</span>
    </div>
    <div class="friend-card-body">
      <div class="friend-card-body-site">
        <el-avatar :size="72" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        <div class="friend-card-body-site-des">
          <div class="friend-card-body-site-des-user">Takahashi</div>
          <div class="friend-card-body-site-des-name">
            <el-popconfirm @cancel="cancelHandler" @confirm="confirmHandler('https://www.baidu.com')" title="是否访问？">
              <template #reference>
                <el-link>
                  百度
                </el-link>
              </template>
            </el-popconfirm>
          </div>
        </div>
      </div>
      <div class="friend-card-body-details">
        this is site simple details, you can write some useful to inject your web site, if click the button someone will
        be guided to your site
      </div>
    </div>
    <div class="friend-card-foot">
      <div>
        <el-popconfirm @cancel="cancelHandler" @confirm="confirmHandler('https://www.baidu.com')" title="是否访问？">
          <template #reference>
            <el-button type="primary">让我访问</el-button>
          </template>
        </el-popconfirm>
      </div>
      <div>
        <el-link>
          全部链接
          <el-icon>
            <links/>
          </el-icon>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Link as Links} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

const confirmHandler = (path) => {
  ElMessage.warning('已经为你导航，1秒后将自动跳转')
  setTimeout(() => {
    open(path)
  }, 1500)
}
const cancelHandler = () => {
  ElMessage.success('已经取消导航')
}
</script>

<style lang="less" scoped>
.friend-card {
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  background-color: white;

  .friend-card-head {
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

  .friend-card-body {
    padding: 10px;

    .friend-card-body-site {
      display: flex;
      align-items: center;
      padding: 10px;

      .friend-card-body-site-des {
        margin-left: 12px;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        color: #909399;

        .friend-card-body-site-des-user {
          font-size: 18px;
          color: #304455;
        }

        .friend-card-body-site-des-name {
        }
      }
    }

    .friend-card-body-details {
      padding: 10px;
      color: #909399;
    }
  }

  .friend-card-foot {
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
}
</style>
