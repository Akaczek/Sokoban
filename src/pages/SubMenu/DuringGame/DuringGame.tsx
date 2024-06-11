import { FC, useContext } from "react";

import { PhaseContext } from '../../../libs/context/usePhase';
import {
  RestartButton,
  ControlsContainer,
  ControlButton,
  Title,
} from "./DuringGame.styles";
import { EventBus } from "../../../game/EventBus";

const DuringGame: FC = () => {
  const { setPhase } = useContext(PhaseContext);

  const move = (direction: string) => {
    EventBus.emit("control-move", direction);
  };

  const startGame = () => {
    setPhase("during-game");
    EventBus.emit("restart-game");
  };

  return (
    <>
      <Title>Soko-puzzle</Title>
      <ControlsContainer>
        <ControlButton direction="left" onClick={() => move("left")}>
          Left
        </ControlButton>
        <ControlButton direction="right" onClick={() => move("right")}>
          Right
        </ControlButton>
        <ControlButton direction="up" onClick={() => move("up")}>
          Up
        </ControlButton>
        <ControlButton direction="down" onClick={() => move("down")}>
          Down
        </ControlButton>
      </ControlsContainer>
      <RestartButton onClick={startGame}>
        Restart
      </RestartButton>
    </>
  );
};

export default DuringGame;
