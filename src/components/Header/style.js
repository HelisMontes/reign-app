import styled from 'styled-components';
import { bps } from '../../bps';

const StyleHead = styled.div`
  height: 100%;
  padding: 18px 25px 16px;
  margin: 0 0 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  h1 {
    width: 208px;
    height: 28px;
    font-family: Baskerville;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #3b3b3b;
    text-transform: uppercase;
  }
  ${bps.phones} {
    h1 {
      font-size: 24px;
    }
  }
  ${bps.tablet} {
    padding: 28px 50px 32px;
    margin: 0 0 30px;
    h1 {
      font-size: 28px;
    }
  }
  ${bps.desktop} {
    padding: 44px 150px 42px;
    margin: 0 0 70px;
  }
`;
export default StyleHead;
