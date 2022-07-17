import styled from "styled-components";

export const CartStyle = styled.article`
  display: flex;
  margin-bottom: 30px;
  width: calc(50% - 20px);
  max-width: 550px;
  min-height: 90px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
`
export const CartDescriptionStyle = styled.div`
  width: calc(100% - 68px);
  padding: 27px 16px 23px 26px;
  border-radius: 6px 0 0 6px;
  max-width: 482px;
  background-color: #fff;
`
export const CartButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 68px;
  border-radius: 0 6px 6px 0;
  background-color: rgb(96, 96, 96, .1);
`