<script>
  import BASE_URL from '@/utils/baseURL.js'
	export default {
		onLaunch: function() {
      // uni.showModal({
      //   title: '提示',
      //   content: '确定将这张照片删除？',
      //   success: function (res) {
      //     if (res.confirm) {
      //       uni.requestSubscribeMessage({
      //       	tmplIds: ['kuAjyAXrI9qw_h5SY7iZoiVC8tAMZK_riLR2oEhwohA'],//数组（后台获取的）
      //       	success:(res)=>{
                
      //       		console.log(res)//值包括'accept':同意、'reject':拒绝、'ban':后台禁用
      //       	},
      //       	fail:(err)=>{
      //       		console.log(err)
      //       	}
      //       })
      //     } else if (res.cancel) {
      //       console.log('用户点击取消');
      //     }
      //   }.bind(this)
      // })
      // uni.requestSubscribeMessage({
      //   tmplIds: ['kuAjyAXrI9qw_h5SY7iZoiVC8tAMZK_riLR2oEhwohA'],
      //   success (res) {
      //     uni.showToast({
      //       title: '哈哈哈哈'
      //     })
      //   }
      // })
			// console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			// console.log('App Launch')
      // uni.login({
      //   success: res => {
      //     if (res.code) {
      //       //发起网络请求
      //       this.$http.post(`/uniapp/wxlogin`,{
      //         code: res.code
      //       }).then(res => {
      //         console.log(res)
      //       })
      //     } else {
      //       console.log('登录失败！' + res.errMsg)
      //     }
      //   }
      // })
      uni.request({
        url: `${BASE_URL}/uniapp/login`,
        method: 'post',
        data: {
          username: 'shanwenbo',
          password: 123456,
          captcha: '1234',
          deviceId: 'Aoy6l7TxJxfDehouJ1IRwCFRlI3gKq_48iQx9YyQWtJi',
          rememberMe: 1
        },
        header: {'content-type': 'application/x-www-form-urlencoded'},
        success: (res) => {
          /*处理cookies*/
          let cookieStr = ''
          let cookieArr = res.header['Set-Cookie'].split(',')
          cookieArr.forEach(item=>{
            if(item.match('rememberMe=deleteMe')) return
            if(item.match('rememberMe') || item.match('BBA-SSO-JSESSIONID')){
              cookieStr += item
              cookieStr += ';'
            }
          })
          uni.setStorageSync('Cookie', cookieStr)
        }
      })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import url("/static/iconfont/iconfont.css");
  @import url("/common/scss/common.scss");
  page {
    position: relative;
    background-color: #F8F8F8;
    color: #333333;
    height: 100%;
  }
  /* body {
    font: 12px/1.5 "Avenir Next", Avenir, "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  } */
</style>
