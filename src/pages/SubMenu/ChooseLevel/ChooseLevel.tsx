import { FC, useContext } from 'react';

import levels from '../../../game/assets/maps';
import { PhaseContext } from '../../../libs/context/usePhase';
import { ChooseLevelTitle, ChooseLevelButton, ChangeContainer, ChangeLevelButton, LevelNumber } from './ChooseLevel.styles';
import { SubTitle } from '../DuringGame/DuringGame.styles';
import { EventBus } from '../../../game/EventBus';

const ChooseLevel: FC<{
  level: number;
  setLevel: (level: number) => void;
  startTimer: () => void;
  points: { [key: number]: number };
}> = ({ level, setLevel, startTimer, points }) => {
  const { setPhase } = useContext(PhaseContext);

  const startGame = () => {
    setPhase("during-game");
    EventBus.emit("start-game", level);
    startTimer();
  };

  return (
    <>
      <ChooseLevelTitle>Choose Level</ChooseLevelTitle>
      <SubTitle>Points {points[level] ?? 0}</SubTitle>
      <ChangeContainer>
        <ChangeLevelButton onClick={() => setLevel(level - 1)} disabled={level === 1}>-</ChangeLevelButton>
        <LevelNumber>{level}</LevelNumber>
        <ChangeLevelButton onClick={() => setLevel(level + 1)} disabled={level === levels.length}>+</ChangeLevelButton>
      </ChangeContainer>
      <ChooseLevelButton onClick={startGame}>Start Game</ChooseLevelButton>
    </>
  );
};

export default ChooseLevel;

