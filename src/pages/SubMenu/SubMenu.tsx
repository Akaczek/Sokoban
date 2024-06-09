import { FC } from "react";

import {
  SubMenuContainer,
  SubMenuButton,
  SubMenuTitle,
} from "./SubMenu.styles";
import { EventBus } from "../../game/EventBus";

const SubMenu: FC = () => {
  const startGame = () => {
    EventBus.emit("start-game");
  };

  return (
    <SubMenuContainer>
      <SubMenuTitle>Sub Menu</SubMenuTitle>
      <SubMenuButton onClick={startGame}>Start Game</SubMenuButton>
    </SubMenuContainer>
  );
};

export default SubMenu;
