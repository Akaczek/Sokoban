import { Boot } from "./scenes/Boot";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Sokoban } from "./scenes/Sokoban";
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { Win } from "./scenes/Win";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 900,
  height: 600,
  parent: "game-container",
  scene: [Boot, Preloader, MainMenu, GameOver, Sokoban, Win],
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
