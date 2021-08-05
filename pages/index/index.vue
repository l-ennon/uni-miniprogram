<template>
	<view class="container">
		<!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<view class="banner">
			<image src="../../static/banner.png" mode=""></image>
		</view>
		<view class="mine" @click="toLogin()">
			<view class="title">我的工作</view>
			<view class="work">
				<view class="box" v-for="(item, index) in workList">
					<image :src="item.icon" mode=""></image>
					<view>{{ item.name }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				workList: [
					{
						name: '入库核验',
						icon: '../../static/image/warehousing.png'
					},
					{
						name: '盘库',
						icon: '../../static/image/dish.png'
					},
					{
						name: '入库核验',
						icon: '../../static/templateHL.png'
					}
				]
			}
		},
		methods: {
			toLogin () {
				uni.navigateTo({
				    url: '../login/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	.banner {
		width: 100vw;
		height: 300rpx;
		image {
			display: block;
			width: 100vw;
			height: 300rpx;
		}
	}
	.mine {
		margin-top: 20rpx;
		.title {
			margin-left: 24rpx;
			font-size: 24rpx;
			color: #666666;
		}
	}
	.work {
		display: flex;
		flex-flow: row nowrap;
		font-size: 28rpx;
		color: #333333;
	}
	.box {
		margin-top: 20rpx;
		height: 100rpx;
		flex: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		image {
			display: block;
			margin-bottom: 20rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
