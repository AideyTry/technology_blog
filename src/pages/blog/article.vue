<template>
  <div>
    <div v-for="(item, index) in article" :key="index">
      <h2>{{item.title}}</h2>
      <div>{{item.article}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-name',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.tetArticle()
  },
  methods: {
    tetArticle () {
      this.$http.get('/api/getValue').then((res) => {
        console.log('res=', res)
        this.article = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
