import { useContext } from "react";
import { NewContext } from "../../context/NewProvaider";
import { useFetch } from "../../hook/useFetch";

import GroupButton from "../GroupButton";
import ListCart from "../ListCart";
import SelectFrameword from "../Select";

const Body = () => {
  const { state, dispatch } = useContext(NewContext);
  const loading = useFetch(
    { query: `${state.selectFrameword}`, page: 0 },
    dispatch
  );
  return loading ? (
    <p>Lobo</p>
  ) : (
    <section>
      <GroupButton />
      <SelectFrameword />
      <ListCart data={state.frameword[state.selectFrameword]}/>
    </section>
  );
};

export default Body;
