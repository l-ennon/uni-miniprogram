<template>
  <view class="list-item-wrap bba-bg-white" @click="toDetail(item)">
    <view class="list-item list-item-top">
      <view class="company">{{item.busDesc}}</view>
      <view class="flow-info">
        <view class="flow-name">{{item.objName}}</view>
        <!-- <view class="flow-status" v-if="true">待审核</view> -->
      </view>		
    </view>
    <view class="list-item">
      <view>发起人：{{item.propUserName}}</view>
      <view>
        <view>审核人：{{item.approUserName}}</view>
      </view>		
    </view>
    <view class="list-item">
      <view>当前环节：{{item.flowNodeName}}</view>
      <view>
        <view>{{item.propTime}}</view>
      </view>		
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			item: {
				type: [Object],
				default: {}
			},
		},
		methods: {
			toDetail(item) {
				this.$emit("toDetail", item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-item-wrap {
		padding: 20rpx 24rpx;
		font-size: 22rpx;
		border-bottom: 1rpx solid #ececec;
	}
	.list-item {
		flex-flow: row nowrap;
		display: flex;
    justify-content: space-between;
    padding-bottom: 10rpx;
		&:last-child {
			padding-bottom: 0rpx;
		}
	}
  .list-item-top {
    .company {
      width: 60%;
    	color: $uni-color-primary;
      font-size: 28rpx;
    }
    .flow-info {
    	width: 40%;
    	display: flex;
    	flex-flow: column nowrap;
    	justify-content: space-around;
      text-align: right;
      .flow-name {
        font-size: 28rpx;
        color: #111;
      }
      .flow-status {
        font-size: 26rpx;
      }
    }
  }
</style>
