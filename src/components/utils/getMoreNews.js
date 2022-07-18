import clientAxios from '../../services/clientAxios';
import filterNews from '../../helpers/filterNews';
import TYPE from '../../reducer/type';

const getMoreNews = (dispatch, state, numItem, page) => {
  const params = { query: `${state.selectFrameword}`, page: `${page + 1}` };
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
