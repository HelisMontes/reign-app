import Clock from "../../Icons/Clock";
import Text from "../../Text";

import { CartDescriptionStyle } from "../style";

const Description = ({ autor, description }) => {
  return (
    <CartDescriptionStyle>
      <Text type="author">
        <Clock />
        <span>3 hours ago by author</span>
      </Text>
      <Text type="description">
        <span>Yes, React is taking over front-end development. The question is why.</span>
      </Text>
    </CartDescriptionStyle>
  );
};

export default Description;
