// 1. CATEGORIAS BASE
export const ITEM_CATEGORIES = {
  consumable: {
    id: 'consumable',
    name: 'Consumable',
    description: 'Can be used/consumed'
  },
  equipment: {
    id: 'equipment',
    name: 'Equipment',
    description: 'Can be equipped'
  },
  material: {
    id: 'material',
    name: 'Material',
    description: 'Used in crafting'
  },
  quest: {
    id: 'quest',
    name: 'Quest',
    description: 'Quest item'
  },
  currency: {
    id: 'currency',
    name: 'Currency',
    description: 'Game currency'
  }
} as const;

export type ItemCategory = keyof typeof ITEM_CATEGORIES;

// 2. TIPOS DE EQUIPAMENTO
export const EQUIPMENT_TYPES = {
  weapon: {
    id: 'weapon',
    name: 'Weapon',
    slot: 'mainHand'
  },
  offhand: {
    id: 'offhand',
    name: 'Off-hand/Shield',
    slot: 'offHand'
  },
  helmet: {
    id: 'helmet',
    name: 'Helmet',
    slot: 'head'
  },
  chestplate: {
    id: 'chestplate',
    name: 'Chestplate',
    slot: 'chest'
  },
  leggings: {
    id: 'leggings',
    name: 'Leggings',
    slot: 'legs'
  },
  boots: {
    id: 'boots',
    name: 'Boots',
    slot: 'feet'
  },
  gloves: {
    id: 'gloves',
    name: 'Gloves',
    slot: 'hands'
  },
  ring: {
    id: 'ring',
    name: 'Ring',
    slot: 'ring'
  },
  amulet: {
    id: 'amulet',
    name: 'Amulet',
    slot: 'neck'
  },
  belt: {
    id: 'belt',
    name: 'Belt',
    slot: 'waist'
  }
} as const;

export type EquipmentType = keyof typeof EQUIPMENT_TYPES;

// 3. TIPOS DE ARMA
export const WEAPON_TYPES = {
  sword: {
    id: 'sword',
    name: 'Sword',
    damageType: 'physical',
    attackSpeed: 'medium',
    twoHanded: false
  },
  greatsword: {
    id: 'twoHandedSword',
    name: 'Two-Handed Sword',
    damageType: 'physical',
    attackSpeed: 'slow',
    twoHanded: true
  },
  dagger: {
    id: 'dagger',
    name: 'Dagger',
    damageType: 'physical',
    attackSpeed: 'fast',
    twoHanded: false
  },
  bow: {
    id: 'bow',
    name: 'Bow',
    damageType: 'physical',
    attackSpeed: 'medium',
    twoHanded: true,
  },
  staff: {
    id: 'staff',
    name: 'Staff',
    damageType: 'magic',
    attackSpeed: 'medium',
    twoHanded: true
  },
  wand: {
    id: 'wand',
    name: 'Wand',
    damageType: 'magic',
    attackSpeed: 'fast',
    twoHanded: false
  },
  axe: {
    id: 'axe',
    name: 'Axe',
    damageType: 'physical',
    attackSpeed: 'medium',
    twoHanded: false
  },
  mace: {
    id: 'mace',
    name: 'Mace',
    damageType: 'physical',
    attackSpeed: 'slow',
    twoHanded: false
  },
  twoHandedAxe: {
    id: 'twoHandedAxe',
    name: 'Two-Handed Axe',
    damageType: 'physical',
    attackSpeed: 'slow',
    twoHanded: true
  }
} as const;

export type WeaponType = keyof typeof WEAPON_TYPES;

// 4. TIPOS DE ARMADURA
export const ARMOR_TYPES = {
  silk: {
    id: 'silk',
    name:'Silk',
    baseDefense: 'barrier',
    allowedSlots: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves']
  },
  leather: {
    id: 'leather',
    name: 'Leather',
    baseDefense: 'evasion',
    allowedSlots: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves']
  },
  plate: {
    id: 'plate',
    name: 'Plate',
    baseDefense: 'armour',
    allowedSlots: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves']
  }
} as const;

