import { EventBus } from '../EventBus';

export const getSliceOfMatrix = (
  matrix: number[][],
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return matrix.slice(y, y + height).map((row) => row.slice(x, x + width));
};

export const checkForDeadlocks = (
  map: Phaser.Tilemaps.Tilemap,
  box: Phaser.Tilemaps.Tile
) => {
  // corner deadlock

  const goalTileAtBox = map.getTileAt(box.x, box.y, true, "goal");
  const coloredTileAtBox = map.getTileAt(box.x, box.y, true, "blocks_colored");

  const indexMatrix = map.layers[0].data.map((row) =>
    row.map((tile) => tile.index)
  );

  const boxPositionMatrix = getSliceOfMatrix(
    indexMatrix,
    box.x - 1,
    box.y - 1,
    3,
    3
  );

  if (
    (boxPositionMatrix[0][1] === 1 || 
    boxPositionMatrix[2][1] === 1 ) &&
    (boxPositionMatrix[1][0] === 1 ||
    boxPositionMatrix[1][2] === 1)
  ) {
    if (goalTileAtBox && coloredTileAtBox) {
      if (goalTileAtBox.index !== coloredTileAtBox?.index) {
        EventBus.emit("deadlock");
      }
    }
  }
};
