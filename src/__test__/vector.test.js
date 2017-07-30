/* globals describe, it, expect */
import vector from '../lib/vector.js';

describe('vector', () => {
  describe('returns a vector', () => {
    it('with an x and y coordinate', () => {
      let v = vector(1,2);
      expect(v.x).toEqual(1);
      expect(v.y).toEqual(2);
    });
  });

  describe('can compare vectors', () => {
    it('with a greaterThan method', () => {
      let v = vector(2,2);
      let v2 = vector(1,1);

      expect(v.greaterThan(v2)).toBe(true);
    });
  });
});
