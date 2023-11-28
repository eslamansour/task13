import langObj from '../langs/lang';

const mutations  = {
  SET_LANG(state, lang){
    state.lang = lang;
  },
  SetItemInCard(state, item){
    console.log(item);
    state.cardData.push(item)
  },
  updateItemInCard(state, item){
    let index = item.index
    state.cardData[index] = item
  },
  removeItemInCard(state, item){
    console.log(item);
    let index = item.index
    state.cardData.splice(index, 1);
  }
}
export default mutations 
