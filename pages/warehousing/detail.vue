<template>
  <view class="detail-wrap">
    <view class="header">
      <!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
     <!-- <info-header title="详细信息">
        <view class="back bba-row" slot="left">
          <view icon="icon iconfont">&#xe609;</view>
        </view>
        <view class="right bba-row" slot="left">
          <view>审批记录</view>
        </view>
      </info-header> -->
      <view class="bar-wrap bba-row">
        <view
          class="header-bar"
          :class="{'active-header-bar': activeIndex === index}"
          @click="selectBar(item, index)"
          v-for="(item, index) in headerBarList"
          :key="index">{{item.label}}</view>
      </view>
      <view class="company-warp">
        <view class="company">北京世纪中讯科技有限公司</view>
        <view class="main-code-wrap bba-row">
          <view class="main-code-mark">合同编号：TSJ-12455-ONJ</view>
          <view class="record-btn">查看审批记录</view>
        </view>
      </view>
    </view>
    <view class="content">
      <!-- 汽车质押信息 -->
      <view class="data-list" v-if="activeIndex === 0">
        <view class="upload-wrap" @click="takePhoto">
          <view class="upload-content bba-row">
            <view class="icon iconfont"> + </view>
            <view>
              <view class="photo">拍摄车架号照片</view>
              <view class="tip">请拍摄前车窗VIN码, 拍摄前请打开手机定位</view>
            </view>
          </view>
        </view>
        <pledge-info-item
          v-for="(item, index) in pledgeInfoList"
          :item="item"
          @toggleSingle="toggleSingle"></pledge-info-item>
      </view>
      <!-- 车架号照片 -->
      <view class="img-list" v-if="activeIndex === 1">
        <image-item></image-item>
      </view>
      <!-- 提交信息 -->
      <view class="audit-list" v-if="activeIndex === 2">
        <audit-item></audit-item>
      </view>
    </view>
    <view class="footer" v-if="activeIndex === 0">
      <view class="select-wrap" @click="selectAllCli()">
        <view v-if="selectAll" class="iconfont">&#xeb92;</view>
        <view v-else class="iconfont">&#xe62d;</view>
        <view class="quanxuan">全选</view>
      </view>
      <view class="footer-btn">车辆标记</view>
    </view>
  </view>
</template>

<script>
  import pledgeInfoItem from './components/pledge-info-item.vue'
  import imageItem from './components/image-item.vue'
  import auditItem from './components/audit-item.vue'
  export default {
    components: { pledgeInfoItem, imageItem, auditItem },
    data() {
      return {
        headerBarList: [
          {
            label: '汽车质押信息',
            type: 'pledge',
            value: 1
          },
          {
            label: '车架号图片',
            type: 'image',
            value: 2
          },
          {
            label: '提交',
            type: 'submit',
            value: 3
          }
        ],
        activeIndex: 0,
        pledgeInfoList: [{
          brand: '路虎',
          carSystem: '路虎揽胜',
          model: '2017款 路虎揽胜 3.0T 汽油 HSE',
          frameNumber: 'SAGDH12FGKUI8989',
          certificateNumber: '123686638999278221',
          storagePosition: '天津宝畅国际库'
        },
        {
          brand: '路虎',
          carSystem: '路虎揽胜',
          model: '2017款 路虎揽胜 3.0T 汽油 HSE',
          frameNumber: 'SAGDH12FGKUI8989',
          certificateNumber: '123686638999278221',
          storagePosition: '天津宝畅国际库'
        },
        {
          brand: '路虎',
          carSystem: '路虎揽胜',
          model: '2017款 路虎揽胜 3.0T 汽油 HSE',
          frameNumber: 'SAGDH12FGKUI8989',
          certificateNumber: '123686638999278221',
          storagePosition: '天津宝畅国际库'
        },
        {
          brand: '路虎',
          carSystem: '路虎揽胜',
          model: '2017款 路虎揽胜 3.0T 汽油 HSE',
          frameNumber: 'SAGDH12FGKUI8989',
          certificateNumber: '123686638999278221',
          storagePosition: '天津宝畅国际库'
        }],
        selectAll: false
      }
    },
    methods: {
      // 切换标题
      selectBar(item, index) {
        let activeIndex = this.activeIndex === index
        this.activeIndex = activeIndex ? null : index
      },
      // 拍照
      takePhoto() {
      	uni.chooseImage({
      		sourceType: ['camera'],
      		success: (res) => {
            uni.getLocation({
                type: 'wgs84',
                success: function (res) {
                    console.log('当前位置的经度：' + res.longitude);
                    console.log('当前位置的纬度：' + res.latitude);
                }
            });
      		}
      	})
      },
      // 单选
      toggleSingle(selected) {
        this.selectAll = true
        if (!selected) {
          this.selectAll = false
        } else {
          this.pledgeInfoList.forEach(element => {
            if (!element.selected) {
              this.selectAll = false
            }
          })
        }
      },
      // 全选
      selectAllCli () {
        this.selectAll = !this.selectAll
        if (this.selectAll) {
          this.pledgeInfoList.forEach(element => {
            this.$set(element, 'selected', true)
          })
        } else {
          this.pledgeInfoList.forEach(element => {
            this.$set(element, 'selected', false)
          })
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .detail-wrap {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .content {
    flex-grow: 1;
  }
  .header {
    flex-grow: 0;
    flex-shrink: 0;
    .bar-wrap {
      justify-content: space-around;
      align-items: center;
      border: 1px solid #ececec;
      background-color: #fff;
    }
    .header-bar {
      width: 33%;
      padding: 22rpx 12rpx;
      font-size: 26rpx;
      border-right: 1px solid #ececec;
      text-align: center;
      border-radius: 10rpx;
    }
    .active-header-bar {
      background-color: $uni-color-primary;
      color: #fff;
    }
    .company-warp {
      margin: 20rpx 0;
      padding: 20rpx;
      background-color: #fff;
      border-radius: 10rpx;
      .company {
        font-size: 34rpx;
        margin-bottom: 6rpx;
      }
      .main-code-wrap {
        justify-content: space-between;
        align-items: center;
        font-size: 30rpx;
        .record-btn {
          padding: 16rpx 24rpx;
          background-color: #ececec;
          border-radius: 20rpx;
          font-size: 28rpx;
        }
      }
    }
    
  }
  .upload-wrap {
    padding: 20rpx 0;
    background-color: rgb(235, 244, 255);
    .upload-content {
      align-items: center;
      width: 80%;
      margin: 10rpx auto;
      background-color: #fff;
      border-radius: 30rpx;
      padding-top: 10rpx;
      padding-bottom: 10rpx;
      .iconfont {
        width: 100rpx;
        font-size: 80rpx;
        text-align: right;
        margin-right: 10rpx;
      }
      .photo {
        font-size: 32rpx;
      }
      .tip {
        font-size: 24rpx;
        color: #999;
      }
    }
  }
  .footer {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx 24rpx 30rpx;
    border-top: 1px solid #ececec;
    background: #fff;
    font-size: 32rpx;
    .footer-btn {
      background: $uni-color-primary;
      color: #fff;
      padding: 20rpx 40rpx;
      border-radius: 6rpx;
    }
    .select-wrap {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      width: 120rpx;
      .iconfont {
        font-size: 42rpx;
      }
    }
  }
</style>
