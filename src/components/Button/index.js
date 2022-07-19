import React from 'react';
import ButtonStyle from './style';

const Button = ({ children, onClick, styleButton, active }) => {
  const { cursor = 1 } = styleButton;
  return (
    <ButtonStyle
      styleButton={styleButton}
      onClick={onClick}
      active={active}
      disabled={ cursor > 0 ? false : true}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
