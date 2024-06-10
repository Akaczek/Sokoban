import { FC, useContext } from 'react';

import { PhaseContext } from '../../../libs/context/usePhase';
import { ChooseLevelTitle, ChooseLevelButton } from './ChooseLevel.styles';
import { EventBus } from '../../../game/EventBus';

const ChooseLevel: FC = () => {
  const { setPhase } = useContext(PhaseContext);

  const startGame = () => {
    setPhase("during-game");
    EventBus.emit("start-game");
  };

  return (
    <>
      <ChooseLevelTitle>Choose Level</ChooseLevelTitle>
      <ChooseLevelButton onClick={startGame}>Start Game</ChooseLevelButton>
    </>
  );
}

export default ChooseLevel;

