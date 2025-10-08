import { Modifier, createStandardTiers } from './types';

export const UTILITY_MODIFIERS: { [key: string]: Modifier } = {
  movementSpeedIncrease: {
    id: 'movementSpeedIncrease',
    name: 'Movement Speed',
    category: 'utility',
    type: 'increased',
    applicableTo: ['boots'],
    suffix: 'of Speed',
    displayFormat: '+{value}% Movement Speed',
    tiers: createStandardTiers(5, 8, 41, 45)
  }
};

