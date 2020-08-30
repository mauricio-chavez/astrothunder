import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: null,
    messages: []
  },
  mutations: {
    ADD_MESSAGE(state, message) {
      state.messages.push(message)
    }
  },
  actions: {
    sendMessage({ state, commit }, message) {
      state.socket.emit('chat message', message)
      commit('ADD_MESSAGE', { text: message, from: 'client' })
    }
  },
});
