import Cart from "../Card";

import { ListCartStyle } from "./style";

const ListCart = ({ data, numItem }) => {
  return (
    <ListCartStyle>
      {data.news.map(
        (item, index) =>
          index + 1 <= numItem && <Cart key={item.story_id} item={item} />
      )}
    </ListCartStyle>
  );
};

export default ListCart;
