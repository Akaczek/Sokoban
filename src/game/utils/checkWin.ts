import { OBJECTS_MAPPING } from "./constants";

export const checkWin = (map: Phaser.Tilemaps.Tilemap) => {
  const mapLayer = map.getLayer("map");
  const goalLayer = map.getLayer("goal");
  const colored_blocks_layer = map.getLayer("blocks_colored");

  const boxTiles = mapLayer?.data.reduce((acc, row) => {
    const boxes = row.filter(
      (tile) => tile.index === OBJECTS_MAPPING.pushableBox
    );
    return acc.concat(boxes);
  }, [] as Phaser.Tilemaps.Tile[]);

  const goalTiles = goalLayer?.data.reduce((acc, row) => {
    const goals = row.filter((tile) => tile.index !== OBJECTS_MAPPING.empty);
    return acc.concat(goals);
  }, [] as Phaser.Tilemaps.Tile[]);

  const coloredBlocks = colored_blocks_layer?.data.reduce((acc, row) => {
    const colored_blocks = row.filter(
      (tile) => tile.index !== OBJECTS_MAPPING.empty
    );
    return acc.concat(colored_blocks);
  }, [] as Phaser.Tilemaps.Tile[]);

  console.log(goalTiles?.length, boxTiles?.length, coloredBlocks?.length);

  let win = true;
  if (goalTiles && boxTiles && coloredBlocks && goalTiles.length === boxTiles.length) {
    for (let i = 0; i < goalTiles.length; i++) {
      const isColoredTaken = coloredBlocks.some((coloredBlock) => {
        if (goalTiles[i].x === coloredBlock.x && goalTiles[i].y === coloredBlock.y) {
          if (goalTiles[i].index === coloredBlock.index) {
            return true;
          }
        }
        return false;
      });

      if (!isColoredTaken) {
        win = false;
        break;
      }
    }
  }

  return win;
};
