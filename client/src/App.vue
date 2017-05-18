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
        <!-- <a href="#/" @click="onLogout(emptyLoggedUserData)" v-if="isLogin" class="header item">
          Logout
        </a> -->
      </div>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