export type ArmorType = keyof typeof ARMOR_TYPES;

// 5. TIPOS DE CONSUMÍVEL
export const CONSUMABLE_TYPES = {
  potion: {
    id: 'potion',
    name: 'Potion',
    usageType: 'instant'
  },
  scroll: {
    id: 'scroll',
    name: 'Scroll',
    usageType: 'instant',
    consumeOnUse: true
  },
  elixir: {
    id: 'elixir',
    name: 'Elixir',
    usageType: 'duration'
  },
  crystal: {
    id: 'crystal',
    name: 'Crystal',
    usageType: 'instant',
    consumeOnUse: true
  },
} as const;

export type ConsumableType = keyof typeof CONSUMABLE_TYPES;

// 6. RARIDADE
export const RARITIES = {
  common: {
    id: 'common',
    name: 'Common',
    color: '#9ca3af',
    dropRate: 0.70,
    maxMods: 0
  },
  uncommon: {
    id: 'uncommon',
    name: 'Uncommon',
    color: '#22c55e',
    dropRate: 0.20,
    maxMods: 2,
    minMods: 1
  },
  rare: {
    id: 'rare',
    name: 'Rare',
    color: '#f6ca3b',
    dropRate: 0.08,
    maxMods: 4,
    minMods: 4
  },
  epic: {
    id: 'epic',
    name: 'Epic',
    color: '#a855f7',
    dropRate: 0.015,
    maxMods: 5,
    minMods: 5
  },
  legendary: {
    id: 'legendary',
    name: 'Legendary',
    color: '#a30202',
    dropRate: 0.005,
    maxMods: 5,
    minMods: 5,
    bonusMultiplier: 1.1 // +10% em todos valores
  }
} as const;

export type Rarity = keyof typeof RARITIES;

// 7. DAMAGE TYPES
export const DAMAGE_TYPES = {
  attack: 'attack',
  spell: 'spell'
} as const;

export type DamageType = typeof DAMAGE_TYPES[keyof typeof DAMAGE_TYPES];

export const DAMAGE_ELEMENTS = {
  physical: 'physical',
  cold: 'cold',
  fire: 'fire',
  lightning: 'lightning',
  void: 'void'
} as const;

export type DamageElement = typeof DAMAGE_ELEMENTS[keyof typeof DAMAGE_ELEMENTS];

