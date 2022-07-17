import { useState } from "react";
import Button from "../Button";

import { GroupButtonStyle } from "./style";

const GroupButton = () => {
  return (
    <GroupButtonStyle>
      <Button styleButton="primary" active={true}>
        <span className="All">All</span>
      </Button>
      <Button styleButton="primary" active={false}>
        <span className="All">My faves</span>
      </Button>
    </GroupButtonStyle>
  );
};

export default GroupButton;
