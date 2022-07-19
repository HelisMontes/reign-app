import {
  activeButton,
  addMoreNew,
  deleteMyFaves,
  getNews,
  myFavesNews,
  updateNumItemByFramework,
  updateNumItemFaves,
  updatePageByFramework,
  updateSelect,
} from './funtionsNews';

const newReducer = (state, action) => {
  const STATES_CONDITION = {
    'ACTIVE-BUTTON': activeButton,
    'ADD-MORE-NEWS': addMoreNew,
    'DELETE-FAVES': deleteMyFaves,
    'FAVES-NEWS': myFavesNews,
    'GET-NEWS': getNews,
    'UPDATE-NUM-ITEM-FAVES': updateNumItemFaves,
    'UPDATE-NUM-ITEM': updateNumItemByFramework,
    'UPDATE-PAGE': updatePageByFramework,
    'UPDATE-SELECT': updateSelect,
  };
  const STATE_DEFAULT = state;
  return STATES_CONDITION[action.type]
    ? STATES_CONDITION[action.type](state, action.payload)
    : STATE_DEFAULT;
};

export default newReducer;
