export default function graphic ({width, height, gridSize, ratio = 1.732, minPadding = 1}) {
  let tw = width / (gridSize.x + 1 + minPadding * 2);
  let th = height / (gridSize.y + 1 + minPadding * 2);

  if (th < (tw / ratio)) {
    tw = th * ratio;
  } else {
    th = tw / ratio;
  }

  let padding = [
    (width - tw * (gridSize.x + 1)) / 2,
    (height - th * (gridSize.y + 1)) / 2,
  ];

  return {
    width,
    height,
    padding,
    tile: {
      width: tw,
      height: th
    }
  };
}
