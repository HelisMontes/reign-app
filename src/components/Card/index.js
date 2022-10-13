import { useContext } from 'react';
import { NewContext } from '../../context/NewProvider';
import TYPE from '../../reducer/type';

import ButtonFavorite from './ButtonFavorite';
import Description from './Description';

import { CartStyle } from './style';
/**
 *
 * @param {object} item //Object with news information
 * Component for news card
 * @returns JSX.Element
 */
const Cart = ({ item }) => {
  const { state, dispatch } = useContext(NewContext);
  function handleClick(item) {
    dispatch({
      type: item.faves ? TYPE.DELETE_FAVES  : TYPE.FAVES_NEWS,
      payload: { item, library: state.selectframework },
    });
  }
  return (
    <CartStyle>
      <a target='_blank' rel="noreferrer" href={item.story_url}>
        <Description
          date={item.created_at}
          author={item.author}
          description={item.story_title}
        />
      </a>
      <ButtonFavorite item={item} onClick={() => handleClick(item)}/>
    </CartStyle>
  );
};

export default Cart;
