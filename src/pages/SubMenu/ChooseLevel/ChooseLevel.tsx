import { FC, useContext, useState } from 'react';

import levels from '../../../game/assets/maps';
import { PhaseContext } from '../../../libs/context/usePhase';
import { ChooseLevelTitle, ChooseLevelButton, ChangeContainer, ChangeLevelButton, LevelNumber } from './ChooseLevel.styles';
import { EventBus } from '../../../game/EventBus';

const ChooseLevel: FC = () => {
  const { setPhase } = useContext(PhaseContext);
  const [level, setLevel] = useState(1);

  const startGame = () => {
    setPhase("during-game");
    EventBus.emit("start-game", level - 1);
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
}

export default ChooseLevel;

