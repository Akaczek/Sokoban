import { FC, useContext, useState } from 'react';

import { PhaseContext } from '../../../libs/context/usePhase';
import { ChooseLevelTitle, ChooseLevelButton, ChangeContainer, ChangeLevelButton, LevelNumber } from './ChooseLevel.styles';
import { EventBus } from '../../../game/EventBus';

const ChooseLevel: FC = () => {
  const { setPhase } = useContext(PhaseContext);
  const [level, setLevel] = useState(1);

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
        <ChangeLevelButton onClick={() => setLevel(level + 1)}>+</ChangeLevelButton>
      </ChangeContainer>
      <ChooseLevelButton onClick={startGame}>Start Game</ChooseLevelButton>
    </>
  );
}

export default ChooseLevel;

