import { theme } from "../../theme/theme";

export class Win extends Phaser.Scene {
  constructor() {
    super("Win");
  }

  create() {
    this.cameras.main.setBackgroundColor(theme.color.honeydew);
    this.cameras.main.setBounds(0, 0, this.scale.width, this.scale.height);

    const winText = this.add.text(400, 300, "You Win!", {
      fontSize: "64px",
      color: theme.color.primaryBlue,
    });
    winText.setOrigin(0.5, 0.5);
    winText.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 100
    );

    const restartText = this.add.text(
      400,
      400,
      "Press SPACE or click this text to restart",
      {
        fontSize: "24px",
        color: theme.color.primaryBlue,
      }
    );
    restartText.setOrigin(0.5, 0.5);
    restartText.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

    restartText.setInteractive();
    restartText.on("pointerdown", () => {
      this.scene.start("Sokoban");
    });

    if (this.input.keyboard) {
      this.input.keyboard.once("keydown-SPACE", () => {
        this.scene.start("Sokoban");
      });
    }
  }
}
