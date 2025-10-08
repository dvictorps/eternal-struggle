import { Modifier, createStandardTiers } from './types';

export const RESISTANCE_MODIFIERS: { [key: string]: Modifier } = {
  coldResistance: {
    id: 'coldResistance',
    name: 'Cold Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Frost Resistance',
    displayFormat: '+{value}% Cold Resistance',
    tiers: createStandardTiers(5, 10, 51, 55)
  },

  fireResistance: {
    id: 'fireResistance',
    name: 'Fire Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Flame Resistance',
    displayFormat: '+{value}% Fire Resistance',
    tiers: createStandardTiers(5, 10, 51, 55)
  },

  lightningResistance: {
    id: 'lightningResistance',
    name: 'Lightning Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Storm Resistance',
    displayFormat: '+{value}% Lightning Resistance',
    tiers: createStandardTiers(5, 10, 51, 55)
  },

  voidResistance: {
    id: 'voidResistance',
    name: 'Void Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Void Resistance',
    displayFormat: '+{value}% Void Resistance',
    tiers: createStandardTiers(5, 10, 51, 55)
  }
};

