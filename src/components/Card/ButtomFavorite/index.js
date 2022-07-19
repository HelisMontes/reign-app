import Button from '../../Button';
import Favorite from '../../Icons/Favorite';
import NotFavorite from '../../Icons/NotFavorite';

import { CartButtonStyle } from '../style';

const ButtomFavorite = ({ item, onClick }) => {
  return (
    <CartButtonStyle onClick={onClick}>
      <Button styleButton='icon' >
        {item.faves 
          ? <Favorite />
          : <NotFavorite />
        }
      </Button>
    </CartButtonStyle>
  );
};

export default ButtomFavorite;
