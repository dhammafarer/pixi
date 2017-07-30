import tile from './tile.js';
import vector from './vector.js';

// case2d :: (Object, Array, Array, Array) -> Object
const case2d = ({gridSize, terrainMap, system, structureTiles}) => {
  validateTerrainMapSize(gridSize, terrainMap);

  return Object.assign({}, {
    gridSize,
    terrainTiles: flatmapToTilesArray(terrainMap),
    system,
    structureTiles});
};

export default case2d;

function validateTerrainMapSize (gridSize, terrainMap) {
  if (terrainMap.length > gridSize.y ||
    terrainMap.some(row => row.length > gridSize.x)) {
    throw('terrain map is larger than grid');
  }
}

// flatmapToTilesArray :: Array -> Array
function flatmapToTilesArray (objectsMap) {
  return objectsMap
    .map((col, y) => col
      .map((texture, x) => {
        return tile({texture, position: vector(x, y)});
      })
    ).reduce((a, b) => a.concat(b));
}
