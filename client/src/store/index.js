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
  }
}

const getters = {
  loginData(state) {
    return state.login;
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})