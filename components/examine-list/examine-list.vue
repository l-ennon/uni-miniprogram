<template>
	<view>
		<view class="wrap" v-for="(item,index) in items" @click="onClick()">
			<view class="list">
				<view class="title company">天津港国际贸易有限公司《申请借款》合同编号：CYD-2021-1682-1J</view>
				<view class="state">
					<view>车辆借款申请</view>
					<view v-if="true" class="msg">待审核</view>
				</view>		
			</view>
			<view class="list">
				<view class="title">发起人：马上好车复核岗</view>
				<view class="state">
					<view>审核人：仓库业务</view>
				</view>		
			</view>
			<view class="list">
				<view class="title">当前环节：仓库|监管公司入库核验</view>
				<view class="state">
					<view>2020-05-07 18:00:00</view>
				</view>		
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
			items: {
				type: [Array],
				default: []
			},
		},
		methods: {
			onClick() {
				this.$emit("gotoDetail");
			}
		}
	}
</script>

<style lang="scss">
	.wrap {
		padding: 18rpx 24rpx;
		font-size: 20rpx;
		border-bottom: 1rpx solid #666666;
	}
	.list {
		padding-bottom: 10rpx;
		color: #333333;
		display: flex;
		flex-flow: row nowrap;
		&:last-child {
			padding-bottom: 0rpx;
		}
		.title {
			font-size: 24rpx;
			width: 60%;
		}
		.company {
			color: $uni-color-primary;
		}
		.state {
			width: 40%;
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-end;
			.msg {
				padding-top: 10rpx;
			}
		}
	}
</style>
