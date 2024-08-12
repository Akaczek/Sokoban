import { OBJECTS_MAPPING } from "./constants";

export const MOVES = {
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
  eventEmitter: Phaser.Events.EventEmitter,
  direction: "up" | "down" | "left" | "right"
) => {
  const move = MOVES[direction];
  const player = map.findByIndex(OBJECTS_MAPPING.player);
  const nextTile = map.getTileAt(player!.x + move.x, player!.y + move.y, true);
  const nextTileOnColored = map.getTileAt(
    player!.x + move.x,
    player!.y + move.y,
    true,
    "blocks_colored"
  );

  console.log(nextTileOnColored);

  if (nextTile && nextTileOnColored && player) {
    if (
      nextTileOnColored.index === OBJECTS_MAPPING.empty &&
      nextTile.index === OBJECTS_MAPPING.empty
    ) {
      console.log("move1 ");
      map.putTileAt(OBJECTS_MAPPING.empty, player.x, player.y);
      map.putTileAt(
        OBJECTS_MAPPING.player,
        player.x + move.x,
        player.y + move.y
      );
      return;
    }

    const nextNextTileOnColored = map.getTileAt(
      player.x + move.x * 2,
      player.y + move.y * 2,
      true,
      "blocks_colored"
    );
    const nextNextTile = map.getTileAt(
      player.x + move.x * 2,
      player.y + move.y * 2,
      true
    );
    if (
      nextNextTileOnColored &&
      nextNextTileOnColored.index === OBJECTS_MAPPING.empty &&
      nextNextTile?.index === OBJECTS_MAPPING.empty &&
      nextTileOnColored.index > OBJECTS_MAPPING.block
    ) {
      console.log("move2 ");
      map.putTileAt(OBJECTS_MAPPING.empty, player.x, player.y, true, "map");
      map.putTileAt(
        OBJECTS_MAPPING.player,
        player.x + move.x,
        player.y + move.y,
        true,
        "map"
      );
      map.putTileAt(
        nextTileOnColored.index,
        player.x + move.x * 2,
        player.y + move.y * 2,
        true,
        "blocks_colored"
      );
      map.putTileAt(
        OBJECTS_MAPPING.empty,
        player.x + move.x,
        player.y + move.y,
        true,
        "blocks_colored"
      );

      eventEmitter.emit("checkWin");
    }
  }
};
