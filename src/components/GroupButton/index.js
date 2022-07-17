import { useState } from "react";
import Button from "../Button";

import { GroupButtonStyle } from "./style";

const GroupButton = () => {
  const [active, setActive] = useState({ all: true, faves: false });
  return (
    <GroupButtonStyle>
      <Button styleButton="primary" active={active.all}>
        <span class="All">All</span>
      </Button>
      <Button styleButton="primary" active={active.faves}>
        <span class="All">My faves</span>
      </Button>
    </GroupButtonStyle>
  );
};

export default GroupButton;
