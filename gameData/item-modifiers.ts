// Import necessary types from items.ts
import { EquipmentType, WeaponType } from './items';

// ═══════════════════════════════════════════════════════════
// 8. MODIFIER TYPES
// ═══════════════════════════════════════════════════════════

export const MODIFIER_TYPES = {
  flat: {
    id: 'flat',
    name: 'Flat',
    description: 'Adds a flat value to a stat'
  },
  increased: {
    id: 'increased',
    name: 'Increased',
    description: 'Increases a stat by a percentage'
  },
  more: {
    id: 'more',
    name: 'More',
    description: 'Multiplies a stat by a percentage'
  },
  percent: {
    id: 'percent',
    name: 'Percent',
    description: 'Direct percentage value'
  }
} as const;

export type ModifierType = typeof MODIFIER_TYPES[keyof typeof MODIFIER_TYPES];

// Type for applicableTo property in modifiers
export type ModifierApplicableTo = EquipmentType | WeaponType;

// 9. TIER STRUCTURE
interface ModifierTier {
  tier: number; // 1-10 (1 = best, 10 = worst)
  minItemLevel: number;
  maxItemLevel: number;
  valueRange: readonly [number, number];
}

// Interface for modifier objects
export interface Modifier {
  id: string;
  name: string;
  category: string;
  type: string;
  applicableTo: ModifierApplicableTo[];
  prefix?: string;
  suffix?: string;
  displayFormat?: string;
  isGlobalStat?: boolean;
  tiers?: ModifierTier[];
  tier?: ModifierTier;
}

// ═══════════════════════════════════════════════════════════
// 🎯 MODIFIERS COM TIERS
// ═══════════════════════════════════════════════════════════

