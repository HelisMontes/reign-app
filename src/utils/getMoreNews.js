import clientAxios from '../services/clientAxios';
import filterNews from '../helpers/filterNews';
import TYPE from '../reducer/type';

/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * @param {number} numItem //Number of framework items
 * @param {number} page //number of pages we have consulted
 * request to the end point to obtain new data depending on the framework and pagination
 */
const getMoreNews = (dispatch, state, numItem, page) => {
  const params = { query: `${state.selectframework}`, page: `${page + 1}` };
  clientAxios
    .get(`/search_by_date`, { params })
    .then(({ data }) => {
      const news = filterNews(data, params.page);
      dispatch({
        type: TYPE.ADD_MORE_NEWS,
        payload: {
          library: params.query,
          news,
          numItem,
          page: page + 1,
        },
      });
    })
    .catch(console.error);
};

export default getMoreNews;
