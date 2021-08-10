<template>
  <view class="wrap bba-bg-white bba-row">
    <view class="img-wrap">
      <image src="../../../static/image/person.jpg" mode=""></image>
    </view>
    <view class="img-info">
      <view class="item bba-row">
        <view class="icon iconfont">&#xeb91;</view>
        <view>LSGJG168979993GGH</view>
      </view>
      <view class="item bba-row">
        <view class="icon iconfont">&#xe607;</view>
        <view>2019-09-10</view>
      </view>
      <view class="item bba-row">
        <view class="icon iconfont">&#xe600;</view>
        <view>北京市朝阳区朝阳门内大街198号</view>
      </view>
      <view class="item bba-row bba-t-red">
        <view class="icon iconfont">&#xe758;</view>
        <view>车辆定位不准确不准确不准确</view>
      </view>
      <view class="delete-btn">删除</view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods:{
    },
  }
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 20rpx;
    border-radius: 20rpx;
    margin: 0 10rpx 20rpx;
    box-shadow: 10rpx 10rpx 10rpx #ececec;
    .img-wrap {
      width: 260rpx;
      height: 240rpx;
      flex-grow: 0;
      flex-shrink: 0;
      image {
        width: 100%;
        height: 100%;
        // border-radius: 10rpx;
      }
    }
    .iconfont {
      font-size: 42rpx;
      color: #666;
      margin-left: 10rpx;
      margin-right: 10rpx;
    }
    .item {
      margin-bottom: 14rpx;
    }
    .delete-btn {
      width: 100rpx;
      padding: 16rpx 24rpx;
      margin-left: 300rpx;
      text-align: center;
      background-color: #ececec;
      border-radius: 20rpx;
      font-size: 28rpx;
      color: #333 !important;
    }
  }
</style>
