export default function isometricGrid ({gridSize, padding, tile}) {
  return {
    tileCoords: vector => {
      return {
        x: padding[0] + tile.width * (gridSize.x - vector.x + vector.y) / 2,
        y: padding[1] + tile.height * (vector.x + vector.y) / 2
      };
    },
    pointCoords: vector =>  {
      return {
        x: padding[0] + tile.width * (gridSize.x - vector.x + vector.y + 1) / 2,
        y: padding[1] + tile.height * (vector.x + vector.y) / 2
      };
    }
  };
}
