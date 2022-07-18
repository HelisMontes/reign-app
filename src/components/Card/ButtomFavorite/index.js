import { useContext } from 'react';
import { NewContext } from '../../../context/NewProvaider';
import TYPE from '../../../reducer/type';

import Button from '../../Button';
import Favorite from '../../Icons/Favorite';
import NotFavorite from '../../Icons/NotFavorite';

import { CartButtonStyle } from '../style';

const ButtomFavorite = ({ item }) => {
  const { state, dispatch } = useContext(NewContext);
  function handleClick(item) {
    dispatch({
      type: item.faves ? TYPE.DELETE_FAVES  : TYPE.FAVES_NEWS,
      payload: { item, library: state.selectFrameword },
    });
  }
  return (
    <CartButtonStyle>
      <Button styleButton='icon' onClick={() => handleClick(item)}>
        {item.faves 
          ? <Favorite />
          : <NotFavorite />
        }
      </Button>
    </CartButtonStyle>
  );
};

export default ButtomFavorite;
