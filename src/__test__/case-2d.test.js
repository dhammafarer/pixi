/* global beforeEach, jest, it, describe, expect */
import {case2d, flatmapToTilesArray} from '../lib/case-2d.js';
const vector = jest.fn((x, y) => {return {x, y};});

describe('case2d', () => {
  let options = {};
  beforeEach(() => {
    let name = 'grid project';
    let gridSize = vector(1, 1);
    let terrainTiles = flatmapToTilesArray([
      [{}]
    ]);
    let system = [];
    let structureTiles = [];
    options = {gridSize, terrainTiles, system, structureTiles};
  });

  it('returns case data for rendering in 2d', () => {
    let project = case2d(options);
    expect(project).toEqual({
      gridSize: vector(1, 1),
      terrainTiles: options.terrainTiles,
      system: options.system,
      structureTiles: options.structureTiles
    });
  });

  describe('throws an error when', () => {
    it('terrainMap does not fit gridSize', () => {
      options.gridSize = vector(2, 2);
      options.terrainTiles = flatmapToTilesArray([
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}]
      ]);
      expect(() => case2d(options)).toThrow(/larger than grid/);
    });
  });
});

describe('flatmapToTilesArray', () => {
  it('flattens an array of tiles', () => {
    let tilesMap = [[{}, {}], [{}]];
    let result = flatmapToTilesArray(tilesMap);
    expect(result.length).toBe(3);
  });

  it('filters out tiles without a texture', () => {
    let tilesMap = [[{}, null]];
    let result = flatmapToTilesArray(tilesMap);

    expect(result.length).toBe(1);
  });
});
