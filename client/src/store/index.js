import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  articles: [],
  newArticle: {
    title: '',
    content: ''
  },
  emptyArticleState: {
    title: '',
    content: ''
  },
  login: {
    username: '',
    password: ''
  },
  register: {
    name: '',
    username: '',
    password: ''
  },
  loggedUser: {
    _id: '',
    name: '',
    role: '',
    username: '',
  },
  emptyLoggedUser: {
    _id: '',
    name: '',
    role: '',
    username: '',
  },
  isLogin: undefined,
}

const mutations = {
  LOGIN(state, payload) {
    state.login.username = payload.username;
    state.login.password = payload.password;
  },
  REGISTER(state, payload) {
    state.register = payload;
  }
}

const actions = {
  login({commit}, data, status) {
    axios.post(`http://localhost:3000/api/user/signin/`, {
      username: data.username,
      password: data.password
    }).then(res => {
      commit('LOGIN', res.data, true)
      console.log('LOGIN', res.data)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('_id', res.data.user._id);
      localStorage.setItem('name', res.data.user.name);
      localStorage.setItem('username', res.data.user.username);
      localStorage.setItem('role', res.data.user.role);
      window.location.href = '#/main';
    })
  },
  register({commit}, data) {
    axios.post(`http://localhost:3000/api/user/signup/`, {
      name: data.name,
      username: data.username,
      password: data.password
    }).then(res => {
      window.location.href = '#/login';
      commit('REGISTER', res.data.user);
      console.log('REGISTER DONE', res.data.user);
    })
  }
}

const getters = {
  loginData(state) {
    return state.login;
  },
  registerData(state) {
    return state.register;
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})