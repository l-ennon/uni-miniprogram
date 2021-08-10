<template>
	<view class="list-item-wrap bba-bg-white">
    <view class="select-icon" @click="toggleSingle(item)">
      <view v-if="item.selected" class="iconfont">&#xeb92;</view>
      <view v-else class="iconfont">&#xe62d;</view>
    </view>
    <view class="item-info">
      <view class="title">{{item.brand}}-{{item.carSystem}} {{item.model}}</view>
      <view class="item">
        <view class="num">车架号：{{item.frameNumber}} | </view>
        <view>排量1.4</view>
      </view>
      <view class="item">
        <view>合格证号/关单号：{{item.certificateNumber}}</view>
      </view>
      <view class="item">
        <view class="storgge">{{item.storagePosition}}</view>
        <view class="status">已标记</view>
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
			onClick() {
				this.$emit("gotoDetail");
			},
      toggleSingle(item) {
        this.$set(item, 'selected', !item.selected)
        this.$emit('toggleSingle', item.selected)
      }
		}
	}
</script>

<style lang="scss" scoped>
	.list-item-wrap {
    display: flex;
    flex: row nowrap;
    align-items: center;
		padding: 20rpx 24rpx;
		border-bottom: 1rpx solid #ececec;
    font-size: 24rpx;
    .select-icon {
      width: 80rpx;
      .iconfont {
        font-size: 42rpx;
      }
    }
    .title {
      font-size: 28rpx;
    }
    .item {
      display: flex;
      flex: row nowrap;
      margin-top: 10rpx;
      .num {
        margin-right: 10rpx;
      }
    }
	}
	.list-item {
		flex-flow: row nowrap;
		display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    padding-bottom: 10rpx;
		&:last-child {
			padding-bottom: 0rpx;
		}
	}
</style>
