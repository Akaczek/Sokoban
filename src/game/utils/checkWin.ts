export const checkWin = (map: Phaser.Tilemaps.Tilemap) => {
  const colored_blocks_layer = map.getLayer("blocks_colored");

  const columns = colored_blocks_layer?.tilemapLayer.tileset[0].columns;
  const rows = colored_blocks_layer?.tilemapLayer.tileset[0].rows;
  const numberOfTiles = colored_blocks_layer?.tilemapLayer.tileset[0].total;
  const firstTile = map.findByIndex(1, 0, false, 'blocks_colored');

  let isWin = true;

  if (numberOfTiles && firstTile && columns && rows) {
    for (let i = 0; i < numberOfTiles; i++) {
      const x = firstTile.x + (i % columns);
      const y = firstTile.y + (Math.floor(i / rows));
      const tile = map.getTileAt(x, y, false, 'blocks_colored')
      console.log(tile);
      if (!tile) {
        isWin = false;
      }
    }
  }

  return isWin;
};
