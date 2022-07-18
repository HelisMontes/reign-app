import { useEffect, useState } from "react";
import filterNews from "../helpers/filterNews";
import TYPE from "../reducer/type";
import clientAxios from "../services/clientAxios";

export const useFetch = (params, dispatch) => {
  const [loading, setLoading] = useState(false);
  const frameword = JSON.parse(localStorage.getItem("frameword"));
  useEffect(() => {
    if (!frameword?.[params.query].length > 0) {
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
  }, []);
  return loading;
};
