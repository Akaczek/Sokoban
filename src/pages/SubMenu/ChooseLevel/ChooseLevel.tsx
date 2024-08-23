import { FC, useContext } from 'react';

import levels from '../../../game/assets/maps';
import { PhaseContext } from '../../../libs/context/usePhase';
import { ChooseLevelTitle, ChooseLevelButton, ChangeContainer, ChangeLevelButton, LevelNumber } from './ChooseLevel.styles';
import { EventBus } from '../../../game/EventBus';

const ChooseLevel: FC<{
  level: number;
  setLevel: (level: number) => void;
}> = ({ level, setLevel }) => {
  const { setPhase } = useContext(PhaseContext);

  const startGame = () => {
    setPhase("during-game");
    EventBus.emit("start-game", level);
  };

  return (
    <>
      <ChooseLevelTitle>Choose Level</ChooseLevelTitle>
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

