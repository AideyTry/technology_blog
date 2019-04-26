<template>
  <div class="article-wraper clearfix">
    <div class="picture fl">
      picture
    </div>
    <ul class="content fl">
      <li
        v-for="(item, index) in article"
        :key="index"
      >
        <h2 @click="goArticleDetail(item.id)">{{item.title}}</h2>
        <div>{{item.description}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mavonEditor } from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// import { setStore } from '@/utils/store'
export default {
  name: 'article-name',
  // components: {
  //   mavonEditor
  // },
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
      // setStore('headersContent', 'application/json;charset=UTF-8')
      this.$http.get('/api/getValue').then((res) => {
        console.log('res=', res)
        this.article = res.data
      })
    },
    goArticleDetail (id) {
      this.$router.push({ path: `/article/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.article-wraper {
  .picture {
    width: 300px;
  }
  .content {
    h2 {
      cursor: pointer;
    }
  }
}
</style>
