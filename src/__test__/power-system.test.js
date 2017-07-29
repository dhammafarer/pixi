/* global jest, it, describe, expect */
import powerSystem from '../lib/power-system.js';

describe('powerSystem', () => {
  describe('given an array of power components', () => {
    it('returns an object with components', () => {
      let c1 = {name: 'one', type: 'producer'};
      expect(powerSystem([c1]).components).toEqual([c1]);
    });
  });
});
