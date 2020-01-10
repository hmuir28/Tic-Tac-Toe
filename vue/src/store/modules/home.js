import { SUBMIT_BOARD_SIZE } from '../actions';
import { SET_BOARD_SIZE } from '../mutations';

const actions = {
  [SUBMIT_BOARD_SIZE]: ({ commit }, size) => {
    commit(SET_BOARD_SIZE, +size);
  },
};

const mutations = {
  [SET_BOARD_SIZE]: (state, payload) => {
    state.boardSize = payload;
  },
};

const state = () => ({
  boardSize: 0,
});

const getters = {
  getBoardSize: state => state.boardSize,
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
