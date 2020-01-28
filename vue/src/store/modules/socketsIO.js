import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  SOCKET_MESSAGECHANNEL,
} from '../mutations.type';

const state = () => ({
  isConnected: false,
  socketMessage: '',
});

const mutations = {
  [SOCKET_CONNECT]: (state) => {
    state.isConnected = true;
  },

  [SOCKET_DISCONNECT]: (state) => {
    state.isConnected = false;
  },

  [SOCKET_MESSAGECHANNEL]: (state, payload) => {
    state.socketMessage = payload;
  },
};

const getters = {
  isConnected: state => state.isConnected,
  getSocketMessage: state => state.socketMessage,
};

export default {
  namespaced: true,
  mutations,
  state,
  getters,
};
