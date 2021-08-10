<template lang="html">
  <view class="appbar ">
    <view class="left bba-row bba-main-center" @click="leftClick()">
      <slot name="left"></slot>
    </view>
    <view class="app-title">
      <slot>
        <span v-text="title"></span>
      </slot>
    </view>
    <view class="right bba-row bba-main-center" @click="rightClick">
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script>
export default {
  name: 'info-header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    leftClick () {
      uni.navigateBack()
    },
    rightClick () {
      this.$emit('rightClick', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/common.scss";
.appbar {
  position: relative;
  color: #fff;
  background: rgb(46, 111, 153);
  font-size: 32rpx;
  height: 88rpx;
  line-height: 88rpx;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0 20rpx;
  .left,
  .right {
    position: absolute;
    top: 0;
    bottom: 0;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 32rpx;
    align-items: center;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
    font-size: 20rpx;
  }
  .app-title {
    text-align: center;
    height: 88rpx;
    line-height: 88rpx;
  }
  .bba-icon {
    font-size: 40rpx;
  }
}
</style>
