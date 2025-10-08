import { Modifier, createStandardTiers } from './types';

export const SPELL_DAMAGE_MODIFIERS: { [key: string]: Modifier } = {
  coldDamageFlat: {
    id: 'coldDamageFlat',
    name: 'Added Cold Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Frosty',
    displayFormat: '+{value} Cold Damage to Spells',
    tiers: createStandardTiers(1, 2, 18, 28)
  },

  fireDamageFlat: {
    id: 'fireDamageFlat',
    name: 'Added Fire Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Burning',
    displayFormat: '+{value} Fire Damage to Spells',
    tiers: createStandardTiers(1, 2, 18, 28)
  },

  lightningDamageFlat: {
    id: 'lightningDamageFlat',
    name: 'Added Lightning Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Shocking',
    displayFormat: '+{value} Lightning Damage to Spells',
    tiers: createStandardTiers(1, 3, 35, 40)
  },

  voidDamageFlat: {
    id: 'voidDamageFlat',
    name: 'Added Void Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Voidtouched',
    displayFormat: '+{value} Void Damage to Spells',
    tiers: createStandardTiers(1, 2, 18, 28)
  }
};

