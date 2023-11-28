const actions  = {
  SET_LANG({commit}, lang) {
    commit("SET_LANG", lang);
  },
  SetItemInCard({commit}, item) {
    commit("SetItemInCard", item);
  },
  updateItemInCard({commit}, item) {
    commit("updateItemInCard", item);
  },
  removeItemInCard({commit}, item) {
    commit("removeItemInCard", item);
  },
}
export default actions 
