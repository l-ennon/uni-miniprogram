<template>
<view class="file-info">
  <view class="car-row wrapper" v-if="imgList.length > 0">
    <view class="img-wrapper car-main-center" v-for="(img, initialIndex) in imgList" :key="initialIndex">
      <img
        :src="img"
        :key="initialIndex"
        @click="previewImg(initialIndex)"/>
        <p class="file-name car-bg-blue car-t-white">{{imgName[initialIndex]}}</p>
        <view class="delete-icon" v-if="showDelete" @click="deleteImg(img)">
          <view class="icon iconfont">&#xeb91;</view>
        </view>
    </view>
  </view>
  <view v-if="fileList.length > 0">
    <a
      class="file-wrapper"
      v-for="(file, index) in fileList"
      :key="index"
      :href="file.url">
      <img src="../../static/image/icon-pdf.png" alt="">
      <p class="file-name car-bg-blue car-t-white">{{file.fileName}}</p>
    </a>
  </view>
  <view class="file" v-if="wordList.length > 0">
    <a
      class="file-wrapper"
      v-for="(file, index) in wordList"
      :href="file.url"
      download
      :key="index">
      <img :src="file.fileExt === 'word' ? '../../static/image/icon-docx.png' : '../../static/image/icon-other.png'" alt="">
      <p class="file-name car-bg-blue car-t-white">{{file.fileName}}</p>
    </a>
  </view>
</view>
</template>
<script>
import BASE_URL from '@/utils/baseURL.js'
export default {
  name: 'info-img',
  props: {
    attachmentList: {
      type: Array,
      default: function () {
        return []
      }
    },
    showDelete: {
      type: Boolean,
      default: false
    },
    contractName: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      imgSrc: '',
      URL: `${BASE_URL}/app/picView/`,
      initialIndex: 0,
      isiOS: false
    }
  },

  computed: {
    fileList () {
      let fileArr = []
      if (this.attachmentList.length > 0) {
        this.attachmentList.forEach(element => {
          if (element.fileExt.toUpperCase() === 'PDF') {
            fileArr.push({
              url: `${BASE_URL}/app/readRes/${element.fileId ? element.fileId : element.id}`,
              fileName: this.contractName ? this.contractName : element.fileName,
              fileId: element.fileId
            })
          }
        })
      }
      return fileArr
    },
    wordList () {
      let wordArr = []
      if (this.attachmentList.length > 0) {
        this.attachmentList.forEach(element => {
          if (element.fileExt.toUpperCase() === 'EXCEL' || element.fileExt.toUpperCase() === 'XLSX' || element.fileExt.toUpperCase() === 'DOC' || element.fileExt.toUpperCase() === 'DOCX' || element.fileExt.toUpperCase() === 'TXT') {
            wordArr.push({
              url: `${BASE_URL}/app/readRes/${element.fileId ? element.fileId : element.id}`,
              fileName: this.contractName ? this.contractName : element.fileName,
              fileExt: element.fileExt.toUpperCase() === 'EXCEL' || element.fileExt.toUpperCase() === 'XLSX' || element.fileExt.toUpperCase() === 'DOC' || element.fileExt.toUpperCase() === 'DOCX' ? 'word' : 'other'
            })
          }
        })
      }
      return wordArr
    },
    imgList () {
      let imgArr = []
      if (this.attachmentList.length > 0) {
        this.attachmentList.forEach(element => {
          if (element.fileExt.toUpperCase() !== 'PDF' && element.fileExt.toUpperCase() !== 'DOC' && element.fileExt.toUpperCase() !== 'DOCX' && element.fileExt.toUpperCase() !== 'EXCEL' && element.fileExt.toUpperCase() !== 'XLSX') {
            imgArr.push(`${this.URL}${element.fileId}`)
          }
        })
      }
      return imgArr
    },
    imgName () {
      let imgName = []
      if (this.attachmentList.length > 0) {
        this.attachmentList.forEach(element => {
          if (element.fileExt.toUpperCase() !== 'PDF' && element.fileExt.toUpperCase() !== 'DOC' && element.fileExt.toUpperCase() !== 'DOCX') {
            imgName.push(element.typeName ? element.typeName : element.fileName)
          }
        })
      }
      return imgName
    }
  },

  methods: {
    pdfViewer (fileId) {
      this.$router.push(`/pdf/pdfViewer/${fileId}`)
    },
    previewImg (index) {
      uni.previewImage({
        urls: this.imgList,
        current: index
      })
    },
    deleteImg (imgUrl) {
      let arr = imgUrl.split('/')
      let fileId = arr[arr.length - 1]
      this.$emit('deleteImg', fileId)
    }
  },

  // mounted () {
  //   var u = navigator.userAgent
  //   this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  // }
}
</script>
<style lang="scss" scoped>
.file-info {
  display: flex;
  flex-flow: row wrap;
}
.wrapper {
  flex-flow: row wrap;
}
.img-wrapper {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid #EEEEEE;
  border-radius: 6rpx;
  margin-bottom: 24rpx;
  margin-right: 20rpx;
  img {
    width: 120rpx;
    height: 120rpx;
  }
  p {
    width: 120rpx;
    height: 30rpx;
    line-height: 30rpx;
    text-align: center;
    overflow: hidden;
  }
  .delete-icon {
    position: absolute;
    right: -14rpx;
    top: -20rpx;
    font-size: 32rpx;
  }
}
.file {
  display: flex;
  flex-flow: row wrap;
}
.file-wrapper {
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid #EEEEEE;
  border-radius: 6rpx;
  margin-bottom: 14rpx;
  margin-right: 20rpx;
  text-align: center;
  display: block;
  img {
    width: 120rpx;
    height: 120rpx;
  }
  p {
    width: 120rpx;
    height: 30rpx;
    line-height: 30rpx;
    font-size: 20rpx;
    text-align: center;
    overflow: hidden;
  }
}
.file-name {
  font-size: 20rpx !important;
}
</style>
