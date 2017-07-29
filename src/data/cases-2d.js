import case2d from '../lib/case-2d.js';
import vector from '../lib/vector.js';
import structureTile from '../lib/structure-tile.js';
import { fushanMicrogrid } from './power-systems.js';
import { grass, water } from './terrain-tiles.js';
import { factory, house } from './structure-textures.js';

export const fushan = case2d({
  gridSize: vector(3,3),
  terrainMap: [
    [grass, grass, grass],
    [grass, grass, grass],
    [water, water, water]
  ],
  system: fushanMicrogrid,
  structureTiles: [
    structureTile({name: 'House', position: vector(1, 1), texture: house}),
    structureTile({name: 'Diesel Generator', position: vector(1, 1), texture: factory})
  ]
});
