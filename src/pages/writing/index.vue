<template>
  <div class="writing-wraper">
    <h1>creation</h1>
    <div class="item clearfix">
      <span class="fl">标题</span>
      <input
        class="fl"
        type="text"
        v-model="formData.title"
      >
    </div>
    <div class="item clearfix">
      <span class="fl">简述</span>
      <textarea
        class="fl"
        rows="5"
        cols="100"
        v-model="formData.description"
      ></textarea>
    </div>
    <div class="item clearfix">
      <span class="fl">文章</span>
      <mavon-editor
        class="fl"
        v-model="formData.article"
        style="min-height: 600px"
        @imgAdd="imgAdd"
      ></mavon-editor>
    </div>
    <div class="item clearfix">
      <span class="fl">分类</span>
      <select
        class="fl"
        v-model="formData.classify"
      >
        <option value="js">js</option>
        <option value="vue">vue</option>
        <option value="react">react</option>
        <option value="node">node</option>
        <option value="flutter">flutter</option>
      </select>
    </div>
    <button
      class="save"
      @click="onSave"
    >保存</button>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { setStore } from '@/utils/store'
export default {
  name: 'writing',
  components: {
    mavonEditor
  },
  data () {
    return {
      formData: {
        title: '',
        description: '',
        article: '',
        classify: ''
      }
    }
  },
  methods: {
    setArtical () {
      let params = {
        title: this.formData.title,
        description: this.formData.description,
        article: this.formData.article,
        classify: this.formData.classify
      }
      setStore('headersContent', 'application/json;charset=UTF-8')
      this.$http.post('/api/setValue', JSON.stringify(params)).then((res) => {
        console.log('res=', res)
      })
    },
    imgAdd (pos, $file) {
      console.log('pos=', pos)
      console.log('$file=', $file)
      let formData = new FormData()
      formData.append('file', $file)
      setStore('headersContent', 'multipart/form-data')
      this.$http.post('/api/upload', formData).then((res) => {
        console.log('res=', res)
      })
    },
    onSave () {
      this.setArtical()
      this.formData.title = ''
      this.formData.article = ''
      this.formData.classify = ''
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.writing-wraper {
  width: 800px;
  margin: 0 auto;
  text-align: left;
  .item {
    span:first-child {
      margin-right: 5px;
    }
    margin-bottom: 16px;
  }
  .save {
    margin-top: 20px;
    width: 90px;
    height: 36px;
    background-color: #00ffff;
    color: #fff;
    cursor: pointer;
  }
}
</style>
