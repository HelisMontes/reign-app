import {
  activeButton,
  addMoreNew,
  deleteMyFaves,
  getNews,
  myFavesNews,
  updateNumItemByFramework,
  updateNumItemFaves,
  updateSelect,
} from './funtionsNews';
/**
 * 
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * The global state is updated depending on the action performed
 * @returns objeto
 */
const newReducer = (state, action) => {
  const STATES_CONDITION = {
    'ACTIVE-BUTTON': activeButton,
    'ADD-MORE-NEWS': addMoreNew,
    'DELETE-FAVES': deleteMyFaves,
    'FAVES-NEWS': myFavesNews,
    'GET-NEWS': getNews,
    'UPDATE-NUM-ITEM-FAVES': updateNumItemFaves,
    'UPDATE-NUM-ITEM': updateNumItemByFramework,
    'UPDATE-SELECT': updateSelect,
  };
  const STATE_DEFAULT = state;
  return STATES_CONDITION[action.type]
    ? STATES_CONDITION[action.type](state, action.payload)
    : STATE_DEFAULT;
};

export default newReducer;
