<template>
  <div class="httpTest full">
    <div class="full  videoList flex-row">
      <div class="leftBox f-i-2">
        <div class="full">
          <div class="searchBox">
            <input v-model.trim="searchVal"
                   placeholder="请输入区级组织编码4401-4420"
                   class="full"
                   type="text"
                   @keyup.enter="searchList">
          </div>
          <div v-if="canteenList.length>0"
               class="list">
            <el-collapse v-model="activeName"
                         accordion
                         @change="handleChange">
              <el-collapse-item v-for="item in canteenList"
                                :key="item.canteenId+item.canteenName"
                                :title="item.canteenName"
                                :name="item.canteenId">
                <template v-if="childrenList.length>0">
                  <div class="childrenBox"
                       :class="childrenList.length >6 ? 'Hauto' : ''">
                    <div v-for="(item2,index) in childrenList"
                         :key="item2.canteenId+index"
                         :class="{active: activeIndex === index}"
                         class="childrenItem"
                         @click.stop="handleChildrenClick(item2,index)">
                      {{ item2.installPosition }}
                    </div>
                  </div>
                </template>
                <div v-else
                     class="childrenItem">
                  暂无监控点位~
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div v-else
               class="text-center">
            暂无数据~
          </div>
        </div>
      </div>
      <div class="video f-i-3">
        <div v-if="videoMsg"
             class="full msg text-center flex-xy-center">
          <h2>{{ videoMsg }}</h2>
        </div>
        <video v-else
               id="videoElement"
               class="full"
               muted
               controls></video>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import flvjs from 'flv.js'
