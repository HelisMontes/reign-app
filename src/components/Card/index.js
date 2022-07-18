import ButtomFavorite from './ButtomFavorite';
import Description from './Description';

import { CartStyle } from './style';

const Cart = ({ item }) => {
  return (
    <CartStyle>
      <a target='_blank' href={item.story_url}>
        <Description
          date={item.created_at}
          autor={item.author}
          description={item.story_title}
        />
      </a>
      <ButtomFavorite item={item} />
    </CartStyle>
  );
};

export default Cart;
