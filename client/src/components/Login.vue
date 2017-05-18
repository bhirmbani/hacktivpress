<template>
<div id="login-form" class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui grey image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" v-model="loginData.username" name="username" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" v-model="loginData.password" name="password" placeholder="Password">
          </div>
        </div>
        <div @click="" class="ui fluid large grey submit button">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      Belum punya akun? <a href="#/register">Daftar Dulu</a>
      <div class="ui">
        <a @click="" href="#/">Atau kembali ke halaman utama</a>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>