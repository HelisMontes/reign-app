import ButtomFavorite from "./ButtomFavorite";
import Description from "./Description";

import { CartStyle } from "./style";

const Cart = ({ item }) => {
  return (
    <CartStyle>
      <Description
        date = {item.created_at}
        autor = {item.author}
        description = {item.story_title}
      />
      <ButtomFavorite />
    </CartStyle>
  );
};

export default Cart;
