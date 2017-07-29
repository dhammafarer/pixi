// case2d :: (Object, Array, Array, Array) -> Object
const case2d = (gridSize, terrainMap, system, structureTiles) => {
  return Object.assign({}, gridSize, terrainMap, system, structureTiles);
};

export default case2d;
