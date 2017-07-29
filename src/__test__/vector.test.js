/* globals describe, it, expect */
import vector from '../lib/vector.js';

describe('vector', () => {
  describe('returns a vector', () => {
    it('with an x and y coordinate', () => {
      let v = vector(1,2);
      expect(v.x()).toEqual(1);
      expect(v.y()).toEqual(2);
    });
  });
});
