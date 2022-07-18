import { useContext } from 'react';
import getMoreNews from '../components/utils/getMoreNews';
import { NewContext } from '../context/NewProvaider';

import TYPE from '../reducer/type';

const useValidateData = () => {
  const { state, dispatch } = useContext(NewContext);
  const OBJECT_FRAMEWORD = state.frameword[state.selectFrameword];
  const LENGTH_NEWS = OBJECT_FRAMEWORD.news.length;
  const NUMITEM = parseInt(OBJECT_FRAMEWORD.numItem);
  const PAGE = parseInt(OBJECT_FRAMEWORD.page);

  function loadMoreNews() {
    if (LENGTH_NEWS - NUMITEM <= 6) {
      getMoreNews(dispatch, state, NUMITEM + 8, PAGE);
      return
    }
    if (LENGTH_NEWS > NUMITEM) {
      dispatch({
        type: TYPE.UPDATE_NUM_ITEM,
        payload: {
          library: state.selectFrameword,
          numItem: NUMITEM + 8,
        },
      });
      return;
    }
    if (LENGTH_NEWS <= NUMITEM) {
      getMoreNews(dispatch, state, NUMITEM, PAGE);
      return
    }
  }
  return {
    loadMoreNews,
  };
};

export default useValidateData;
