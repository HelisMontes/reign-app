import {
  activeButton,
  addMoreNew,
  getNews,
  myFavesNews,
  updateNumItemByFramework,
  updatePageByFramework,
  updateSelect,
} from './funtionsNews';

const newReducer = (state, action) => {
  const STATES_CONDITION = {
    'GET-NEWS': getNews,
    'ADD-MORE-NEWS': addMoreNew,
    'FAVES-NEWS': myFavesNews,
    'UPDATE-SELECT': updateSelect,
    'ACTIVE-BUTTON': activeButton,
    'UPDATE-NUM-ITEM': updateNumItemByFramework,
    'UPDATE-PAGE': updatePageByFramework,
  };
  const STATE_DEFAULT = state;
  return STATES_CONDITION[action.type]
    ? STATES_CONDITION[action.type](state, action.payload)
    : STATE_DEFAULT;
};

export default newReducer;
