import {
  activeButton,
  addMoreNew,
  deleteMyFaves,
  getNews,
  myFavesNews,
  updateNumItemByFramework,
  updateNumItemFaves,
  updateSelect,
} from './functionsNews';

/**
 * Variables to call the function that will update the state
 */
export const {
  ACTIVE_BUTTON,
  ADD_MORE_NEWS,
  DELETE_FAVES,
  FAVES_NEWS,
  GET_NEWS,
  UPDATE_NUM_ITEM,
  UPDATE_NUM_ITEM_FAVES,
  UPDATE_SELECT,
} = {
  ACTIVE_BUTTON: activeButton,
  ADD_MORE_NEWS: addMoreNew,
  DELETE_FAVES: deleteMyFaves,
  FAVES_NEWS: myFavesNews,
  GET_NEWS: getNews,
  UPDATE_NUM_ITEM: updateNumItemByFramework,
  UPDATE_NUM_ITEM_FAVES: updateNumItemFaves,
  UPDATE_SELECT: updateSelect,
};
