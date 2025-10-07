// 1. CATEGORIAS BASE (não-exclusivas, um item pode ter múltiplas)
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
  
  // 2. TIPOS DE EQUIPAMENTO (subcategoria de equipment)
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
      slot: 'ring' // pode ter 2 slots
    },
    amulet: {
      id: 'amulet',
      name: 'Amulet',
      slot: 'neck'
    }
  } as const;
  
  export type EquipmentType = keyof typeof EQUIPMENT_TYPES;
  
  // 3. TIPOS DE ARMA (subcategoria de weapon)
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
  
  // 4. TIPOS DE ARMADURA (subcategoria de armor)
  export const ARMOR_TYPES = {
    cloth: {
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
      usageType: 'duration' // temporary effect
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
      dropRate: 0.70
    },
    uncommon: {
      id: 'uncommon',
      name: 'Incomum',
      color: '#22c55e',
      dropRate: 0.20
    },
    rare: {
      id: 'rare',
      name: 'Rare',
      color: '#f6ca3b',
      dropRate: 0.08
    },
    epic: {
      id: 'epic',
      name: 'Epic',
      color: '#a855f7',
      dropRate: 0.015
    },
    legendary: {
      id: 'legendary',
      name: 'Legendary',
      color: '#a30202',
      dropRate: 0.005
    }
  } as const;
  
  export type Rarity = keyof typeof RARITIES;
  
   export const MODIFIERS = {
    // Modificadores de arma
    damage: {
      id: 'damage',
      name: 'Dano',
      category: 'offensive',
      type: 'increase',
      valueRange: [5, 15],
      applicableTo: ['weapon'],
      prefix: 'Empowered'
    },
    criticalChance: {
      id: 'criticalChance',
      name: 'Critical Chance',
      category: 'offensive',
      type: 'increase',
      valueRange: [5, 20],
      applicableTo: ['weapon'],
      suffix: 'of Precision'
    },
    attackSpeed: {
      id: 'attackSpeed',
      name: 'Attack Speed',
      category: 'offensive',  
      type: 'increase',
      valueRange: [5, 15],
      applicableTo: ['weapon'],
      suffix: 'of Speed'
    },
    globalCriticalChance: {
      id: 'globalCriticalChance',
      name: 'Global Critical Chance',
      category: 'offensive',
      type: 'increaseGlobal',
      valueRange: [10, 20],
      applicableTo: ['weapon'],
      suffix: 'of Global Precision'
    },
    globalAttackSpeed: {
      id: 'globalAttackSpeed',
      name: 'Global Attack Speed',
      category: 'offensive',
      type: 'increaseGlobal',
      valueRange: [10, 20],
      applicableTo: ['weapon'],
      suffix: 'of Global Speed'
    },
    
    // Modificadores de armadura
    defense: {
      id: 'defense',
      name: 'Defense',
      type: 'increase',
      category: 'defensive',
      valueRange: [5, 10],
      applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
      prefix: 'Reinforced'
    },
    defenseFlat: {
      id: 'defenseFlat',
      name: 'Defense',
      type: 'flat',
      category: 'defensive',
      valueRange: [10, 100],
      applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
      suffix: 'of Defense'
    },
    health: {
      id: 'health',
      name: 'Health',
      type: 'flat',
      category: 'defensive',
      valueRange: [10, 50],
      applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
      suffix: 'of Vitality'
    },
    
    // Modificadores de atributo
    strength: {
      id: 'strength',
      name: 'Strength',
      type: 'flat',
      category: 'attribute',
      valueRange: [1, 10],
      applicableTo: ['weapon', 'ring', 'amulet'],
      suffix: 'of Titan'
    },
    dexterity: {
      id: 'dexterity',
      name: 'Dexterity',
      type: 'flat',
      category: 'attribute',
      valueRange: [1, 10],
      applicableTo: ['weapon', 'ring', 'amulet'],
      suffix: 'of Acrobat'
    },
    intelligence: {
      id: 'intelligence',
      name: 'Intelligence',
      type: 'flat',
      category: 'attribute',
      valueRange: [1, 10],
      applicableTo: ['staff', 'wand', 'ring', 'amulet'],
      suffix: 'of Sage'
    },

    // Modificadores de resistência
    coldResistance: {
      id: 'coldResistance',
      name: 'Cold Resistance',
      type: 'percent',
      category: 'attribute',
      valueRange: [10, 30],
      applicableTo: ['ring', 'amulet', 'helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
      suffix: 'of Frost'
    },
    fireResistance: {
      id: 'fireResistance',
      name: 'Fire Resistance',
      type: 'percent',
      category: 'defensive',
      valueRange: [10, 30],
      applicableTo: ['ring', 'amulet', 'helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
      suffix: 'of Flame'
    },
    lightningResistance: {
      id: 'lightningResistance',
      name: 'Lightning Resistance',
      type: 'percent',
      category: 'defensive',
      valueRange: [10, 30],
      applicableTo: ['ring', 'amulet', 'helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
      suffix: 'of Lightning'
    },
    voidResistance: {
      id: 'voidResistance',
      name: 'Void Resistance',
      type: 'percent',
      category: 'defensive',
      valueRange: [10, 30],
      applicableTo: ['ring', 'amulet', 'helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
      suffix: 'of Void'
    }
  } as const;
  
  export type ModifierId = keyof typeof MODIFIERS;