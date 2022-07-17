import { activeButton, getNews, myFavesNews, updateSelect } from "./FuntionsNews";

const newReducer = (state, action) => {
  const STATES_CONDITION = {
    "GET-NEWS": getNews,
    "FAVES-NEWS": myFavesNews,
    "UPDATE-SELECT": updateSelect,
    "ACTIVE-BUTTON": activeButton,
  };
  const STATE_DEFAULT = state;
  return STATES_CONDITION[action.type]
    ? STATES_CONDITION[action.type](state, action.payload)
    : STATE_DEFAULT;
};

export default newReducer;
