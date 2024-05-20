import { car } from "../assets/imgs";
import { move } from "../utils/move";
import map2 from "../assets/maps/mapa.json";

export class Sokoban extends Phaser.Scene {
    map: Phaser.Tilemaps.Tilemap;
    mapLayer: Phaser.Tilemaps.TilemapLayer | null;
    goalLayer: Phaser.Tilemaps.TilemapLayer | null;
    blocksColoredLayer: Phaser.Tilemaps.TilemapLayer | null;

    constructor() {
        super("Sokoban");
    }

    preload() {
        this.load.image("car", car);
        this.load.tilemapTiledJSON("map", map2);
    }

    create() {
        this.map = this.make.tilemap({ key: "map" });
        console.log(this.map);
        const tiles = this.map.addTilesetImage("tiles");
        if (tiles) {
            this.mapLayer = this.map.createLayer("map", tiles);
            this.goalLayer = this.map.createLayer("goal", tiles);
            this.blocksColoredLayer = this.map.createLayer(
                "blocks_colored",
                tiles
            );
        }
        if (this.mapLayer) { 
            this.mapLayer.depth = 1;
            this.map.setLayer(this.mapLayer);
        }

        if (this.input.keyboard) {
            //  Left
            this.input.keyboard.on("keydown-A", () => {
                move(this.map, "left");
            });
            this.input.keyboard.on("keydown-LEFT", () => {
                move(this.map, "left");
            });

            //  Right
            this.input.keyboard.on("keydown-D", () => {
                move(this.map, "right");
            });
            this.input.keyboard.on("keydown-RIGHT", () => {
                move(this.map, "right");
            });

            //  Up
            this.input.keyboard.on("keydown-W", () => {
                move(this.map, "up");
            });
            this.input.keyboard.on("keydown-UP", () => {
                move(this.map, "up");
            });

            //  Down
            this.input.keyboard.on("keydown-S", () => {
                move(this.map, "down");
            });
            this.input.keyboard.on("keydown-DOWN", () => {
                move(this.map, "down");
            });
        }

    
    const cameraWidth = this.cameras.main.width;
    const cameraHeight = this.cameras.main.height;

    const mapWidth = this.map.widthInPixels;
    const mapHeight = this.map.heightInPixels;

    this.cameras.main.setScroll(
        (-cameraWidth + mapWidth) / 2,
        (-cameraHeight + mapHeight) / 2
    );
    this.cameras.main.setZoom(2);
    }
}
