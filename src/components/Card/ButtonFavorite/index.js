import Button from '../../Button';
import Favorite from '../../Icons/Favorite';
import NotFavorite from '../../Icons/NotFavorite';

import { CartButtonStyle } from '../style';
/**
 *
 * @param {object} item //Object with news information
 * @param {React.MouseEvent<HTMLButtonElement>} onClick //The function that will be executed by the click event
 * @returns JSX.Element
 */
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