// 8. MODIFIER TYPES
export const MODIFIER_TYPES = {
  flat: 'flat',
  increase: 'increase',
  increaseGlobal: 'increaseGlobal',
  percent: 'percent'
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
    name: 'Increased Physical Damage',
    category: 'offensive',
    type: 'increase',
    applicableTo: ['weapon'],
    prefix: 'Brutal',
    displayFormat: '{value}% increased Physical Damage',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 10] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [8, 15] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [12, 20] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [16, 25] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [20, 30] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [25, 38] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [30, 45] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [38, 55] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [45, 65] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [55, 80] }
    ]
  },

  coldDamageFlat: {
    id: 'coldDamageFlat',
    name: 'Added Cold Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    prefix: 'Frozen',
    displayFormat: '+{value} Cold Damage to Attacks',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 3] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [4, 7] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [5, 9] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [7, 11] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [9, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [11, 17] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 21] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [17, 26] }
    ]
  },

  fireDamageFlat: {
    id: 'fireDamageFlat',
    name: 'Added Fire Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    prefix: 'Burning',
    displayFormat: '+{value} Fire Damage to Attacks',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 3] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [4, 7] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [5, 9] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [7, 11] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [9, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [11, 17] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 21] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [17, 26] }
    ]
  },

  lightningDamageFlat: {
    id: 'lightningDamageFlat',
    name: 'Added Lightning Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    prefix: 'Shocking',
    displayFormat: '+{value} Lightning Damage to Attacks',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 3] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 5] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 7] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 10] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [7, 13] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [9, 16] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [12, 20] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [15, 24] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [19, 29] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [23, 36] }
    ]
  },

  voidDamageFlat: {
    id: 'voidDamageFlat',
    name: 'Added Void Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'gloves'],
    prefix: 'Abyssal',
    displayFormat: '+{value} Void Damage to Attacks',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 3] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [4, 7] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [5, 9] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [7, 11] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [9, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [11, 17] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 21] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [17, 26] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🔮 SPELL DAMAGE (FLAT)
  // ═══════════════════════════════════════════════════════════

  physicalSpellDamageFlat: {
    id: 'physicalSpellDamageFlat',
    name: 'Added Physical Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Forceful',
    displayFormat: '+{value} Physical Damage to Spells',
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

  coldSpellDamageFlat: {
    id: 'coldSpellDamageFlat',
    name: 'Added Cold Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Frost',
    displayFormat: '+{value} Cold Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 3] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [4, 7] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [5, 9] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [7, 11] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [9, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [11, 17] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 21] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [17, 26] }
    ]
  },

  fireSpellDamageFlat: {
    id: 'fireSpellDamageFlat',
    name: 'Added Fire Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Blazing',
    displayFormat: '+{value} Fire Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 3] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [4, 7] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [5, 9] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [7, 11] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [9, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [11, 17] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 21] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [17, 26] }
    ]
  },

  lightningSpellDamageFlat: {
    id: 'lightningSpellDamageFlat',
    name: 'Added Lightning Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Stormy',
    displayFormat: '+{value} Lightning Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 3] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 5] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 7] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 10] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [7, 13] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [9, 16] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [12, 20] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [15, 24] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [19, 29] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [23, 36] }
    ]
  },

  voidSpellDamageFlat: {
    id: 'voidSpellDamageFlat',
    name: 'Added Void Damage to Spells',
    category: 'offensive',
    type: 'flat',
    applicableTo: ['staff', 'wand'],
    prefix: 'Eldritch',
    displayFormat: '+{value} Void Damage to Spells',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [1, 2] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [2, 3] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [3, 5] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [4, 7] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [5, 9] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [7, 11] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [9, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [11, 17] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 21] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [17, 26] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🌍 GLOBAL DAMAGE (GLOBAL INCREASES)
  // ═══════════════════════════════════════════════════════════

  globalPhysicalDamageIncrease: {
    id: 'globalPhysicalDamageIncrease',
    name: 'Increased Global Physical Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of the Warrior',
    displayFormat: '{value}% increased Global Physical Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 45] }
    ]
  },

  globalColdDamageIncrease: {
    id: 'globalColdDamageIncrease',
    name: 'Increased Global Cold Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of the Tundra',
    displayFormat: '{value}% increased Global Cold Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 45] }
    ]
  },

  globalFireDamageIncrease: {
    id: 'globalFireDamageIncrease',
    name: 'Increased Global Fire Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of the Inferno',
    displayFormat: '{value}% increased Global Fire Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 45] }
    ]
  },

  globalLightningDamageIncrease: {
    id: 'globalLightningDamageIncrease',
    name: 'Increased Global Lightning Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of the Storm',
    displayFormat: '{value}% increased Global Lightning Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 45] }
    ]
  },

  globalVoidDamageIncrease: {
    id: 'globalVoidDamageIncrease',
    name: 'Increased Global Void Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of the Abyss',
    displayFormat: '{value}% increased Global Void Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 45] }
    ]
  },

  globalSpellDamageIncrease: {
    id: 'globalSpellDamageIncrease',
    name: 'Increased Global Spell Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of the Mage',
    displayFormat: '{value}% increased Global Spell Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [4, 7] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [6, 11] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [9, 15] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [12, 19] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [15, 23] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [19, 28] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [23, 33] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [28, 39] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [33, 46] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [39, 55] }
    ]
  },

  // 🆕 NOVO: Elemental Damage (genérico)
  globalElementalDamageIncrease: {
    id: 'globalElementalDamageIncrease',
    name: 'Increased Global Elemental Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of the Elements',
    displayFormat: '{value}% increased Global Elemental Damage',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 8] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [6, 11] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [9, 14] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [11, 17] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [14, 21] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [17, 25] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [21, 30] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [25, 35] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [30, 42] }
    ]
  },

  // 🆕 NOVO: Elemental Damage with Attacks
  globalElementalDamageWithAttacksIncrease: {
    id: 'globalElementalDamageWithAttacksIncrease',
    name: 'Increased Global Elemental Damage with Attacks',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['weapon', 'ring', 'amulet', 'belt'], // armas melee/bow
    suffix: 'of Elemental Fury',
    displayFormat: '{value}% increased Global Elemental Damage with Attacks',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 8] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [6, 11] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [9, 14] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [11, 17] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [14, 21] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [17, 25] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [21, 30] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [25, 35] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [30, 42] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // ⚡ ATTACK/CAST SPEED & CRIT
  // ═══════════════════════════════════════════════════════════

  attackSpeedIncrease: {
    id: 'attackSpeedIncrease',
    name: 'Increased Attack Speed',
    category: 'offensive',
    type: 'increase',
    applicableTo: ['weapon'],
    suffix: 'of Alacrity',
    displayFormat: '{value}% increased Attack Speed',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 7] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [6, 9] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [7, 11] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [9, 13] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [11, 15] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [13, 18] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [15, 21] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [18, 24] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [21, 28] }
    ]
  },

  globalAttackSpeedIncrease: {
    id: 'globalAttackSpeedIncrease',
    name: 'Increased Global Attack Speed',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'gloves', 'belt'],
    suffix: 'of Haste',
    displayFormat: '{value}% increased Global Attack Speed',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [2, 4] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [3, 5] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [4, 7] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 8] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [6, 10] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [8, 12] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [10, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [12, 16] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 19] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [16, 22] }
    ]
  },

  castSpeedIncrease: {
    id: 'castSpeedIncrease',
    name: 'Increased Cast Speed',
    category: 'offensive',
    type: 'increase',
    applicableTo: ['staff', 'wand'],
    suffix: 'of Swiftness',
    displayFormat: '{value}% increased Cast Speed',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 7] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [6, 9] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [7, 11] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [9, 13] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [11, 15] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [13, 18] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [15, 21] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [18, 24] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [21, 28] }
    ]
  },

  globalCastSpeedIncrease: {
    id: 'globalCastSpeedIncrease',
    name: 'Increased Global Cast Speed',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'gloves', 'belt'],
    suffix: 'of Celerity',
    displayFormat: '{value}% increased Global Cast Speed',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [2, 4] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [3, 5] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [4, 7] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [5, 8] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [6, 10] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [8, 12] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [10, 14] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [12, 16] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [14, 19] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [16, 22] }
    ]
  },

  criticalChanceIncrease: {
    id: 'criticalChanceIncrease',
    name: 'Increased Critical Strike Chance',
    category: 'offensive',
    type: 'increase',
    applicableTo: ['weapon'],
    suffix: 'of Precision',
    displayFormat: '{value}% increased Critical Strike Chance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [5, 8] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [7, 12] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [10, 16] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [13, 20] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [17, 25] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [21, 30] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [26, 36] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [31, 43] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [37, 51] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [44, 60] }
    ]
  },

  globalCriticalChanceIncrease: {
    id: 'globalCriticalChanceIncrease',
    name: 'Increased Global Critical Strike Chance',
    category: 'offensive',
    type: 'increaseGlobal',
    applicableTo: ['ring', 'amulet', 'belt'],
    suffix: 'of the Sniper',
    displayFormat: '{value}% increased Global Critical Strike Chance',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 7] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [6, 10] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [8, 12] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [10, 15] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [13, 18] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [16, 22] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [19, 26] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [23, 31] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [27, 37] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🛡️ DEFENSE - ARMOR
  // ═══════════════════════════════════════════════════════════

  armorFlat: {
    id: 'armorFlat',
    name: 'Added Armor',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Plated',
    displayFormat: '+{value} Armor',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 20] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [18, 35] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [30, 55] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [45, 75] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [65, 100] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [85, 130] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [110, 165] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [140, 205] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [175, 250] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [215, 310] }
    ]
  },

  armorIncrease: {
    id: 'armorIncrease',
    name: 'Increased Armor',
    category: 'defensive',
    type: 'increase',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Fortified',
    displayFormat: '{value}% increased Armor',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [8, 15] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [12, 20] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [17, 27] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [23, 34] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [29, 42] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [36, 51] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [44, 61] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [53, 72] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [62, 84] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [72, 98] }
    ]
  },

  globalArmorIncrease: {
    id: 'globalArmorIncrease',
    name: 'Increased Global Armor',
    category: 'defensive',
    type: 'increaseGlobal',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of the Fortress',
    displayFormat: '{value}% increased Global Armor',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 42] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🌫️ DEFENSE - EVASION
  // ═══════════════════════════════════════════════════════════

  evasionFlat: {
    id: 'evasionFlat',
    name: 'Added Evasion',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Nimble',
    displayFormat: '+{value} Evasion',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [15, 30] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [27, 52] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [45, 82] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [68, 112] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [97, 150] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [128, 195] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [165, 247] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [210, 307] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [262, 375] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [322, 465] }
    ]
  },

  evasionIncrease: {
    id: 'evasionIncrease',
    name: 'Increased Evasion',
    category: 'defensive',
    type: 'increase',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Evasive',
    displayFormat: '{value}% increased Evasion',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [8, 15] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [12, 20] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [17, 27] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [23, 34] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [29, 42] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [36, 51] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [44, 61] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [53, 72] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [62, 84] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [72, 98] }
    ]
  },

  globalEvasionIncrease: {
    id: 'globalEvasionIncrease',
    name: 'Increased Global Evasion',
    category: 'defensive',
    type: 'increaseGlobal',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of the Phantom',
    displayFormat: '{value}% increased Global Evasion',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 42] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // ✨ DEFENSE - BARRIER
  // ═══════════════════════════════════════════════════════════

  barrierFlat: {
    id: 'barrierFlat',
    name: 'Added Barrier',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Warded',
    displayFormat: '+{value} Barrier',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [12, 25] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [22, 43] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [37, 68] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [56, 93] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [80, 125] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [106, 162] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [137, 206] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [175, 256] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [218, 312] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [268, 387] }
    ]
  },

  barrierIncrease: {
    id: 'barrierIncrease',
    name: 'Increased Barrier',
    category: 'defensive',
    type: 'increase',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Shielded',
    displayFormat: '{value}% increased Barrier',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [8, 15] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [12, 20] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [17, 27] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [23, 34] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [29, 42] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [36, 51] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [44, 61] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [53, 72] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [62, 84] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [72, 98] }
    ]
  },

  globalBarrierIncrease: {
    id: 'globalBarrierIncrease',
    name: 'Increased Global Barrier',
    category: 'defensive',
    type: 'increaseGlobal',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt'],
    suffix: 'of the Archmage',
    displayFormat: '{value}% increased Global Barrier',
    isGlobalStat: true,
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 15] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [12, 18] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [15, 22] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [18, 26] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [22, 31] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [26, 36] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [31, 42] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // ❤️ HEALTH & MANA
  // ═══════════════════════════════════════════════════════════

  healthFlat: {
    id: 'healthFlat',
    name: 'Maximum Life',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Vitality',
    displayFormat: '+{value} to Maximum Life',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [10, 20] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [18, 30] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [26, 42] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [36, 56] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [48, 72] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [62, 90] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [78, 110] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [96, 132] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [116, 156] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [138, 182] }
    ]
  },

  manaFlat: {
    id: 'manaFlat',
    name: 'Maximum Mana',
    category: 'defensive',
    type: 'flat',
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'belt', 'staff', 'wand'],
    suffix: 'of Wisdom',
    displayFormat: '+{value} to Maximum Mana',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [15, 30] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [27, 45] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [39, 63] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [54, 84] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [72, 108] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [93, 135] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [117, 165] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [144, 198] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [174, 234] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [207, 273] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🔥 RESISTANCES (PERCENT)
  // ═══════════════════════════════════════════════════════════

  coldResistance: {
    id: 'coldResistance',
    name: 'Cold Resistance',
    category: 'defensive',
    type: 'percent',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Frost Protection',
    displayFormat: '+{value}% Cold Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [6, 12] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [10, 16] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [14, 21] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [18, 26] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [23, 32] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [28, 38] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [33, 44] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [39, 51] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [45, 58] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 66] }
    ]
  },

  fireResistance: {
    id: 'fireResistance',
    name: 'Fire Resistance',
    category: 'defensive',
    type: 'percent',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Flame Protection',
    displayFormat: '+{value}% Fire Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [6, 12] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [10, 16] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [14, 21] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [18, 26] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [23, 32] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [28, 38] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [33, 44] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [39, 51] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [45, 58] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 66] }
    ]
  },

  lightningResistance: {
    id: 'lightningResistance',
    name: 'Lightning Resistance',
    category: 'defensive',
    type: 'percent',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Lightning Protection',
    displayFormat: '+{value}% Lightning Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [6, 12] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [10, 16] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [14, 21] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [18, 26] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [23, 32] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [28, 38] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [33, 44] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [39, 51] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [45, 58] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 66] }
    ]
  },

  voidResistance: {
    id: 'voidResistance',
    name: 'Void Resistance',
    category: 'defensive',
    type: 'percent',
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet', 'belt'],
    suffix: 'of Void Protection',
    displayFormat: '+{value}% Void Resistance',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [6, 12] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [10, 16] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [14, 21] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [18, 26] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [23, 32] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [28, 38] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [33, 44] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [39, 51] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [45, 58] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [51, 66] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 💪 ATTRIBUTES (FLAT)
  // ═══════════════════════════════════════════════════════════

  strengthFlat: {
    id: 'strengthFlat',
    name: 'Strength',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'belt'],
    suffix: 'of the Titan',
    displayFormat: '+{value} to Strength',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 16] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [13, 20] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [17, 25] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [21, 30] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [26, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [31, 43] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [37, 51] }
    ]
  },

  dexterityFlat: {
    id: 'dexterityFlat',
    name: 'Dexterity',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['weapon', 'ring', 'amulet', 'belt'],
    suffix: 'of the Acrobat',
    displayFormat: '+{value} to Dexterity',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 16] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [13, 20] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [17, 25] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [21, 30] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [26, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [31, 43] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [37, 51] }
    ]
  },

  intelligenceFlat: {
    id: 'intelligenceFlat',
    name: 'Intelligence',
    category: 'attribute',
    type: 'flat',
    applicableTo: ['staff', 'wand', 'ring', 'amulet', 'belt'],
    suffix: 'of the Sage',
    displayFormat: '+{value} to Intelligence',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 6] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [5, 9] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [7, 12] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [10, 16] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [13, 20] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [17, 25] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [21, 30] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [26, 36] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [31, 43] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [37, 51] }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 🆕 MOVEMENT SPEED (BOOTS ONLY)
  // ═══════════════════════════════════════════════════════════

  movementSpeedIncrease: {
    id: 'movementSpeedIncrease',
    name: 'Increased Movement Speed',
    category: 'utility',
    type: 'increase',
    applicableTo: ['boots'],
    suffix: 'of the Cheetah',
    displayFormat: '{value}% increased Movement Speed',
    tiers: [
      { tier: 10, minItemLevel: 1, maxItemLevel: 10, valueRange: [3, 5] },
      { tier: 9, minItemLevel: 11, maxItemLevel: 20, valueRange: [4, 7] },
      { tier: 8, minItemLevel: 21, maxItemLevel: 30, valueRange: [6, 9] },
      { tier: 7, minItemLevel: 31, maxItemLevel: 40, valueRange: [7, 11] },
      { tier: 6, minItemLevel: 41, maxItemLevel: 50, valueRange: [9, 14] },
      { tier: 5, minItemLevel: 51, maxItemLevel: 60, valueRange: [11, 17] },
      { tier: 4, minItemLevel: 61, maxItemLevel: 70, valueRange: [14, 20] },
      { tier: 3, minItemLevel: 71, maxItemLevel: 80, valueRange: [17, 24] },
      { tier: 2, minItemLevel: 81, maxItemLevel: 90, valueRange: [20, 28] },
      { tier: 1, minItemLevel: 91, maxItemLevel: 100, valueRange: [24, 33] }
    ]
  },

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