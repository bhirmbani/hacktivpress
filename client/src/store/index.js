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
  
}


export default new Vuex.Store({
  state,
  // mutations,
  // actions,
  // getters
})