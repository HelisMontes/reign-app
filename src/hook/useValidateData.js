import { useContext } from 'react';
import getMoreNews from '../utils/getMoreNews';
import { NewContext } from '../context/NewProvider';

import { UPDATE_NUM_ITEM, UPDATE_NUM_ITEM_FAVES } from '../reducer/type';
/**
 * Hook to load data with infinite scroll by framework or favorites
 * @returns object
 */
const useValidateData = () => {
  const { state, dispatch } = useContext(NewContext);
  const OBJECT_FRAMEWORK = state.framework[state.selectFramework];
  const LENGTH_NEWS = OBJECT_FRAMEWORK.news.length;
  const NUM_ITEM = parseInt(OBJECT_FRAMEWORK.numItem);
  const LENGTH_NEWS_FAVES = OBJECT_FRAMEWORK.news.length;
  const NUM_ITEM_FAVES = parseInt(OBJECT_FRAMEWORK.numItem);
  const PAGE = parseInt(OBJECT_FRAMEWORK.page);
  /**
   * Function to load new stored data or make a new request depending on the framework
   * @returns void 
   */
  function loadMoreNews() {
    /**
     * If the length of the news array minus the number of maximum items
     * to render is a number less than or equal to 6, I make a new request
     * to the endpoint
     */
    if (LENGTH_NEWS - NUM_ITEM <= 6) {
      getMoreNews(dispatch, state, NUM_ITEM + 8, PAGE);
      return
    }
    /**
     * If the length of the array is greater than the maximum number of items,
     * I get information stored in the state and update the maximum number of news to render
     */
    if (LENGTH_NEWS > NUM_ITEM) {
      dispatch({
        type: UPDATE_NUM_ITEM,
        payload: {
          library: state.selectFramework,
          numItem: NUM_ITEM + 8,
        },
      });
      return;
    }
    /**
     * If the length of the array is less than the maximum number of items,
     * make a new request to the endpoint
     */
    if (LENGTH_NEWS <= NUM_ITEM) {
      getMoreNews(dispatch, state, NUM_ITEM, PAGE);
      return
    }
  }
  /**
   * infinite scroll for favorite news
   */
  function loadMoreFaves(){
    /**
     * If the number of favorite news is greater than the number of items to render,
     * I load information stored in the state and update the maximum number of items to render
     */
    if (LENGTH_NEWS_FAVES >= NUM_ITEM_FAVES) {
      dispatch({
        type: UPDATE_NUM_ITEM_FAVES,
        payload: NUM_ITEM_FAVES + 8,
      });
    }
  }
  return {
    loadMoreNews,
    loadMoreFaves
  };
};

export default useValidateData;
