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
          <a @click="confirmDelete(article._id)" class="label ui tiny red"><i class="trash icon"></i>Delete</a>
          <a @click="onClickEdit(article)">
              <router-link :to="{name: 'Edit', params: {articleId: article._id}}" class="label ui tiny green"><i class="edit icon"></i>Edit</router-link>
          </a>
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
      'deleteArticle',
      'getOneArticle'
  ]),
    confirmDelete(articleId) {
      var confirmed = confirm('Are you sure want to delete this article?');
      if(confirmed)
        this.deleteArticle(articleId)
    },
    onClickEdit(article) {
      this.getOneArticle(article)
    }
  },
  computed: {
    ...mapGetters([
      'articles',
      'newArticle'
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