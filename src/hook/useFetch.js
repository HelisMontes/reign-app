import { useEffect, useState } from "react";
import filterNews from "../helpers/filterNews";
import TYPE from "../reducer/type";
import clientAxios from "../services/clientAxios";

export const useFetch = (params, dispatch) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    clientAxios
      .get(`/search_by_date`, { params })
      .then(({ data }) => {
        const news = filterNews(data, params.page);
        dispatch({
          type: TYPE.GETNEWS,
          payload: { frameword: params.query, news },
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [params.query, params.page]);
  return loading;
};
