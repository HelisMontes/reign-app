import styled from "styled-components";
import { bps } from "../../bps";

const SelectStyle = styled.div`
  padding: 23px 25px 10px;
  .css-b62m3t-container {
    width: 240px;
    height: 32px;
    border-radius: 4px;

    .frameword-option {
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
  }
  ${bps.tablet} {
    padding: 43px 50px 10px;
  }
  ${bps.desktop} {
    padding: 63px 150px 10px;
  }
`;

export default SelectStyle;
