import ButtomFavorite from "./ButtomFavorite";
import Description from "./Description";

import { CartStyle } from "./style";

const Cart = ({ item }) => {
  return (
    <CartStyle>
      <Description />
      <ButtomFavorite />
    </CartStyle>
  );
};

export default Cart;
