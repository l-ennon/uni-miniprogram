<template>
  <div class="image-wrapper">
    <div class="input-wrapper" @click="uploadFile">
      <img src="../../static/image/upload.png" />
    </div>
    <file-view :attachmentList="imgList" @deleteImg="deleteImg" :showDelete="true"></file-view>
  </div>
</template>
<script>
import BASE_URL from '@/utils/baseURL.js'
import fileView from '../file-view/file-view.vue'
export default {
  name: 'upload-img',

  components: {fileView},

  props: {
    fileMaxSize: {
      type: Number,
      required: false,
      default: 200000
    },
    fileCount: {
      type: Number,
      required: false,
      default: 20
    },
    fileType: {
      type: String,
      required: false,
      default: 'image/png, image/jpeg, image/gif, image/jpg, .pdf, .doc, .docx, .xlsx, .xls'
    },
    action: {
      type: String,
      required: true,
      default: ''
    },
    fileData: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    imgList: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    },
    deleteUrl: {
      type: String,
      required: false,
      default: ''
    },
  },
  data () {
    return {
      showError: false,
      errorMsg: '',
      picView: `${BASE_URL}/app/picView/`,
      canEdit: false
    }
  },
  methods: {
    preSelect () {
      this.$refs.inputRef.click()
    },
    uploadFile () {
      uni.chooseImage({
      	// sourceType: ['camera'],
      	success: (res) => {
          let tempFilePaths = res.tempFilePaths
          uni.uploadFile({
            url: `${BASE_URL}${this.action}`,
            filePath: tempFilePaths[0],
            name: 'file',
            formData: this.fileData,
            success: (uploadFileRes) => {
              // header:{"Content-Type": "multipart/form-data"}
              this.imgList.push(JSON.parse(uploadFileRes.data).data)
              console.log(this.imgList)
            }
          })
      	}
      })
    },
    deleteImg (fileId) {
      if (this.deleteUrl) {
        this.$http.post(deleteUrl, {
          fileId
        }).then(res => {
          if (res.data.code === '200') {
            this.imgList.forEach((element, index) => {
              if (fileId === element.fileId) {
                this.imgList.splice(index, 1)
              }
            })
          }
        })
      } else {
        this.imgList.forEach((element, index) => {
          if (fileId === element.fileId) {
            this.imgList.splice(index, 1)
          }
        })
        this.$refs.inputRef.value = ''
      }
    },
    onSuccess (fileList) {
      this.$emit('on-success', fileList)
    },
    saveFileName (item) {
      this.canEdit = false
      this.$http.post(`${this.creditURL}/app/bbafile/Attachment/saveAttachmentName`, {
        id: item.fileId,
        fileName: item.fileName
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.image-wrapper {
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
  .input-wrapper {
    position: relative;
    display: inline-block;
    width: 140rpx;
    height: 140rpx;
    line-height: 140rpx;
    margin-right: 20rpx;
    text-align: center;
    border-radius: 6px;
    background: #fbfdff;
    margin-bottom: 20rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item {
    position: relative;
    margin-bottom: 20rpx;
    margin-right: 20rpx;
    img {
      width: 120rpx;
      height: 120rpx;
      border: 1px solid #c0ccda;
      // border-radius: 6px;
    }
    .delete {
      position: absolute;
      right: -10rpx;
      top: -10rpx;
      font-size: 18rpx;
      width: 22rpx;
      height: 22rpx;
      border-radius: 50%;
      background: #ececec;
      text-align: center;
      line-height: 20rpx;
      z-index: 111;
    }
    .item-info {
      background: #f4f4f4;
      width: 120rpx;
      font-size: 24rpx;
      .title {
        width: 120rpx;
        text-align: center;
        height: 60rpx;
        line-height: 60rpx;
        overflow: hidden;
        padding: 0 1px;
      }
      .btn-group {
        border-top: 1px solid #e8e8e8;
        height: 60rpx;
        line-height: 60rpx;
        div {
          flex: 1;
          text-align: center;
          cursor: pointer;
        }
        :first-child {
          border-right: 1px solid #e8e8e8;
        }
      }
    }
  }
}
</style>