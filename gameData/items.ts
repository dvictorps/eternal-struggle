// convex/gameData/itemTypes.ts

// Import modifier types from the separate file
export { 
  ModifierType, 
  ModifierApplicableTo, 
  Modifier, 
  ModifierId, 
  MODIFIER_TYPES,
  MODIFIERS,
  getModifierTierForItemLevel
} from './item-modifiers';

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
    baseDefense: 'armor',
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