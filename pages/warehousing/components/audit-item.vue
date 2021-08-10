<template>
  <view class="audit-wrap">
    <view class="info remark bba-bg-white">
      <view class="info-title">
        <bba-title title="备注"></bba-title>
       </view>
       <view class="uni-textarea">
         <textarea auto-height placeholder="多行输入" />
       </view>
    </view>
    <view class="info image bba-bg-white">
      <view class="info-title">
        <bba-title title="其他附件"></bba-title>
      </view>
      <uni-file-picker 
        v-model="imageValue" 
        fileMediatype="image" 
        mode="grid" 
        @select="select" 
        @progress="progress" 
        @success="success" 
        @fail="fail" 
      />
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      imageValue: []
    }
  },
  methods: {
    // 获取上传状态
    select(e){
        console.log('选择文件：',e)
    },
    // 获取上传进度
    progress(e){
        console.log('上传进度：',e)
    },

    // 上传成功
    success(e){
        console.log('上传成功')
    },

    // 上传失败
    fail(e){
        console.log('上传失败：',e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    padding: 28rpx 20rpx;
    margin-bottom: 14rpx;
    .info-title {
      margin-bottom: 20rpx;
      .title {
        font-size: 32rpx!important;
        color: #2E6F99 !important;
      }
    }
    .uni-textarea {
      border: 1px solid #ececec;
      border-radius: 10rpx;
      padding: 20rpx;
      min-height: 100rpx;
    }
  }
</style>
