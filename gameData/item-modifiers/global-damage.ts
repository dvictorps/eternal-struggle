import { Modifier, createStandardTiers } from './types';

export const GLOBAL_DAMAGE_MODIFIERS: { [key: string]: Modifier } = {
  globalPhysicalDamageIncrease: {
    id: 'globalPhysicalDamageIncrease',
    name: 'Physical Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of Physical Damage',
    displayFormat: '+{value}% Physical Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalColdDamageIncrease: {
    id: 'globalColdDamageIncrease',
    name: 'Cold Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of Cold Damage',
    displayFormat: '+{value}% Cold Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalFireDamageIncrease: {
    id: 'globalFireDamageIncrease',
    name: 'Fire Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of Fire Damage',
    displayFormat: '+{value}% Fire Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalLightningDamageIncrease: {
    id: 'globalLightningDamageIncrease',
    name: 'Lightning Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of Lightning Damage',
    displayFormat: '+{value}% Lightning Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalVoidDamageIncrease: {
    id: 'globalVoidDamageIncrease',
    name: 'Void Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of Void Damage',
    displayFormat: '+{value}% Void Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalSpellDamageIncrease: {
    id: 'globalSpellDamageIncrease',
    name: 'Spell Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt', 'staff', 'wand'],
    suffix: 'of Spell Damage',
    displayFormat: '+{value}% Spell Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalElementalDamageIncrease: {
    id: 'globalElementalDamageIncrease',
    name: 'Elemental Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Elemental Damage',
    displayFormat: '+{value}% Elemental Damage',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalElementalDamageWithAttacksIncrease: {
    id: 'globalElementalDamageWithAttacksIncrease',
    name: 'Elemental Damage with Attacks',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'belt'],
    suffix: 'of Elemental Fury',
    displayFormat: '+{value}% Elemental Damage with Attacks',
    isGlobalStat: true,
    tiers: createStandardTiers(5, 8, 41, 45)
  },

  globalAttackSpeedIncrease: {
    id: 'globalAttackSpeedIncrease',
    name: 'Attack Speed',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon'],
    suffix: 'of Swiftness',
    displayFormat: '+{value}% Attack Speed',
    isGlobalStat: true,
    tiers: createStandardTiers(3, 5, 30, 33)
  },

  globalCastSpeedIncrease: {
    id: 'globalCastSpeedIncrease',
    name: 'Cast Speed',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['ring', 'amulet', 'gloves', 'belt'],
    suffix: 'of Casting',
    displayFormat: '+{value}% Cast Speed',
    isGlobalStat: true,
    tiers: createStandardTiers(3, 5, 30, 33)
  },

  globalCriticalChanceIncrease: {
    id: 'globalCriticalChanceIncrease',
    name: 'Critical Strike Chance',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'belt'],
    suffix: 'of Critical Strikes',
    displayFormat: '+{value}% Critical Strike Chance',
    isGlobalStat: true,
    tiers: createStandardTiers(1, 1.5, 5.6, 6)
  }
};
