import React from 'react';
import ButtonStyle from './style';
/**
 *
 * @param {React.ReactNode} children
 * @param {React.MouseEvent<HTMLButtonElement>} onClick //The function that will be executed by the click event
 * @param {object} styleButton //Styles for the button
 * @param {boolean} active //Add style for the button that is active
 * @returns JSX.Element
 */
const Button = ({ children, onClick, styleButton, active }) => {
  const { cursor = 1 } = styleButton;
  return (
    <ButtonStyle
      styleButton={styleButton}
      onClick={onClick}
      active={active}
      disabled={cursor > 0 ? false : true}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
