import { useContext } from "react";
import { NewContext } from "../../context/NewProvaider";

import GroupButton from "../GroupButton";
import ListCart from "../ListCart";
import SelectFrameword from "../Select";

const Body = () => {
  const { state, dispatch } = useContext(NewContext);
  return (
    <section>
      <GroupButton />
      <SelectFrameword />
      <ListCart />
    </section>
  );
};

export default Body;
