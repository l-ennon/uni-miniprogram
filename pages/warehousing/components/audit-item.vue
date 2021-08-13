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
      <upload-img
        action="/uniapp/busniess/review/importAttachment"
        :imgList="otherFiles">
      </upload-img>
      <!-- <uni-file-picker 
        v-model="imageValue" 
        fileMediatype="image" 
        mode="grid" 
        @select="select" 
        @progress="progress" 
        @success="success" 
        @delete="deleteImg"
      /> -->
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      imageValue: [require('../../../static/image/person.jpg')],
      otherFiles: []
    }
  },
  methods: {
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
      padding-right: 0;
      min-height: 100rpx;
      // width: 90%;
      uni-textarea {
        width: 750rpx;
      }
    }
  }
</style>
