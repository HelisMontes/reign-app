import { useContext } from 'react';
import { NewContext } from '../../context/NewProvaider';
import TYPE from '../../reducer/type';

import ButtomFavorite from './ButtomFavorite';
import Description from './Description';

import { CartStyle } from './style';

const Cart = ({ item }) => {
  const { state, dispatch } = useContext(NewContext);
  function handleClick(item) {
    dispatch({
      type: item.faves ? TYPE.DELETE_FAVES  : TYPE.FAVES_NEWS,
      payload: { item, library: state.selectFrameword },
    });
  }
  return (
    <CartStyle>
      <a target='_blank' href={item.story_url}>
        <Description
          date={item.created_at}
          autor={item.author}
          description={item.story_title}
        />
      </a>
      <ButtomFavorite item={item} onClick={() => handleClick(item)}/>
    </CartStyle>
  );
};

export default Cart;
