import { Boot } from "./scenes/Boot";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Sokoban } from "./scenes/Sokoban";
import { RestartBrowser } from './scenes/RestartBrowser';
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { Win } from "./scenes/Win";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "game-container",
    width: 1000,
    height: 1000,
  },
  scene: [Boot, Preloader, MainMenu, GameOver, Sokoban, Win, RestartBrowser],
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
