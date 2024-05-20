import { OBJECTS_MAPPING } from './constants';

const MOVES = {
  up: {
    x: 0,
    y: -1,
  },
  down: {
    x: 0,
    y: 1,
  },
  left: {
    x: -1,
    y: 0,
  },
  right: {
    x: 1,
    y: 0,
  },
};

export const move = (
  map: Phaser.Tilemaps.Tilemap,
  direction: 'up' | 'down' | 'left' | 'right',
) => {
  const move = MOVES[direction];
  const player = map.findByIndex(OBJECTS_MAPPING.player);
  const nextTile = map.getTileAt(player!.x + move.x, player!.y + move.y, true);

  if (nextTile && player) {
    if (nextTile.index === OBJECTS_MAPPING.empty) {
      map.putTileAt(OBJECTS_MAPPING.empty, player.x, player.y);
      map.putTileAt(OBJECTS_MAPPING.player, player.x + move.x, player.y + move.y);
      return;
    }

    if (nextTile.index === OBJECTS_MAPPING.pushableBox) {
      const nextNextTile = map.getTileAt(player.x + move.x * 2, player.y + move.y * 2, true);
      if (nextNextTile && nextNextTile.index === OBJECTS_MAPPING.empty) {
        map.putTileAt(OBJECTS_MAPPING.empty, player.x, player.y);
        map.putTileAt(OBJECTS_MAPPING.player, player.x + move.x, player.y + move.y);
        map.putTileAt(OBJECTS_MAPPING.pushableBox, player.x + move.x * 2, player.y + move.y * 2);
      }
    }
  }
};
