export default function vector (x, y) {
  return {
    x,
    y,
    greaterThan: v2 => (x > v2.x || y > v2.y)
  };
}
