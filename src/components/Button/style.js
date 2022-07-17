
import styled, { css } from "styled-components";

const ButtonStyle = styled.button(({ styleButton, active }) => {
  const typeButton = {
    primary: buttonPrimary,
    icon: buttomIcon,
  };
  return typeButton[styleButton](active);
});

function buttonPrimary(active) {
  return css`
    min-width: 98px;
    height: 31px;
    padding: 3px 16px 0 17px;
    border-radius: 2px;
    border: solid 1px ${active ? '#1797ff' : '#d6d6d6'};
    span {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.75;
      letter-spacing: normal;
      text-align: center;
      color: ${active ? '#1797ff' : '#606060'};
    }
  `;
}

function buttomIcon() {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    background-color: transparent;
  `;
}

export default ButtonStyle