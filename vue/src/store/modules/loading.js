import {
  FINISH_LOADING,
  START_LOADING,
} from '../mutations.type';

const state = {
  loading: 0,
};

const getters = {
  loading: state => state.loading,
};

const mutations = {
  [START_LOADING]: state => state.loading++,
  [FINISH_LOADING]: state => state.loading--,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