const mockData = {
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDUyOTY5MTcsInVzZXJuYW1lIjoiZ2RqZyJ9.LuqWC4HOuI6id7ggQ-kmlRb12DKN4SGp4HKq9jvBA38",
  "url": "http://yy.gxivs.cn:8048",
  "platNo": "GDWISDOM",
  "headers": {
    "headers": {
      "__u__": "gdjg",
      "__s__": "039a9042cd1b4112b390d674541878bf",
      "Content-type": "application/json",
      "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDUyOTY5MTcsInVzZXJuYW1lIjoiZ2RqZyJ9.LuqWC4HOuI6id7ggQ-kmlRb12DKN4SGp4HKq9jvBA38"
    }
  }
}
export default {
  name: 'httpTest',
  data () {
    return {
      videoApiConfig: {},
      canteenList: [],
      childrenList: [],
      districtLevelOrg: [],
      searchVal: '',
      activeName: '',
      activeIndex: -1,
      videoMsg: '',
      flvPlayerState: '',
      flvPlayer: null,
      playPromise: ''
    }
  },

  mounted () {
    this.getToken()
  },
  beforeUnmount () {
    this.flvPlayerDestroy()
  },
  methods: {
    async getToken () {
      const platNo = 'GDWISDOM'
      const __u__ = 'gdjg'
      const __s__ = '6cb02d133bea4b02aa2c9c788d673dcf' //  生产
      // const __s__ = '039a9042cd1b4112b390d674541878bf' // 测试
      const formData = new FormData()
      formData.append('platNo', platNo)
      const headers = {
        headers: {
          __u__,
          __s__,
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }
      // const url = 'http://yy.gxivs.cn:8048' // 测试
      const url = '/video'
      // const url = 'http://vgd.gxfsms.com:8666/' //生产
      const videoConfig = await axios.post(url + '/api/open/token/foreignGet', formData, headers).then(res => res.data.code === 200 ? { token: res.data.data, url, platNo, headers } : false)
      console.log('@@@', videoConfig)
      console.log(videoConfig.token)
      if (videoConfig)
        this.setVideoConfig(videoConfig)
      // this.setVideoConfig(mockData)
    },
    videoClose () {
      this.clearVideoState()
    },
    clearVideoState () {
      this.canteenList = []
      this.districtLevelOrg = []
      this.activeName = ''
      this.activeIndex = -1
      this.flvPlayerDestroy()
    },
    setVideoConfig (data) {
      const { url, token, platNo, headers } = data
      headers.headers['Content-type'] = 'application/json'
      headers.headers['Authorization'] = token
      this.videoApiConfig = {
        url,
        token,
        platNo,
        headers
      }

      this.getAllList()
    },
    getAllList () {
      this.clearVideoState()
      this.getOrg()
      this.getCanteenList()
    },
    getVideoTree () {
      const url = `${this.videoApiConfig.url}/api/foreign/pages/videoTree`
      const params = {
        params: {
          platNo: this.videoApiConfig.platNo,
          token: this.videoApiConfig.token
        }
      }
      axios.get(url, params).then((res) => {
        console.log('🚀🚀 ~ file: Index.vue ~ line 302 ~ axios.post ~ res', res.data)
        let newwin = window.open('', '', '')
        newwin.opener = null
        newwin.document.write(res.data)
        newwin.document.close()
      })
    },

    searchList () {
      const value = Number(this.searchVal)
      if (value && typeof value === 'number') {
        if (this.districtLevelOrg.find(item => item.orgCode === value + '')) {
          this.getCanteenList(value + '')
        } else {
          alert('请输入区级组织id~')
        }
        this.searchVal = ''
      } else {
        alert('请输入区级组织id~')
        this.searchVal = ''
      }
    },
    initformData (arraykey, arrayVal) {
      const params = new FormData()
      arraykey.forEach((item, index) => {
        params.append(item, arrayVal[index])
      })
      return params
    },
    getOrg () {
      const url = `${this.videoApiConfig.url}/api/foreign/base/org/selective`
      const params = new FormData()
      params.append('platNo', this.videoApiConfig.platNo)
      axios.post(url, params, this.videoApiConfig.headers).then((res) => {
        console.log('🚀🚀 ~ file: Index.vue ~ line 302 ~ axios.post ~ res', res)
        const { code, msg, data } = res.data
        if (code === 200) {
          const list = data.filter(item => item.orgCode.length <= 6)
          this.districtLevelOrg = list
          // console.log('🚀🚀 ~ file: Index.vue ~ line 352 ~ axios.post ~ resData', list)
        } else {
          console.error(msg)
        }
      })
    },

    // 食堂列表
    getCanteenList (orgCode = '', rows = 100) {
      const url = `${this.videoApiConfig.url}/api/foreign/base/canteen/selective`
      const array1 = ['platNo', 'page', 'rows', 'orgCode']
      const array2 = [this.videoApiConfig.platNo, 1, rows, orgCode]
      const params = this.initformData(array1, array2)
      this.canteenList = []
      axios.post(url, params, this.videoApiConfig.headers).then((res) => {
        // console.log('🚀🚀 ~ file: Index.vue ~ line 333 ~ axios.post ~ res', res)
        const { code, msg, list } = res.data
        if (code === 200) {
          this.canteenList = list
        } else {
          console.error(msg)
        }
      })
    },
    handleChange (id) {
      if (id) {
        this.activeIndex = -1
        this.videoMsg = ''
        this.getVideoLisit(id, 2)
      }
      this.flvPlayerDestroy()
    },
    // 摄像机列表
    getVideoLisit (primaryKey, listType = 2) {
      const url = `${this.videoApiConfig.url}/api/foreign/ai/camera/selective`
      const array1 = ['primaryKey', 'type',]
      const array2 = [primaryKey, listType]
      const params = this.initformData(array1, array2)
      axios.post(url, params, this.videoApiConfig.headers).then((res) => {
        const { code, msg, data } = res.data
        if (code === 200) {
          // console.log('监控点位', data)
          this.childrenList = []
          this.childrenList = data
        } else {
          console.error(msg)
        }
      })
    },
    handleChildrenClick (item, index) {
      const { flvUrl, liveType, cameraOnlineState, cameraNo, supplier } = item
      this.activeIndex = index
      if (this.flvPlayer) {
        this.flvPlayerDestroy()
      }
      if (cameraOnlineState && cameraOnlineState === '0') {
        this.videoMsg = '设备离线中~'
        return
      }
      if (liveType === 1) {
        console.log('type1 video-url:', flvUrl)
        this.createVideo(flvUrl)
      } else {
        this.getLiveUrl(cameraNo, supplier)
      }
    },
    getLiveUrl (cameraNo, supplier) {
      if (!cameraNo || !supplier) {
        this.videoMsg = '摄像机编号或摄像机编号为空~'
        return
      }
      const url = `${this.videoApiConfig.url}/api/foreign/ai/camera/liveUrl`
      const params = this.initformData(['cameraNo', 'supplier'], [cameraNo, supplier])
      axios.post(url, params, this.videoApiConfig.headers).then((res) => {
        const { returnCode, returnMsg, data } = res.data
        if (returnCode === 1 && data) {
          this.createVideo(data)
        } else {
          console.error(returnMsg)
        }
      })
    },
    createVideo (flvUrl) {
      if (!flvUrl || flvUrl === '') {
        this.videoMsg = '视频资源地址为空~'
        return
      }
      if (flvjs.isSupported()) {
        this.videoMsg = ''
        this.flvPlayerDestroy()
        const videoElement = document.getElementById('videoElement')
        this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
          hasAudio: false,
          isLive: true,
          fluid: true,
          url: flvUrl,
          // url: 'http://img.ksbbs.com/asset/Mon_1704/15868902d399b87.flv'
        },
          {
            enableStashBuffer: false,
            fixAudioTimestampGap: false,
            isLive: true,
            autoCleanupSourceBuffer: true
          }
        )
        if (this.flvPlayer && flvUrl !== '') {
          this.flvPlayer.attachMediaElement(videoElement)
          try {
            this.flvPlayer.load()
            setTimeout(() => {
              if (this.flvPlayer?._mediaDataSource) {
                this.playPromise = this.flvPlayer.play()
                // console.log('222', this.flvPlayer)
              }
            }, 300)
            this.flvErrorListening(flvUrl)
          } catch (error) {
            console.error('catch错误', error)
          }
        }
      }
    },
    flvErrorListening (flvUrl) {
      this.flvPlayer.on('error', err => {
        console.error('flvPlayer错误:', err)
        console.log('flv路径:', flvUrl)
        this.flvPlayerState = 'error'
        this.flvPlayerDestroy()
        if (err === 'NetworkError') {
          this.videoMsg = '信号源失效~'
        } else if (err === 'MediaError') {
          this.videoMsg = '媒体错误、不支持的媒体类型~'
        } else {
          this.videoMsg = '未知错误~'
        }
      })
    },
    closeFlvFlow () {
      this.flvPlayer.unload()
      this.flvPlayer.detachMediaElement()
      this.flvPlayer.destroy()
      this.flvPlayer = null
      this.playPromise = ''
    },
    flvPlayerDestroy () {
      console.log('销毁:', this.flvPlayer)
      console.log(this.playPromise)
      this.videoMsg = ''
      if (!this.flvPlayer) return
      if (this.flvPlayerState == 'error') {
        this.closeFlvFlow()
        this.flvPlayerState = ''
        return
      }
      if (this.playPromise) {
        this.playPromise.then(() => {
          if (this.flvPlayer?._mediaDataSource && this.flvPlayer._receivedCanPlay) {
            this.flvPlayer.pause()
          }
        }).catch((err) => {
          console.log('####', err)
        })
      }
      this.closeFlvFlow()
    },
  },

}
</script>

<style scoped lang="less">
.httpTest {
  .videoList {
    width: 100%;
    .leftBox {
      .searchBox {
        height: 50px;
      }
      .list {
        height: calc(100% - 50px);
        overflow: auto;
        background: #041629;
      }
      :deep(.el-collapse) {
        border: 0;
      }
      :deep(.el-collapse-item) {
        cursor: pointer;
        .icon {
          width: 20px;
          height: 20px;
        }
        .el-collapse-item__header {
          background-color: transparent !important;
          color: #fff;
          line-height: 0;
          height: 30px;
        }
        .el-collapse-item__content {
          padding: 0;
        }
        .el-collapse-item__wrap {
          background: #4682b4;
        }
        .is-active {
          background: #1e90ff !important;
        }
      }
      .Hauto {
        overflow: auto;
        height: 80px;
      }
      .childrenBox {
        .childrenItem {
          text-indent: 2em;
          color: #fff;
        }
        .active {
          color: coral;
        }
      }
    }
    .video {
      .msg {
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
      }
      #videoElement {
        object-fit: cover;
      }
    }
  }
}
</style>
