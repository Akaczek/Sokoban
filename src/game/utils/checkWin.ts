import { OBJECTS_MAPPING } from "./constants";

export const checkWin = (map: Phaser.Tilemaps.Tilemap) => {
  const mapLayer = map.getLayer("map");
  const goalLayer = map.getLayer("goal");

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

  let win = true;
  if (goalTiles && boxTiles && goalTiles.length === boxTiles.length) {
    for (let i = 0; i < goalTiles.length; i++) {
      const isGoalTaken = boxTiles.find((boxTile) => {
        if (goalTiles[i].x === boxTile.x && goalTiles[i].y === boxTile.y) {
          return true;
        }
        return false;
      });

      if (!isGoalTaken) {
        win = false;
        break;
      }
    }
  }

  return win;
};
