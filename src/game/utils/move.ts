import { OBJECTS_MAPPING } from './constants';

const MOVES = {
  up: {
    x: 0,
    y: -32,
    angle: -90,
  },
  down: {
    x: 0,
    y: 32,
    angle: 90,
  },
  left: {
    x: -32,
    y: 0,
    angle: 180,
  },
  right: {
    x: 32,
    y: 0,
    angle: 0,
  },
};

export const move = (
  layer: Phaser.Tilemaps.TilemapLayer,
  player: Phaser.GameObjects.Image,
  direction: 'up' | 'down' | 'left' | 'right',
) => {
  const move = MOVES[direction];
  const tile = layer.getTileAtWorldXY(player.x + move.x, player.y + move.y, true);
  const nextTile = layer.getTileAtWorldXY(player.x + move.x * 2, player.y + move.y * 2, true);

  if (
    tile.index === OBJECTS_MAPPING.blockA ||
    tile.index === OBJECTS_MAPPING.blockB ||
    (tile.index === OBJECTS_MAPPING.pushableBox && nextTile.index === OBJECTS_MAPPING.blockA) ||
    (tile.index === OBJECTS_MAPPING.pushableBox && nextTile.index === OBJECTS_MAPPING.blockB) ||
    (tile.index === OBJECTS_MAPPING.pushableBox && nextTile.index === OBJECTS_MAPPING.pushableBox)
  ) {
    player.angle = move.angle;
  } else {
    if (tile.index === OBJECTS_MAPPING.pushableBox) {
      layer.putTileAt(OBJECTS_MAPPING.empty, tile.x, tile.y);
      layer.putTileAt(OBJECTS_MAPPING.pushableBox, nextTile.x, nextTile.y);
    }
    player.x += move.x;
    player.y += move.y;
    player.angle = move.angle;
  }
};
