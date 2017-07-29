// structureTile :: (Object, Object) -> Object
const structureTile = ({name, texture, position}) => {
  return Object.assign({}, {name, texture, position});
};

export default structureTile;
