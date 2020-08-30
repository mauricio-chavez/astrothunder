import io from 'socket.io-client';
import store from '@/store';

export function initializeSockets() {
  const socket = io('http://localhost:3000/')
  store.state.socket = socket

  socket.on('chat message', message => {
    store.commit('ADD_MESSAGE', { text: message, from: 'server' });
  });
}

// socket.on('connect', function() {});
// socket.on('disconnect', function() {});
