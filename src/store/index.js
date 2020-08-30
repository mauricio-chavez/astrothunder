import Vue from 'vue';
import Vuex from 'vuex';
import io from 'socket.io-client';
import { ToastProgrammatic as Toast } from 'buefy';
import { generateRandomString } from '@/utils/randomString';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: null,
    messages: [],
    connected: false,
    loading: false,
  },
  mutations: {
    CONNECT(state) {
      state.connected = true;
    },
    DISCONNECT(state) {
      state.socket = null;
      state.connected = false;
    },
    ADD_MESSAGE(state, { text, from }) {
      const id = generateRandomString();
      state.messages.push({ id, text, from });
    },
    SET_SOCKET(state, socket) {
      state.socket = socket;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    initializeSocket({ commit }) {
      commit('SET_LOADING', true);
      const socket = io(process.env.VUE_APP_SERVER_URL);
      commit('SET_SOCKET', socket);

      socket.on('chat message', message => {
        commit('ADD_MESSAGE', { text: message, from: 'server' });
      });

      socket.on('connect', () => {
        commit('CONNECT');
        commit('SET_LOADING', false);
        Toast.open('Conectado con el servidor');
      });

      socket.on('disconnect', () => {
        commit('DISCONNECT');
        Toast.open('Se ha desconectado del servidor');
      });
    },
    sendMessage({ state, commit }, message) {
      if (state.connected && state.socket) {
        state.socket.emit('chat message', message);
        commit('ADD_MESSAGE', { text: message, from: 'client' });
      } else if (state.connected && !state.socket) {
        commit('DISCONNECT');
      }
    },
  },
});
