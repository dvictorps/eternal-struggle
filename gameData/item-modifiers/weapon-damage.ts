import { Modifier, createStandardTiers } from './types';

export const WEAPON_DAMAGE_MODIFIERS: { [key: string]: Modifier } = {
  physicalDamageFlat: {
    id: 'physicalDamageFlat',
    name: 'Added Physical Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    prefix: 'Heavy',
    displayFormat: '+{value} Physical Damage to Attacks',
    tiers: createStandardTiers(1, 2, 18, 28)
  },

  physicalDamageIncrease: {
    id: 'physicalDamageIncrease',
    name: 'Physical Damage with Attacks',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon'],
    suffix: 'of Slaying',
    displayFormat: '+{value}% Physical Damage with Attacks',
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  attackSpeedIncrease: {
    id: 'attackSpeedIncrease',
    name: 'Attack Speed',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    suffix: 'of Swiftness',
    displayFormat: '+{value}% Attack Speed',
    tiers: createStandardTiers(3, 5, 30, 33)
  },

  criticalChanceIncrease: {
    id: 'criticalChanceIncrease',
    name: 'Critical Strike Chance',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    suffix: 'of Precision',
    displayFormat: '+{value}% Critical Strike Chance',
    tiers: createStandardTiers(1, 1.5, 5.6, 6)
  }
};

