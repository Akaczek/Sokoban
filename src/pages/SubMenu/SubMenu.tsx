import { FC, useContext } from "react";

import { PhaseContext } from "../../libs/context/usePhase";
import { ChooseLevel } from "./ChooseLevel";
import { DuringGame } from "./DuringGame";
import { SubMenuContainer } from "./SubMenu.styles";

const SubMenu: FC = () => {
  const { phase } = useContext(PhaseContext);

  return (
    <SubMenuContainer>
      {phase === "main-menu" && <ChooseLevel />}
      {phase === "during-game" && <DuringGame />}
    </SubMenuContainer>
  );
};

export default SubMenu;
