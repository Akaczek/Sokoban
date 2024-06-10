import { GameObjects, Scene } from "phaser";
import { theme } from "../../theme/theme";
import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.cameras.main.setBackgroundColor(theme.color.honeydew);

    const chooseLevelText = this.add.text(400, 300, "Choose a level", {
      fontSize: "64px",
      color: theme.color.primaryBlue,
    });
    chooseLevelText.setOrigin(0.5, 0.5);
    chooseLevelText.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100
    );

    EventBus.on('start-game', this.changeScene, this);
  }

  changeScene() {
    this.scene.stop('Sokoban');
    this.scene.start('Sokoban');
  }
}
