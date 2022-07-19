import styled, { css } from 'styled-components';
/**
 * @param {string} type //Add style for the button that is active
 * depending on the type of text the style is rendered
 * @returns styledComponents
 */
const TextStyle = styled.div(({ type }) => {
  const typeButton = {
    author,
    description,
  };
  return typeButton[type]();
});

function author() {
  return css`
    display: flex;
    align-items: center;
    svg {
      width:20px;
    }
    span {
      font-family: Roboto;
      font-size: 11px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #767676;
      padding-left: 8px;
    }
  `;
}

function description() {
  return css`
    margin-top: 7px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: #6b6b6b;
  `;
}

export default TextStyle;
