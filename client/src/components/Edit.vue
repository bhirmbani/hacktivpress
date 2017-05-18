<template>
  <div id="edit-form">
    <div class="ui form">
      <h3>Edit Article Form</h3>
      <div class="field" id="form-tambah">
        <label for="title">Judul:</label>
        <input name="title" type="text" placeholder="Judul yang menarik" class="input" v-model="newArticle.title">
        <label for="category">Kategori:</label>
        <input name="category" type="text" placeholder="Kategori artikel ini" class="input" v-model="newArticle.category">
        <div class="field">
          <label class="input" for="content">Isi:</label>
          <textarea name="content" placeholder="Isi artikel kamu.." rows="2" style="margin-top: 0px; margin-bottom: 0px; height: 58px;" v-model="newArticle.content"></textarea>
        </div>
        
        <a href="#/main"><button @click="onEditArticle(newArticle)" class="ui primary button">Submit</button></a>
        
        <a href="#/main"><button class="ui red button">Back to main</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  name: 'Edit',

  data () {
    return {

    };
  },
  methods: {
    ...mapActions([
      'getOneArticle',
      'editArticle'
  ]),
    onEditArticle(article) {
      this.editArticle(article)
    },
  },
  computed: {
    ...mapGetters([
    'newArticle',
  ])
  }
};
</script>

<style lang="css" scoped>
  #edit-form {
      padding-top: 50px;
      width: 50%;
      margin: 0 auto;
    }
</style>