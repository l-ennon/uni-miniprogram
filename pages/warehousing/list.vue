<template>
  <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback">
    <!-- <button type="primary" @click="takePhoto">拍照</button> -->
    <list-item v-for="(item, index) in dataList" :item="item" :key="index" @toDetail="toDetail"></list-item>
  </mescroll-body>
</template>

<script>
  import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
  import ListItem from './components/list-item.vue'
	export default {
    components: {ListItem},
    mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				dataList: [{
          busDesc: '天津港国际贸易有限公司《申请借款》合同编号：CYD-2021-1682-1J',
          objName: '车辆借款申请',
          propUserName: '张三',
          approUserName: '审核人李四',
          flowNodeName: '仓库|监管公司入库核验',
          propTime: '2021-08-04 17:06:36',
          flowFlag: '1',
          busId: '1111',
          id: '22222',
          currNodeBsConfig: '3'
        }]
			}
		},
		onLoad() {
      // this.getList()
		},
		methods: {
			toDetail (item) {
				uni.navigateTo({
				  url: `/pages/warehousing/detail?insId=${item.busId}&flowListId=${item.id}&paramExp=${item.currNodeBsConfig}&flowFlag=${item.flowFlag}`
				})
			},
      
      /*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
      upCallback(page) {
        // 联网加载数据
        this.$http.get('/uniapp/process/queryTodoList', {
          pageNum: page.num,
          pageSize: page.size
        }).then(res => {
          let totalSize = res.data.total
          //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
          this.mescroll.endBySize(res.data.records.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
          	if(page.num == 1) this.dataList = [] //如果是第一页需手动制空列表
          	this.dataList = this.dataList.concat(res.data.records) //追加新数据
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
</style>
