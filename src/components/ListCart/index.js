import Cart from "../Card";

import { ListCartStyle } from "./style";

const ListCart = ({ data }) => {
  return (
    <ListCartStyle>
      {data.map((item) => (
        <Cart key={item.story_id} item={item} />
      ))}
    </ListCartStyle>
  );
};

export default ListCart;
