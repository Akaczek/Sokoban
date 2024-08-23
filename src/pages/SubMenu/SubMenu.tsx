import { FC, useContext, useState } from "react";

import { PhaseContext } from "../../libs/context/usePhase";
import { ChooseLevel } from "./ChooseLevel";
import { DuringGame } from "./DuringGame";
import { SubMenuContainer, DeadlockWarning } from "./SubMenu.styles";
import { EventBus } from '../../game/EventBus';

const SubMenu: FC = () => {
  const { phase } = useContext(PhaseContext);
  const [level, setLevel] = useState(1);
  const [showDeadlock, setShowDeadlock] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [points, setPoints] = useState<{ [key: number]: number }>(() => {
    const savedPoints = localStorage.getItem('points');
    return savedPoints ? JSON.parse(savedPoints) : {};
  });

  EventBus.on('deadlock', () => {
    setShowDeadlock(true);
  });

  EventBus.on('restart-game', () => {
    setShowDeadlock(false);
    setStartTime(Date.now());
  });

  EventBus.on('restartFromWin', () => {
    setLevel(level + 1);
    setStartTime(Date.now());
  });

  EventBus.on('win', () => {
    if (startTime) {
      const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
      const pointsEarned = Math.max(1000 - elapsedTime, 0); // Example points calculation
      const newPoints = { ...points, [level]: Math.round(pointsEarned) };
      setPoints(newPoints);
      localStorage.setItem('points', JSON.stringify(newPoints));
    }
  });

  const startTimer = () => {
    setStartTime(Date.now());
  };

  return (
    <SubMenuContainer>
      {showDeadlock && <DeadlockWarning>Deadlock detected</DeadlockWarning>}
      {phase === "main-menu" && <ChooseLevel
        level={level}
        setLevel={setLevel}
        startTimer={startTimer}
        points={points}
      />}
      {phase === "during-game" && <DuringGame
        level={level}
      />}
    </SubMenuContainer>
  );
};

export default SubMenu;
