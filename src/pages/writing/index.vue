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
      <span class="fl">文章</span>
      <textarea
        class="fl"
        cols="30"
        rows="10"
        v-model="formData.article"
      ></textarea>
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
    <button class="save" @click="onSave">保存</button>
  </div>
</template>

<script>
export default {
  name: 'writing',
  data () {
    return {
      formData: {
        title: '',
        article: '',
        classify: ''
      }
    }
  },
  methods: {
    setArtical () {
      let params = {
        title: this.formData.title,
        article: this.formData.article,
        classify: this.formData.classify
      }
      this.$http.post('/api/setValue', JSON.stringify(params)).then((res) => {
        console.log('res=', res)
      })
    },
    onSave () {
      this.setArtical()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.writing-wraper {
  width: 400px;
  margin: 0 auto;
  text-align: left;
  .item {
    span:first-child {
      margin-right: 5px;
    }
    margin-bottom: 16px;
  }
  .save{
    margin-top: 20px;
    width: 90px;
    height:36px;
    background-color: #00ffff;
    color: #fff;
    cursor: pointer;
  }
}
</style>
