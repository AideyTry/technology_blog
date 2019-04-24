<template>
  <div>
    <h1>creation</h1>
    <div>
      <span>文章</span>
      <input
        type="text"
        v-model="formData.article"
      >
      <span>分类</span>
      <select v-model="formData.classify">
        <option value="js">js</option>
        <option value="vue">vue</option>
        <option value="react">react</option>
        <option value="node">node</option>
        <option value="flutter">flutter</option>
      </select>
    </div>
    <button @click="onSave">保存</button>
  </div>
</template>

<script>
export default {
  name: 'writing',
  data () {
    return {
      formData: {
        article: '',
        classify: ''
      }
    }
  },
  methods: {
    setArtical () {
      let params = {
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
</style>
