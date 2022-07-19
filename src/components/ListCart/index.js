import Cart from '../Card';

import { ListCartStyle } from './style';
/**
 *
 * @param {array} data // The cards according to the frameworks or favorites
 * @param {number} numItem // Number of cards to render
 * News card container, cards are rendered depending on the framework or favorites
 * @returns JSX.Element
 */
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
