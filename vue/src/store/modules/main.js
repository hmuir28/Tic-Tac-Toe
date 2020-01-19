import { PlayersService } from "@/common/api.service";

import { SEND_USER_INFO } from '../actions.type';
import { SET_USER_INFO } from '../mutations.type';

const actions = {
  async [SEND_USER_INFO]({ commit }, playerInfo) {
    try {
      const response = await PlayersService.create(playerInfo);
      commit(SET_USER_INFO, response.data);
    } catch (error) {
      throw new Error(error);
    }
  },
};

const mutations = {
  [SET_USER_INFO]: (state, payload) => {
    state.players = payload;
  },
};

const state = () => ({
  players: [],
});

const getters = {
  getPlayers: state => state.players,
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
