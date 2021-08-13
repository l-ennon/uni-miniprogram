<template>
  <view class="wrap bba-bg-white bba-row">
    <view class="img-wrap" @click="previewImg()">
      <image :src="`${BASE_URL}/uniapp/picView/1425643794228936705`" mode=""></image>
      <!-- <img src="http://mcp.test.bcste.cn/bmci-mcp/uniapp/readRes/1425643794228936705" /> -->
    </view>
    <view class="img-info">
      <view class="item bba-row">
        <view class="icon iconfont">&#xeb91;</view>
        <view>{{item.frameNumber}}</view>
      </view>
      <view class="item bba-row">
        <view class="icon iconfont">&#xe607;</view>
        <view>{{item.operationTime | formatDate}}</view>
      </view>
      <view class="item bba-row">
        <view class="icon iconfont">&#xe600;</view>
        <view>{{item.address}}</view>
      </view>
      <view class="item bba-row bba-t-red" v-if="item.errMsg">
        <view class="icon iconfont bba-t-red">&#xe758;</view>
        <view>{{item.errMsg}}</view>
      </view>
      <view class="delete-btn" @click="confirmDelete(item)">删除</view>
    </view>
  </view>
</template>

<script>
  import BASE_URL from '@/utils/baseURL.js'
  import {formatDate} from '@/utils/dateFormat.js'
  export default {
    props: {
    	item: {
    		type: [Object],
    		default: {}
    	}
    },
    data () {
      return {
        imgUrl: require('../../../static/image/person.jpg'),
        BASE_URL: BASE_URL
      }
    },
    filters: {
      formatDate (value) {
        return formatDate(value)
      }
    },
    methods:{
      // 放大照片
      previewImg () {
        uni.previewImage({
          urls: ['http://mcp.test.bcste.cn/bmci-mcp/uniapp/picView/1425643794228936705'],
        })
      },
      // 确认删除
      confirmDelete (item) {
        uni.showModal({
          title: '提示',
          content: '确定将这张照片删除？',
          success: function (res) {
            if (res.confirm) {
              this.$emit('confirmDelete', item)
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }.bind(this)
        })
      }
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
