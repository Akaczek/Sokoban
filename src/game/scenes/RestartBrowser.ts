import { theme } from "../../theme/theme";

export class RestartBrowser extends Phaser.Scene {
  constructor() {
    super("RestartBrowser");
  }

  create() {
    this.cameras.main.setBackgroundColor(theme.color.honeydew);
    this.cameras.main.setBounds(0, 0, this.scale.width, this.scale.height);

    const restartText = this.add.text(
      400,
      400,
      "Refresh the browser to restart",
      {
        fontSize: "36px",
        color: theme.color.primaryBlue,
      }
    );
    restartText.setOrigin(0.5, 0.5);
    restartText.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
  }
}
