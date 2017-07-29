import powerSystem from '../lib/power-system.js';

export const fushanMicrogrid = powerSystem([
  {name: 'Diesel Generator', type: 'generator', data: {}},
  {name: 'House', type: 'consumer', data: {}}
]);
