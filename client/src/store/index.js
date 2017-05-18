import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  articles: [],
  newArticle: {
    title: '',
    content: '',
    category: '',
  },
  emptyArticleState: {
    title: '',
    content: '',
    category: ''
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
  },
  GET_ARTICLES(state, payload) {
    state.articles = payload
  },
  LOGOUT(state, payload, status) {
    state.loggedUser = payload;
    state.isLogin = status;
  },
  EMPTY_ARTICLES(state) {
    state.articles = [];
  },
  DELETE_ARTICLE(state, article) {
    let articleIdx = state.articles.findIndex(val => val._id === article);
    state.articles.splice(articleIdx, 1);
  },
  ADD_ARTICLE(state, article) {
    state.newArticle = article;
  },
  GET_ONE(state, article) {
    state.newArticle = article;
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
  },
  getArticles({commit}) {
    axios.get('http://localhost:3000/api/article/', {headers: {token: localStorage.getItem('token')}}).then(res => {
      console.log('GET_ARTICLES', res.data.articles);
      commit('GET_ARTICLES', res.data.articles);
    })
  },
  logout({commit}, data, status) {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    commit('LOGOUT', data, false);
    commit('EMPTY_ARTICLES')
    console.log('sukses logout');
  },
  deleteArticle({commit}, articleId) {
    axios.delete(`http://localhost:3000/api/article/delete/${articleId}`, {headers: {token: localStorage.getItem('token')}})
    .then(res => {
      commit('DELETE_ARTICLE', articleId);
    })
  },
  addArticle({commit}, data) {
    axios.post(`http://localhost:3000/api/article/create`, {
      title: data.title,
      content: data.content,
      category: data.category
    }, {headers: {token: localStorage.getItem('token')}}).then(res => {
      console.log('ADD_ARTICLE', res.data.article);
      commit('ADD_ARTICLE', res.data.article);
    })
  },
  editArticle({commit}, article) {
    axios.put(`http://localhost:3000/api/article/edit/${article._id}`, {
      title: article.title,
      content: article.content,
      category: article.category
    }, {headers: {token: localStorage.getItem('token')}}).then(res => {
      console.log(res.data.article);
    })
  },
  getOneArticle({commit}, article) {
    commit('GET_ONE', article);
  }
}

const getters = {
  loginData(state) {
    return state.login;
  },
  registerData(state) {
    return state.register;
  },
  articles(state) {
    return state.articles;
  },
  emptyLoggedUserData(state) {
    return state.emptyLoggedUser;
  },
  newArticle(state) {
    return state.newArticle;
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})