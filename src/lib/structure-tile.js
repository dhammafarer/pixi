// structureTile :: (Object, Object) -> Object
const structureTile = (structure, texture) => {
  return Object.assign({}, structure, {texture});
};

export default structureTile;
