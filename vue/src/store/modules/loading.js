import { SET_LOADING } from '../mutations.type';

const state = {
  loading: false,
};

const getters = {
  getLoading: state => state.loading,
};

const mutations = {
  [SET_LOADING]: (state, loading) => {
    state.loading = loading;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
