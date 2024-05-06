import { blocks, car } from '../assets/imgs';
import { move } from '../utils/move';
import { OBJECTS_MAPPING } from '../utils/constants';
import JSONMap from '../assets/maps/mapa.json';

export class Sokoban extends Phaser.Scene {
  constructor() {
    super('Sokoban');
  }

  preload() {
    this.load.image('tiles', blocks);
    this.load.image('car', car);
  }

  create() {
    const map = this.make.tilemap(JSONMap);
    const tileset = map.addTilesetImage('tiles', undefined, 32, 32, 1, 2)!;
    const layer = map.createLayer(0, tileset, 0, 0)!;
    const startTile = map.findTile(
      (tile) => tile.index === OBJECTS_MAPPING.player,
      this,
      0,
      0,
      map.width,
      map.height
    )!;
    const player = this.add.image(
      startTile.pixelX + 16,
      startTile.pixelY + 16,
      'car'
    );

    if (this.input.keyboard) {
      //  Left
      this.input.keyboard.on('keydown-A', () => {
        move(layer, player, 'left');
      });
      this.input.keyboard.on('keydown-LEFT', () => {
        move(layer, player, 'left');
      });

      //  Right
      this.input.keyboard.on('keydown-D', () => {
        move(layer, player, 'right');
      });
      this.input.keyboard.on('keydown-RIGHT', () => {
        move(layer, player, 'right');
      });

      //  Up
      this.input.keyboard.on('keydown-W', () => {
        move(layer, player, 'up');
      });
      this.input.keyboard.on('keydown-UP', () => {
        move(layer, player, 'up');
      });

      //  Down
      this.input.keyboard.on('keydown-S', () => {
        move(layer, player, 'down');
      });
      this.input.keyboard.on('keydown-DOWN', () => {
        move(layer, player, 'down');
      });
    }

    // Center the camer on the board
    const cameraWidth = this.cameras.main.width;
    const cameraHeight = this.cameras.main.height;

    const mapWidth = map.widthInPixels;
    const mapHeight = map.heightInPixels;

    this.cameras.main.setScroll((-cameraWidth + mapWidth) / 2, (-cameraHeight + mapHeight) / 2);
    this.cameras.main.setZoom(2);
  }
}
