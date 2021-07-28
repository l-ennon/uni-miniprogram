<template>
	<view class="container">
		<!-- <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<view class="banner">
			<image src="../../static/banner.png" mode=""></image>
		</view>
		<view class="toLogin" @click="toLogin()">
			<view class="title">我的工作</view>
			<view class="flex flex--direction">
				<view class="aa" v-for="(item, index) in workList">
					<view class="aaa">
						{{ item.name }}
					</view>
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
						icon: '../../static/logo.png'
					},
					{
						name: '盘库',
						icon: '../../static/logo.png'
					},
					{
						name: '入库核验',
						icon: '../../static/logo.png'
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
</style>
