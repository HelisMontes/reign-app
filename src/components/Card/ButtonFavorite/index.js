import Button from '../../Button';
import Favorite from '../../Icons/Favorite';
import NotFavorite from '../../Icons/NotFavorite';

import { CartButtonStyle } from '../style';

const ButtonFavorite = ({ item, onClick }) => {
  return (
    <CartButtonStyle onClick={onClick}>
      <Button styleButton={{ type: 'icon' }}>
        {item.faves 
          ? <Favorite />
          : <NotFavorite />
        }
      </Button>
    </CartButtonStyle>
  );
};

export default ButtonFavorite;
