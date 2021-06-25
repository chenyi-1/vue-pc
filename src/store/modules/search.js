import { reqSearchGoodsList } from "../../api/search";

const state = {
  goodsList: [],
  trademarkList: [],
  attrsList: [],
  total: 0,
};

const getters = {};

const actions = {
  async searchGoodsList({ commit }, options) {
    try {
      const res = await reqSearchGoodsList(options);
      commit("SEARCH_GOODS_LIST", res);
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  SEARCH_GOODS_LIST(state, res) {
    state.total = res.total;
    state.goodsList = res.goodsList;
    state.trademarkList = res.trademarkList;
    state.attrsList = res.attrsList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
