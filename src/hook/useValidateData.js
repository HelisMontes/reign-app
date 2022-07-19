import { useContext } from 'react';
import getMoreNews from '../components/utils/getMoreNews';
import { NewContext } from '../context/NewProvaider';

import TYPE from '../reducer/type';

const useValidateData = () => {
  const { state, dispatch } = useContext(NewContext);
  const OBJECT_FRAMEWORD = state.frameword[state.selectFrameword];
  const LENGTH_NEWS = OBJECT_FRAMEWORD.news.length;
  const NUM_ITEM = parseInt(OBJECT_FRAMEWORD.numItem);
  const LENGTH_NEWS_FAVES = OBJECT_FRAMEWORD.news.length;
  const NUM_ITEM_FAVES = parseInt(OBJECT_FRAMEWORD.numItem);
  const PAGE = parseInt(OBJECT_FRAMEWORD.page);

  function loadMoreNews() {
    if (LENGTH_NEWS - NUM_ITEM <= 6) {
      getMoreNews(dispatch, state, NUM_ITEM + 8, PAGE);
      return
    }
    if (LENGTH_NEWS > NUM_ITEM) {
      dispatch({
        type: TYPE.UPDATE_NUM_ITEM,
        payload: {
          library: state.selectFrameword,
          numItem: NUM_ITEM + 8,
        },
      });
      return;
    }
    if (LENGTH_NEWS <= NUM_ITEM) {
      getMoreNews(dispatch, state, NUM_ITEM, PAGE);
      return
    }
  }
  function loadMoreFaves(){
    if (LENGTH_NEWS_FAVES >= NUM_ITEM_FAVES) {
      dispatch({
        type: TYPE.UPDATE_NUM_ITEM_FAVES,
        payload: NUM_ITEM_FAVES + 8,
      });
      return;
    }
  }
  return {
    loadMoreNews,
    loadMoreFaves
  };
};

export default useValidateData;
