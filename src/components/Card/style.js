import styled from 'styled-components';
import { bps } from '../../bps';

export const CartStyle = styled.article`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  max-width: 550px;
  min-height: 90px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  &:hover {
    opacity: 0.4;
  }
  a {
    text-decoration: none;
    width: calc(100% - 45px);
  }
  ${bps.phones} {
    width: calc(50% - 10px);
  }
  ${bps.tablet} {
    width: calc(50% - 20px);
    a {
      width: calc(100% - 68px);
    }
  }
  ${bps.desktop_large} {
    min-height: 120px;
  }
`;
export const CartDescriptionStyle = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 6px 0 0 6px;
  max-width: 482px;
  background-color: #fff;
  ${bps.tablet} {
    padding: 27px 16px 23px 26px;
  }
`;
export const CartButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 45px;
  border-radius: 0 6px 6px 0;
  background-color: rgb(96, 96, 96, 0.1);
  ${bps.tablet} {
    width: 68px;
  }
`;
