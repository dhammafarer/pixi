/* global jest, it, describe, expect */
import structureTile from '../lib/structure-tile.js';
const vector = jest.fn().mockReturnValue({});

describe('structure-tile', () => {
  describe('given structure and texture as required arguments', () => {
    it('returns an object with name, data, texture filename and size', () => {
      let structure = {name: 'factory', type: 'generator'};
      let texture = {filename: 'file.png', size: vector(1, 2)};
      let result = structureTile(structure, texture);

      expect(result.name).toBeDefined();
      expect(result.type).toBeDefined();
      expect(result.texture.filename).toBeDefined();
      expect(result.texture.size).toBeDefined();
    });
  });
});
