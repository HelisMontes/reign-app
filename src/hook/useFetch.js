import { useEffect, useState } from 'react';
import filterNews from '../helpers/filterNews';
import TYPE from '../reducer/type';
import clientAxios from '../services/clientAxios';

export const useFetch = (params, dispatch, state) => {
  const [loading, setLoading] = useState(false);
  const OBJECT_FRAMEWORD = state.frameword[state.selectFrameword];
  useEffect(() => {
    if (OBJECT_FRAMEWORD.news.length === 0) {
      setLoading(true);
      clientAxios
        .get(`/search_by_date`, { params })
        .then(({ data }) => {
          const news = filterNews(data, params.page);
          dispatch({
            type: TYPE.GET_NEWS,
            payload: { frameword: params.query, news },
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [params.query]);
  return loading;
};
