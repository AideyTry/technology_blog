<template>
  <div>
    <div
      v-for="(item, index) in article"
      :key="index"
    >
      <h2>{{item.title}}</h2>
      <!-- <div>{{item.article}}</div> -->
      <mavon-editor v-model="item.article" :defaultOpen="'preview'" :editable="false" :toolbarsFlag="false" :subfield="false"></mavon-editor>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'article-name',
  components: {
    mavonEditor
  },
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
