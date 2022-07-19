import React from "react";
import StyleHead from "./style";

/**
 *
 * @param { string } title // home page title
 * @returns JSX.Element
 */

const Header = ({ title }) => {
  return (
    <StyleHead>
      <h1>{title}</h1>
    </StyleHead>
  );
};

export default Header