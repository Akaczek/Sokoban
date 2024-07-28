export const checkWin = (map: Phaser.Tilemaps.Tilemap) => {
  const colored_blocks_layer = map.getLayer("blocks_colored");

  const columns = colored_blocks_layer?.tilemapLayer.tileset[0].columns;
  const rows = colored_blocks_layer?.tilemapLayer.tileset[0].rows;
  const numberOfTiles = colored_blocks_layer?.tilemapLayer.tileset[0].total;
  const firstTile = map.findByIndex(1, 0, false, 'blocks_colored');

  let isWin = true;

  if (numberOfTiles && firstTile && columns && rows) {
    for (let column = 0; column < columns; column++) {
      for (let row = 0; row < rows; row++) {
        const tile = map.getTileAt(firstTile.x + column, firstTile.y + row, false, 'blocks_colored')
        if(!tile) {
          isWin = false;
        }
      }
    }
  }

  return isWin;
};
