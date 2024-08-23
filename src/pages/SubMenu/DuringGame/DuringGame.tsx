import { FC, useContext } from "react";

import { PhaseContext } from '../../../libs/context/usePhase';
import {
  RestartButton,
  ControlsContainer,
  ControlButton,
  Title,
  SubTitle,
} from "./DuringGame.styles";
import { EventBus } from "../../../game/EventBus";

const DuringGame: FC<{
  level: number;
}
> = ({
  level,
}) => {
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
      <SubTitle>Level {level}</SubTitle>
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
