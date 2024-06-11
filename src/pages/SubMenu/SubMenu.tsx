import { FC, useContext, useState } from "react";

import { PhaseContext } from "../../libs/context/usePhase";
import { ChooseLevel } from "./ChooseLevel";
import { DuringGame } from "./DuringGame";
import { SubMenuContainer, DeadlockWarning } from "./SubMenu.styles";
import { EventBus } from '../../game/EventBus';

const SubMenu: FC = () => {
  const { phase } = useContext(PhaseContext);
  const [showDeadlock, setShowDeadlock] = useState(false);

  EventBus.on('deadlock', () => {
    setShowDeadlock(true);
  });

  EventBus.on('restart-game', () => {
    setShowDeadlock(false);
  });

  return (
    <SubMenuContainer>
      {showDeadlock && <DeadlockWarning>Deadlock detected</DeadlockWarning>}
      {phase === "main-menu" && <ChooseLevel />}
      {phase === "during-game" && <DuringGame />}
    </SubMenuContainer>
  );
};

export default SubMenu;
