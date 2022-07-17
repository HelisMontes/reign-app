import Button from "../../Button";
import NotFavorite from "../../Icons/NotFavorite";

import { CartButtonStyle } from "../style";

const ButtomFavorite = () => {
  return (
    <CartButtonStyle>
      <Button styleButton="icon">
        <NotFavorite />
      </Button>
    </CartButtonStyle>
  );
};

export default ButtomFavorite;