export const MODIFIERS: { [key: string]: Modifier } = {
  // ═══════════════════════════════════════════════════════════
  // ⚔️ WEAPON DAMAGE - ATTACK (LOCAL & FLAT)
  // ═══════════════════════════════════════════════════════════
  
  physicalDamageFlat: {
    id: 'physicalDamageFlat',
    name: 'Added Physical Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    prefix: 'Heavy',
    displayFormat: '+{value} Physical Damage to Attacks',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 4] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 6] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 8] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [6, 10] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [8, 12] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [10, 15] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [12, 18] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [15, 22] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [18, 28] }
    ]
  },

  physicalDamageIncrease: {
    id: 'physicalDamageIncrease',
    name: 'Physical Damage with Attacks',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon'],
    suffix: 'of Slaying',
    displayFormat: '+{value}% Physical Damage with Attacks',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
  },

  attackSpeedIncrease: {
    id: 'attackSpeedIncrease',
    name: 'Attack Speed',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    suffix: 'of Swiftness',
    displayFormat: '+{value}% Attack Speed',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [6, 8] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [9, 11] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [12, 14] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [15, 17] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [18, 20] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [21, 23] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [24, 26] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [27, 29] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [30, 33] }
    ]
  },

  criticalChanceIncrease: {
    id: 'criticalChanceIncrease',
    name: 'Critical Strike Chance',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    suffix: 'of Precision',
    displayFormat: '+{value}% Critical Strike Chance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 1.5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [1.6, 2] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [2.1, 2.5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [2.6, 3] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [3.1, 3.5] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [3.6, 4] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [4.1, 4.5] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [4.6, 5] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [5.1, 5.5] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [5.6, 6] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🧪 SPELL DAMAGE - MAGIC (LOCAL & FLAT)
  // ═══════════════════════════════════════════════════════════

  coldDamageFlat: {
    id: 'coldDamageFlat',
    name: 'Added Cold Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Frosty',
    displayFormat: '+{value} Cold Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 4] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 6] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 8] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [6, 10] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [8, 12] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [10, 15] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [12, 18] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [15, 22] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [18, 28] }
    ]
  },

  fireDamageFlat: {
    id: 'fireDamageFlat',
    name: 'Added Fire Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Burning',
    displayFormat: '+{value} Fire Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 4] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 6] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 8] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [6, 10] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [8, 12] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [10, 15] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [12, 18] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [15, 22] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [18, 28] }
    ]
  },

  lightningDamageFlat: {
    id: 'lightningDamageFlat',
    name: 'Added Lightning Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Shocking',
    displayFormat: '+{value} Lightning Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 3] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 6] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 10] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [11, 14] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [15, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [19, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [23, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [27, 30] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [31, 34] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [35, 40] }
    ]
  },

  voidDamageFlat: {
    id: 'voidDamageFlat',
    name: 'Added Void Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Voidtouched',
    displayFormat: '+{value} Void Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 4] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 6] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 8] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [6, 10] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [8, 12] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [10, 15] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [12, 18] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [15, 22] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [18, 28] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 💍 JEWELRY MODIFIERS - ATTRIBUTES
  // ═══════════════════════════════════════════════════════════

  strengthFlat: {
    id: 'strengthFlat',
    name: 'Strength',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of Strength',
    displayFormat: '+{value} Strength',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  dexterityFlat: {
    id: 'dexterityFlat',
    name: 'Dexterity',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of Dexterity',
    displayFormat: '+{value} Dexterity',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  intelligenceFlat: {
    id: 'intelligenceFlat',
    name: 'Intelligence',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of Intelligence',
    displayFormat: '+{value} Intelligence',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🛡️ DEFENSE MODIFIERS
  // ═══════════════════════════════════════════════════════════

  globalArmorIncrease: {
    id: 'globalArmorIncrease',
    name: 'Armor',
    category: 'defensive',
    type: 'increased',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    suffix: 'of Protection',
    displayFormat: '+{value}% Armor',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 15] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [16, 21] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [22, 27] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [28, 33] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [34, 39] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [40, 45] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [46, 51] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [52, 57] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [58, 63] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [64, 70] }
    ]
  },

  globalEvasionIncrease: {
    id: 'globalEvasionIncrease',
    name: 'Evasion',
    category: 'defensive',
    type: 'increased',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    suffix: 'of Evasion',
    displayFormat: '+{value}% Evasion',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 15] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [16, 21] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [22, 27] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [28, 33] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [34, 39] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [40, 45] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [46, 51] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [52, 57] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [58, 63] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [64, 70] }
    ]
  },

  globalBarrierIncrease: {
    id: 'globalBarrierIncrease',
    name: 'Barrier',
    category: 'defensive',
    type: 'increased',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Warding',
    displayFormat: '+{value}% Barrier',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 15] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [16, 21] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [22, 27] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [28, 33] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [34, 39] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [40, 45] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [46, 51] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [52, 57] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [58, 63] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [64, 70] }
    ]
  },

  healthFlat: {
    id: 'healthFlat',
    name: 'Maximum Life',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Vitality',
    displayFormat: '+{value} Maximum Life',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 20] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [21, 30] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [31, 40] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [41, 50] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [51, 60] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [61, 70] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [71, 80] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [81, 90] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [91, 100] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [101, 110] }
    ]
  },

  manaFlat: {
    id: 'manaFlat',
    name: 'Maximum Mana',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt', 'staff', 'wand'],
    suffix: 'of Insight',
    displayFormat: '+{value} Maximum Mana',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 20] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [21, 30] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [31, 40] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [41, 50] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [51, 60] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [61, 70] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [71, 80] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [81, 90] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [91, 100] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [101, 110] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🔥 RESISTANCE MODIFIERS
  // ═══════════════════════════════════════════════════════════

  coldResistance: {
    id: 'coldResistance',
    name: 'Cold Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Frost Resistance',
    displayFormat: '+{value}% Cold Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  fireResistance: {
    id: 'fireResistance',
    name: 'Fire Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Flame Resistance',
    displayFormat: '+{value}% Fire Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  lightningResistance: {
    id: 'lightningResistance',
    name: 'Lightning Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Storm Resistance',
    displayFormat: '+{value}% Lightning Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  voidResistance: {
    id: 'voidResistance',
    name: 'Void Resistance',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of Void Resistance',
    displayFormat: '+{value}% Void Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [11, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [16, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [21, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [26, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [31, 35] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [36, 40] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [41, 45] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [46, 50] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 55] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🌟 GLOBAL DAMAGE MODIFIERS
  // ═══════════════════════════════════════════════════════════

  globalPhysicalDamageIncrease: {
    id: 'globalPhysicalDamageIncrease',
    name: 'Physical Damage',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of Physical Damage',
    displayFormat: '+{value}% Physical Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
  },

  globalElementalDamageWithAttacksIncrease: {
    id: 'globalElementalDamageWithAttacksIncrease',
    name: 'Elemental Damage with Attacks',
    category: 'offensive',
    type: 'increased',
    applicableTo: ['weapon', 'ring', 'amulet', 'belt'], // armas melee/bow
    suffix: 'of Elemental Fury',
    displayFormat: '+{value}% Elemental Damage with Attacks',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [6, 8] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [9, 11] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [12, 14] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [15, 17] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [18, 20] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [21, 23] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [24, 26] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [27, 29] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [30, 33] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [6, 8] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [9, 11] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [12, 14] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [15, 17] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [18, 20] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [21, 23] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [24, 26] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [27, 29] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [30, 33] }
    ]
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
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 1.5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [1.6, 2] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [2.1, 2.5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [2.6, 3] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [3.1, 3.5] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [3.6, 4] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [4.1, 4.5] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [4.6, 5] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [5.1, 5.5] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [5.6, 6] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🏃 MOVEMENT SPEED MODIFIER
  // ═══════════════════════════════════════════════════════════

  movementSpeedIncrease: {
    id: 'movementSpeedIncrease',
    name: 'Movement Speed',
    category: 'utility',
    type: 'increased',
    applicableTo: ['boots'],
    suffix: 'of Speed',
    displayFormat: '+{value}% Movement Speed',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [9, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [13, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [17, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [21, 24] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [29, 32] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [33, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 40] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [41, 45] }
    ]
  }

} as const;

export type ModifierId = keyof typeof MODIFIERS;

// Helper para pegar tier apropriado baseado no item level
export function getModifierTierForItemLevel(modifierId: ModifierId, itemLevel: number): ModifierTier | null {
  const modifier = MODIFIERS[modifierId];
  if (!modifier.tiers) return null;
  
  const tier = modifier.tiers.find(
    t => itemLevel >= t.minItemLevel && itemLevel <= t.maxItemLevel
  );
  
  return tier || null;
}
