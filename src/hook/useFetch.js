import { useEffect, useState } from 'react';
import filterNews from '../helpers/filterNews';
import TYPE from '../reducer/type';
import clientAxios from '../services/clientAxios';
/**
 *
 * @param {object} params
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * First request to the endpoint for each framework
 * @returns boolean
 */
const useFetch = (params, dispatch, state) => {
  const [loading, setLoading] = useState(false);
  const OBJECT_FRAMEWORK = state.framework[state.selectframework];
  useEffect(() => {
    //If the framework has data it did not make the request
    if (OBJECT_FRAMEWORK.news.length === 0) {
      setLoading(true);
      clientAxios
        .get(`/search_by_date`, { params })
        .then(({ data }) => {
          const news = filterNews(data, params.page);
          dispatch({
            type: TYPE.GET_NEWS,
            payload: { framework: params.query, news },
          });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [params.query]);
  return loading;
};

export default useFetch;
