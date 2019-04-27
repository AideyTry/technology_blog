<template>
  <div>
    <h2>{{ articleDetail && articleDetail.title}}</h2>
    <p>{{ articleDetail && articleDetail.description }}</p>
    <mavon-editor
      v-model="articleDetail.article"
      :editable="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
      :autofocus="false"
      :subfield="false"
    ></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { getArticleDeatil } from '@/api/blog'
import { setHeaders } from '@/utils/store'
export default {
  name: 'article-detail-wraper',
  components: {
    mavonEditor
  },
  data () {
    return {
      articleDetail: {}
    }
  },
  created () {
    this.getArticleDetail(this.$route.params.id)
  },
  methods: {
    getArticleDetail (id) {
      setHeaders('application/json;charset=UTF-8')
      getArticleDeatil(id).then((res) => {
        this.articleDetail = res.data[0]
      })
    }
  }
}
</script>

<style>
</style>
