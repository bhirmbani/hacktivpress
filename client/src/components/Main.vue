<template>
  <div id="article-list" class="ui items">
    <div v-for="(article, index) in articles" class="item">
      <div class="content">
        <a class="header ui large">{{article.title}}</a>
        <a href="" class="label ui tiny">category: {{article.category}}</a>
        <a href="" class="label ui tiny">author</a>
        <div class="description">
          <p>{{article.content}}</p>
        </div>
        <div class="extra">
          <a class="label ui tiny red" href=""><i class="trash icon"></i>Delete</a>
          <a class="label ui tiny green" href=""><i class="edit icon"></i>Edit</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'Main',

  data () {
    return {

    };
  },
  methods: {
    ...mapActions([
      'getArticles',
  ])
  },
  computed: {
    ...mapGetters([
      'articles'
  ])
  },
  mounted() {
    this.getArticles();
  }
};
</script>

<style lang="css" scoped>
#article-list {
  width: 50%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 50px;
}
</style>