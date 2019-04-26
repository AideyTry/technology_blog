<template>
  <div class="blog-wraper">
    <header class="header">
      <div class="info clearfix">
        <div class="fl"></div>
        <div class="fl">jason</div>
      </div>
      <div class="nav clearfix">
        <ul class="clearfix fl">
          <li
            class="fl"
            v-for="(item, index) in menuList"
            :key="index"
          ><span @click="toChild(item)">{{item.title}}</span></li>
        </ul>
        <div class="fr">
          <input type="text">
        </div>
      </div>
    </header>
    <section class="main clearfix">
      <div class="content fl">
        <router-view></router-view>
      </div>
      <div class="sidebar fr">
        <h2>分类</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      menuList: [
        { title: 'Home', name: 'blog' },
        { title: 'About', name: 'about' },
        { title: 'Projects', name: 'projects' },
        { title: 'Tools', name: 'tools' },
        { title: ' Github' },
        { title: 'Writing', name: 'writing' }
      ]
    }
  },
  methods: {
    toChild (item) {
      this.$router.push({ name: item.name })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.blog-wraper {
  padding: 0 60px;
  .header {
    box-shadow: 0 2px 8px #f0f1f2;
    .info {
      height: 80px;
      padding: 30px 0 50px 0;
    }
    .nav {
      font-size: 20px;
      padding: 0 0 30px 0;
      ul li {
        margin-right: 20px;
        span {
          cursor: pointer;
        }
      }
      ul li:last-child {
        margin-right: 0;
      }
    }
  }
  .main {
    margin-top: 20px;
    .content {
      width: 65%;
    }
    .sidebar {
      width: 25%;
      border-radius: 1em;
      border: 1px solid #d3d3d3;
      padding: 20px 10px;
      h2 {
        border-bottom: 1px solid #d3d3d3;
        text-align: left;
      }
    }
  }
  .footer {
  }
}
</style>
