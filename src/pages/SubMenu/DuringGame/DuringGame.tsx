import { FC } from "react";

import {
  RestartButton,
  ControlsContainer,
  ControlButton,
} from "./DuringGame.styles";
import { EventBus } from "../../../game/EventBus";

const DuringGame: FC = () => {
  const move = (direction: string) => {
    EventBus.emit("control-move", direction);
  };

  return (
    <>
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
      <RestartButton>Restart</RestartButton>
    </>
  );
};

export default DuringGame;
