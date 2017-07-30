export default function isometricGrid ({gridSize, padding, tile}) {
  const tileCoordsTable = [];
  return {
    tileCoords: vector => {
      return {
        x: padding[0] + (tile.width / 2) * (gridSize.x - vector.x + vector.y),
        y: padding[1] + (tile.height / 2) * (vector.x + vector.y)
      };
    }
  };
}
