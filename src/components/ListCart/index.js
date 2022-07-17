import Cart from "../Card";

import { ListCartStyle } from "./style";

const ListCart = ({ data }) => {
  return (
    <ListCartStyle>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </ListCartStyle>
  );
};

export default ListCart;
