import styled from 'styled-components';
import { bps } from '../../bps';

export const ListCartStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 18px 25px 36px;
  width: 100%;
  ${bps.phones} {
    justify-content: space-between;
  }
  ${bps.tablet} {
    padding: 28px 50px 36px;
  }
  ${bps.desktop} {
    padding: 28px 150px 66px;
  }
  ${bps.desktop_large} {
    padding: 28px 150px 20vh;
  }
`;
