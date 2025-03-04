import { move } from "../utils/move";
import { checkWin } from "../utils/checkWin";
import { EventBus } from '../EventBus';

export class Sokoban extends Phaser.Scene {
  map: Phaser.Tilemaps.Tilemap;
  mapLayer: Phaser.Tilemaps.TilemapLayer | null;
  blocksColoredLayer: Phaser.Tilemaps.TilemapLayer | null;
  eventEmitter: Phaser.Events.EventEmitter;
  chosenLevel: number;

  constructor() {
    super("Sokoban");
    this.chosenLevel = 1;
  }

  create(data: { level: number }) {
    this.eventEmitter = new Phaser.Events.EventEmitter();

    // load map
    this.map = this.make.tilemap({ key: `map${data.level}` });
    const tiles = this.map.addTilesetImage("tiles");
    const picture = this.map.addTilesetImage(`blocks${data.level}`);
    if (tiles && picture) {
      this.mapLayer = this.map.createLayer("map", tiles);
      this.blocksColoredLayer = this.map.createLayer("blocks_colored", picture);
    }
    if (this.mapLayer) {
      this.mapLayer.depth = 1;
      this.map.setLayer(this.mapLayer);
    }

    // controls
    if (this.input.keyboard) {
      //  Left
      this.input.keyboard.on("keydown-A", () => {
        move(this.map, this.eventEmitter, "left");
      });
      this.input.keyboard.on("keydown-LEFT", () => {
        move(this.map, this.eventEmitter, "left");
      });

      //  Right
      this.input.keyboard.on("keydown-D", () => {
        move(this.map, this.eventEmitter, "right");
      });
      this.input.keyboard.on("keydown-RIGHT", () => {
        move(this.map, this.eventEmitter, "right");
      });

      //  Up
      this.input.keyboard.on("keydown-W", () => {
        move(this.map, this.eventEmitter, "up");
      });
      this.input.keyboard.on("keydown-UP", () => {
        move(this.map, this.eventEmitter, "up");
      });

      //  Down
      this.input.keyboard.on("keydown-S", () => {
        move(this.map, this.eventEmitter, "down");
      });
      this.input.keyboard.on("keydown-DOWN", () => {
        move(this.map, this.eventEmitter, "down");
      });
    }

    this.eventEmitter.on("checkWin", () => {
      if (checkWin(this.map)) {
        EventBus.emit('win', { level: data.level });
        this.scene.start("Win", { level: data.level });
      }
    });

    EventBus.on('control-move', (direction: string) => {
      move(this.map, this.eventEmitter, direction as 'up' | 'down' | 'left' | 'right');
    });

    EventBus.on('restart-game', () => {
      this.scene.restart();
    });

    EventBus.on('restartFromWin', () => {
      this.scene.stop();
    });

    // camera setting
    const cameraWidth = this.cameras.main.width;
    const cameraHeight = this.cameras.main.height;

    const mapWidth = this.map.widthInPixels;
    const mapHeight = this.map.heightInPixels;

    this.cameras.main.setScroll(
      (-cameraWidth + mapWidth) / 2,
      (-cameraHeight + mapHeight) / 2
    );
    this.cameras.main.setZoom(cameraHeight / mapHeight);

    this.events.on("shutdown", this.destroy, this);
  }

  destroy() {
    this.eventEmitter.removeAllListeners();
  }
}
