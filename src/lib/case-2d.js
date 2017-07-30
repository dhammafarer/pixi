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
  validateTerrainSize(errors, options);
  if (errors.length) throw `Validation Error: ${options.name} contains errors: ${errors.join('\n')}`;
}

// validateTerrainMapSize :: (Object, Array) -> undefined
function validateTerrainSize (errors, {terrainTiles, gridSize}) {
  if (terrainTiles.some(tile => tile.position.greaterThan(gridSize))) {
    errors.push('terrain map is larger than grid');
  }
}

function validateStructuresPlacement (errors, {terrainTiles, structureTiles}) {
  structureTiles.forEach(st => {
    if(!terrainTiles.find(tt => st.position.equals(tt.position))) {
      errors.push(`structureTile at position ${st.position} has no terrain tile`);
    }
  });
}

function validateStructuresOverlap (errors, {terrainTiles, gridSize}) {
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
    )
    .reduce((a, b) => a.concat(b))
    .filter(el => el.texture);
}
