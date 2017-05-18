<template>
  <div id="app">
  <div class="ui grey fixed inverted menu"> 
      <div class="ui container"> 
        <a href="#" class="header item">
        <i class="fa fa-bullhorn" aria-hidden="true"></i>
          Hacktivpress
        </a>
        <!-- <a v-if="isLogin">
          <router-link class="header item" :to="{name: 'AddTodo'}">Add New Todo</router-link>
        </a>
        <a v-if="isLogin" class="header item">
          Welcome, {{loggedUserData.name}}
        </a> -->
        <a href="#/" @click="onLogout(emptyLoggedUserData)" v-if="" class="header item">
          Logout
        </a>
      </div>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'emptyLoggedUserData',
  ])
  },
  methods: {
    ...mapActions([
      'logout'
  ]),
    onLogout(data) {
      this.logout(data)
    }
  }
}
</script>

<style>

</style>
