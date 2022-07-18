import { useEffect, useState } from "react";
import filterNews from "../helpers/filterNews";
import TYPE from "../reducer/type";
import clientAxios from "../services/clientAxios";

export const useFetch = (params, dispatch, state) => {
  const [loading, setLoading] = useState(false);
  const OBJECT_FRAMEWORD = state.frameword[state.selectFrameword];
  const PAGE = parseInt(OBJECT_FRAMEWORD.page);
  const frameword = JSON.parse(localStorage.getItem("frameword"));
  useEffect(() => {
    if (!frameword?.[params.query].length > 0 && PAGE < 1) {
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
