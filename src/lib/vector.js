export default function vector (x, y) {
  return {
    x,
    y,
    toString: () => `(${x},${y})`,
    greaterThan: v2 => (x > v2.x || y > v2.y),
    equals: v2 => (x == v2.x && y == v2.y)
  };
}
