<template>
	<view class="list">
		<!-- <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera> -->
		<button type="primary" @click="takePhoto">拍照</button>
		<examine-list :items="items" @gotoDetail="gotoDetail"></examine-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [1, 2, 3, 4, 5]
			}
		},
		onLoad() {
		},
		methods: {
			takePhoto() {
				uni.chooseImage({
					sourceType: ['camera'],
					success: (res) => {
						uni.showToast({
							title: '哈哈哈'
						})
					}
				})
				// const ctx = uni.createCameraContext();
				// ctx.takePhoto({
				// 	quality: 'high',
				// 	success: (res) => {
				// 		this.src = res.tempImagePath
				// 	}
				// });
			},
			gotoDetail () {
				// uni.navigateTo({
				//     url: '../warehousing/list'
				// });
				console.log(111)
				const ctx = uni.createCameraContext()
				console.log(ctx)
				ctx.takePhoto({
				  quality: 'high',
				  success: (res) => {
				    // this.setData({
				    //   src: res.tempImagePath
				    // })
						console.log(res)
				  }
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
