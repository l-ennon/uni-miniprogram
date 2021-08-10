<template>
  <view class="list-item-wrap bba-bg-white" @click="toDetail()">
    <view class="list-item list-item-top">
      <view class="company">天津港国际贸易有限公司《申请借款》合同编号：CYD-2021-1682-1J</view>
      <view class="flow-info">
        <view class="flow-name">车辆借款申请</view>
        <view class="flow-status" v-if="true">待审核</view>
      </view>		
    </view>
    <view class="list-item">
      <view>发起人：马上好车复核岗</view>
      <view>
        <view>审核人：仓库业务</view>
      </view>		
    </view>
    <view class="list-item">
      <view>当前环节：仓库|监管公司入库核验</view>
      <view>
        <view>2020-05-07 18:00:00</view>
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
			toDetail() {
				this.$emit("toDetail");
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
