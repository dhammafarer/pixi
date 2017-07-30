import tile from './tile.js';
import vector from './vector.js';

// case2d :: Object -> Object
export const case2d = (options) => {
  validateCase(options);
  let {name, gridSize, terrainTiles, system, structureTiles} = options;

  return Object.assign({}, {
    name,
    gridSize,
    terrainTiles,
    system,
    structureTiles});
};

function  validateCase (options) {
  let errors = [];
  validateTerrainMapSize(errors, options);
  if (errors.length) throw `Validation Error: ${options.name} contains errors: ${errors}`;
}

// validateTerrainMapSize :: (Object, Array) -> undefined
function validateTerrainMapSize (errors, {terrainTiles, gridSize}) {
  if (terrainTiles.some(tile => tile.position.greaterThan(gridSize))) {
    errors.push('terrain map is larger than grid');
  }
}

// flatmapToTilesArray :: Array -> Array
export function flatmapToTilesArray (objectsMap) {
  return objectsMap
    .map((col, y) => col
      .map((texture, x) => {
        return tile({texture, position: vector(x, y)});
      })
    ).reduce((a, b) => a.concat(b));
}
