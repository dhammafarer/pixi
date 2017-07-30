/* global beforeEach, jest, it, describe, expect */
import case2d from '../lib/case-2d.js';
const vector = jest.fn((x, y) => {return {x, y};});

describe('case2d', () => {
  let options = {};
  beforeEach(() => {
    let gridSize = vector(1, 1);
    let terrainMap = [[{}]];
    let system = [];
    let structureTiles = [];
    options = {gridSize, terrainMap, system, structureTiles};
  });

  it('returns case data for rendering in 2d', () => {
    let project = case2d(options);
    expect(project).toEqual({
      gridSize: vector(1, 1),
      terrainTiles: [{texture: {}, position: vector(0, 0), data: {}}],
      system: options.system,
      structureTiles: options.structureTiles
    });
  });

  it('throws an error when terrainMap does not fit gridSize', () => {
    options.gridSize = vector(2, 2);
    options.terrainMap = [
      [{}, {}, {}],
      [{}, {}, {}]
    ];
    expect(() => case2d(options)).toThrow('terrain map is larger than grid');
  });
});
