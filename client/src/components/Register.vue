<template>
  <div id="register-form" class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui grey image header">
      <div class="content">
        Register new account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="bold icon"></i>
            <input type="text" v-model="registerData.name" name="name" placeholder="Name">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" v-model="registerData.username" name="username" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" v-model="registerData.password" name="password" placeholder="Password">
          </div>
        </div>
        <div @click="onRegister(registerData)" class="ui fluid large grey submit button">Register</div>
      </div>

      <div class="ui error message"></div>

    </form>
    <div class="ui message">
      Atau kembali ke login? <a href="#/login">Login Dulu</a>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'Register',

  data () {
    return {

    };
  },
  methods: {
    ...mapActions([
    'register'
  ]),
    onRegister(data) {
    this.register(data);
  },
  },
  computed: {
    ...mapGetters([
    'registerData'
  ])
  },
};
</script>

<style lang="css" scoped>
#register-form {
    width: 50%;
    margin: 0 auto;
  }
</style>