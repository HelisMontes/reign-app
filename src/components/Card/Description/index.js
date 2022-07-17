import Clock from "../../Icons/Clock";
import Text from "../../Text";

import { CartDescriptionStyle } from "../style";

const Description = ({ date, autor, description }) => {
  return (
    <CartDescriptionStyle>
      <Text type="author">
        <Clock />
        <span>{date} by {autor}</span>
      </Text>
      <Text type="description">
        <span>{description}</span>
      </Text>
    </CartDescriptionStyle>
  );
};

export default Description;
