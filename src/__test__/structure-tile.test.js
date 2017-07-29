/* global jest, it, describe, expect */
import structureTile from '../lib/structure-tile.js';
const vector = jest.fn().mockReturnValue({});

describe('structure-tile', () => {
  describe('given structure and texture as required arguments', () => {
    it('returns an object with name, data, texture filename and size', () => {
      let texture = {filename: 'house.png', size: vector(1, 2)};
      let name = 'house';
      let position = vector(0, 0);
      let result = structureTile({name, position, texture});

      expect(result.name).toEqual(name);
      expect(result.position).toEqual(position);
      expect(result.texture.filename).toEqual(texture.filename);
      expect(result.texture.size).toEqual(texture.size);
    });
  });
});
