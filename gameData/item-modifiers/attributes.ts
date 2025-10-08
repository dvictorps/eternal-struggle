import { Modifier, createStandardTiers } from './types';

export const ATTRIBUTE_MODIFIERS: { [key: string]: Modifier } = {
  strengthFlat: {
    id: 'strengthFlat',
    name: 'Strength',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of Strength',
    displayFormat: '+{value} Strength',
    tiers: createStandardTiers(5, 10, 51, 55)
  },

  dexterityFlat: {
    id: 'dexterityFlat',
    name: 'Dexterity',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of Dexterity',
    displayFormat: '+{value} Dexterity',
    tiers: createStandardTiers(5, 10, 51, 55)
  },

  intelligenceFlat: {
    id: 'intelligenceFlat',
    name: 'Intelligence',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of Intelligence',
    displayFormat: '+{value} Intelligence',
    tiers: createStandardTiers(5, 10, 51, 55)
  }
};

