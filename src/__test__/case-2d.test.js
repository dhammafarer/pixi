/* global jest, it, describe, expect */
import case2d from '../lib/case-2d.js';
const vector = jest.fn((x, y) => {return {x, y};});

describe('case2d', () => {
  it('returns case data for rendering in 2d', () => {
    let gridSize = vector(1, 1);
    let terrainMap = [[{}]];
    let system = [];
    let structureTiles = [];
    let options = {gridSize, terrainMap, system, structureTiles};
    let project = case2d(options);

    expect(project).toEqual({
      gridSize,
      terrainMap,
      system,
      structureTiles
    });
  });
});
