import React from 'react';
import ButtonStyle from './style';

const Button = ({ children, onClick, styleButton, active }) => {
  return (
    <ButtonStyle
      styleButton={styleButton}
      onClick={onClick}
      active={active}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
