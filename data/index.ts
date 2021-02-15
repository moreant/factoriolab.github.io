import { AppData } from '~/models';
import app from './app/data.json';

export { app };
export const data: AppData = {
  app,
  base: [
    { id: '1.1', name: '1.1.19' },
    { id: '1.0', name: '1.0.0' },
    { id: '.17', name: '0.17.79' },
    { id: '.16', name: '0.16.51' },
    { id: 'bio', name: 'Bio Industries' },
    { id: 'bob', name: 'Bob\'s Mods' },
    { id: 'bobang', name: 'Bob\'s & Angel\'s' },
    { id: 'dsp', name: 'Dyson Sphere Program' },
    { id: 'fep', name: 'FactorioExtended Plus' },
    { id: 'ir2', name: 'Industrial Revolution 2' },
    { id: 'kr2', name: 'Krastorio 2' },
    { id: 'kr2sxp', name: 'Krastorio 2 + SE' },
    { id: 'pys', name: 'Pyanodons' },
    { id: 'pysalf', name: 'Pyanodons + AL' },
    { id: 'sea', name: 'Sea Block' },
    { id: 'sxp', name: 'Space Exploration' },
    { id: 'xan', name: 'Xander Mod' },
  ],
  mods: [
    {
      id: 'res',
      name: 'Infinite Research',
      compatibleIds: ['1.1', '1.0', '.18', '.17', '.16'],
    },
  ],
  v0: [
    '1.1',
    '1.0',
    '0.17',
    '0.16',
    'bio-industries',
    'bobs',
    'bobs-angels',
    'dsp',
    'factorio-extended-plus',
    'industrial-revolution',
    'krastorio2',
    'krastorio2+se',
    'pyanodons',
    'pyanodons+al',
    'seablock',
    'space-exploration',
    'xander'
  ],
  hash: [
    '1.1',
    '1.0',
    '.17',
    '.16',
    'bio',
    'bob',
    'bobang',
    'dsp',
    'fep',
    'ir2',
    'kr2',
    'kr2sxp',
    'pys',
    'pysalf',
    'sea',
    'sxp',
    'xan'
  ],
};
