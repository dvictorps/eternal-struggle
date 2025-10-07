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

  // convex/gameData/itemTypes.ts

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

export const MODIFIER_TYPES = {
  flat: 'flat',
  increase: 'increase',
  increaseGlobal: 'increaseGlobal',
  percent: 'percent'
} as const;

export type ModifierType = typeof MODIFIER_TYPES[keyof typeof MODIFIER_TYPES];

export const MODIFIERS = {
  // ═══════════════════════════════════════════════════════════
  // ⚔️ WEAPON DAMAGE - ATTACK (LOCAL)
  // ═══════════════════════════════════════════════════════════
  
  // Physical Attack Damage
  physicalDamageFlat: {
    id: 'physicalDamageFlat',
    name: 'Added Physical Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    valueRange: [3, 10],
    applicableTo: ['weapon'],
    prefix: 'Heavy',
    displayFormat: '+{value} Physical Damage to Attacks'
  },
  physicalDamageIncrease: {
    id: 'physicalDamageIncrease',
    name: 'Increased Physical Damage',
    category: 'offensive',
    type: 'increase',
    valueRange: [10, 30],
    applicableTo: ['weapon'],
    prefix: 'Brutal',
    displayFormat: '{value}% increased Physical Damage'
  },
  
  // Cold Attack Damage
  coldDamageFlat: {
    id: 'coldDamageFlat',
    name: 'Added Cold Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    valueRange: [2, 8],
    applicableTo: ['weapon'],
    prefix: 'Frozen',
    displayFormat: '+{value} Cold Damage to Attacks'
  },

  
  // Fire Attack Damage
  fireDamageFlat: {
    id: 'fireDamageFlat',
    name: 'Added Fire Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    valueRange: [2, 8],
    applicableTo: ['weapon'],
    prefix: 'Burning',
    displayFormat: '+{value} Fire Damage to Attacks'
  },

  
  // Lightning Attack Damage
  lightningDamageFlat: {
    id: 'lightningDamageFlat',
    name: 'Added Lightning Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    valueRange: [1, 12],
    applicableTo: ['weapon'],
    prefix: 'Shocking',
    displayFormat: '+{value} Lightning Damage to Attacks'
  },

  // Void Attack Damage
  voidDamageFlat: {
    id: 'voidDamageFlat',
    name: 'Added Void Damage to Attacks',
    category: 'offensive',
    type: 'flat',
    valueRange: [2, 8],
    applicableTo: ['weapon'],
    prefix: 'Abyssal',
    displayFormat: '+{value} Void Damage to Attacks'
  },


  // ═══════════════════════════════════════════════════════════
  // 🔮 SPELL DAMAGE (LOCAL)
  // ═══════════════════════════════════════════════════════════
  
  // Physical Spell Damage
  physicalSpellDamageFlat: {
    id: 'physicalSpellDamageFlat',
    name: 'Added Physical Damage to Spells',
    category: 'offensive',
    type: 'flat',
    valueRange: [3, 10],
    applicableTo: ['staff', 'wand'],
    prefix: 'Forceful',
    displayFormat: '+{value} Physical Damage to Spells'
  },

  // Cold Spell Damage
  coldSpellDamageFlat: {
    id: 'coldSpellDamageFlat',
    name: 'Added Cold Damage to Spells',
    category: 'offensive',
    type: 'flat',
    valueRange: [2, 8],
    applicableTo: ['staff', 'wand'],
    prefix: 'Frost',
    displayFormat: '+{value} Cold Damage to Spells'
  },

  fireSpellDamageFlat: {
    id: 'fireSpellDamageFlat',
    name: 'Added Fire Damage to Spells',
    category: 'offensive',
    type: 'flat',
    valueRange: [2, 8],
    applicableTo: ['staff', 'wand'],
    prefix: 'Blazing',
    displayFormat: '+{value} Fire Damage to Spells'
  },

  lightningSpellDamageFlat: {
    id: 'lightningSpellDamageFlat',
    name: 'Added Lightning Damage to Spells',
    category: 'offensive',
    type: 'flat',
    valueRange: [1, 12],
    applicableTo: ['staff', 'wand'],
    prefix: 'Stormy',
    displayFormat: '+{value} Lightning Damage to Spells'
  },

  voidSpellDamageFlat: {
    id: 'voidSpellDamageFlat',
    name: 'Added Void Damage to Spells',
    category: 'offensive',
    type: 'flat',
    valueRange: [2, 8],
    applicableTo: ['staff', 'wand'],
    prefix: 'Eldritch',
    displayFormat: '+{value} Void Damage to Spells'
  },


  // ═══════════════════════════════════════════════════════════
  // 🌍 GLOBAL DAMAGE (GLOBAL)
  // ═══════════════════════════════════════════════════════════
  
  globalPhysicalDamageIncrease: {
    id: 'globalPhysicalDamageIncrease',
    name: 'Global Increased Physical Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'ring', 'amulet'],
    suffix: 'of the Warrior',
    displayFormat: '{value}% increased Global Physical Damage',
    isGlobalStat: true
  },
  
  globalColdDamageIncrease: {
    id: 'globalColdDamageIncrease',
    name: 'Global Increased Cold Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'staff', 'wand', 'ring', 'amulet'],
    suffix: 'of the Tundra',
    displayFormat: '{value}% increased Global Cold Damage',
    isGlobalStat: true
  },
  
  globalFireDamageIncrease: {
    id: 'globalFireDamageIncrease',
    name: 'Global Increased Fire Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'staff', 'wand', 'ring', 'amulet'],
    suffix: 'of the Inferno',
    displayFormat: '{value}% increased Global Fire Damage',
    isGlobalStat: true
  },
  
  globalLightningDamageIncrease: {
    id: 'globalLightningDamageIncrease',
    name: 'Global Increased Lightning Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'staff', 'wand', 'ring', 'amulet'],
    suffix: 'of the Storm',
    displayFormat: '{value}% increased Global Lightning Damage',
    isGlobalStat: true
  },
  
  globalVoidDamageIncrease: {
    id: 'globalVoidDamageIncrease',
    name: 'Global Increased Void Damage',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'staff', 'wand', 'ring', 'amulet'],
    suffix: 'of the Abyss',
    displayFormat: '{value}% increased Global Void Damage',
    isGlobalStat: true
  },
  
  globalSpellDamageIncrease: {
    id: 'globalSpellDamageIncrease',
    name: 'Global Increased Spell Damage',
    category: 'offensive',
    type: 'increasedGlobal',
    valueRange: [5, 15],
    applicableTo: ['staff', 'wand', 'ring', 'amulet'],
    suffix: 'of the Mage',
    displayFormat: '{value}% increased Global Spell Damage',
    isGlobalStat: true
  },

  // ═══════════════════════════════════════════════════════════
  // ⚡ ATTACK/CAST SPEED & CRIT
  // ═══════════════════════════════════════════════════════════
  
  attackSpeedIncrease: {
    id: 'attackSpeedIncrease',
    name: 'Increased Attack Speed',
    category: 'offensive',
    type: 'increase',
    valueRange: [5, 15],
    applicableTo: ['weapon'],
    suffix: 'of Alacrity',
    displayFormat: '{value}% increased Attack Speed'
  },
  
  globalAttackSpeedIncrease: {
    id: 'globalAttackSpeedIncrease',
    name: 'Global Increased Attack Speed',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [3, 10],
    applicableTo: ['ring', 'amulet', 'gloves'],
    suffix: 'of Haste',
    displayFormat: '{value}% increased Global Attack Speed',
    isGlobalStat: true
  },
  
  castSpeedIncrease: {
    id: 'castSpeedIncrease',
    name: 'Increased Cast Speed',
    category: 'offensive',
    type: 'increase',
    valueRange: [5, 15],
    applicableTo: ['staff', 'wand'],
    suffix: 'of Swiftness',
    displayFormat: '{value}% increased Cast Speed'
  },
  
  globalCastSpeedIncrease: {
    id: 'globalCastSpeedIncrease',
    name: 'Global Increased Cast Speed',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [3, 10],
    applicableTo: ['ring', 'amulet', 'gloves'],
    suffix: 'of Celerity',
    displayFormat: '{value}% increased Global Cast Speed',
    isGlobalStat: true
  },
  
  criticalChanceIncrease: {
    id: 'criticalChanceIncrease',
    name: 'Increased Critical Strike Chance',
    category: 'offensive',
    type: 'increase',
    valueRange: [10, 25],
    applicableTo: ['weapon'],
    suffix: 'of Precision',
    displayFormat: '{value}% increased Critical Strike Chance'
  },
  
  globalCriticalChanceIncrease: {
    id: 'globalCriticalChanceIncrease',
    name: 'Global Increased Critical Strike Chance',
    category: 'offensive',
    type: 'increaseGlobal',
    valueRange: [5, 12],
    applicableTo: ['ring', 'amulet'],
    suffix: 'of the Sniper',
    displayFormat: '{value}% increased Global Critical Strike Chance',
    isGlobalStat: true
  },

  // ═══════════════════════════════════════════════════════════
  // 🛡️ DEFENSE - ARMOR (Silk/Plate armor type)
  // ═══════════════════════════════════════════════════════════
  
  armorFlat: {
    id: 'armorFlat',
    name: 'Added Armor',
    category: 'defensive',
    type: 'flat',
    valueRange: [20, 80],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Plated',
    displayFormat: '+{value} Armor'
  },
  
  armorIncrease: {
    id: 'armorIncrease',
    name: 'Increased Armor',
    category: 'defensive',
    type: 'increase',
    valueRange: [15, 40],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Fortified',
    displayFormat: '{value}% increased Armor'
  },
  
  globalArmorIncrease: {
    id: 'globalArmorIncrease',
    name: 'Global Increased Armor',
    category: 'defensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet'],
    suffix: 'of the Fortress',
    displayFormat: '{value}% increased Global Armor',
    isGlobalStat: true
  },

  // ═══════════════════════════════════════════════════════════
  // 🌫️ DEFENSE - EVASION (Leather armor type)
  // ═══════════════════════════════════════════════════════════
  
  evasionFlat: {
    id: 'evasionFlat',
    name: 'Added Evasion',
    category: 'defensive',
    type: 'flat',
    valueRange: [30, 100],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Nimble',
    displayFormat: '+{value} Evasion'
  },
  
  evasionIncrease: {
    id: 'evasionIncrease',
    name: 'Increased Evasion',
    category: 'defensive',
    type: 'increase',
    valueRange: [15, 40],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Evasive',
    displayFormat: '{value}% increased Evasion'
  },
  
  globalEvasionIncrease: {
    id: 'globalEvasionIncrease',
    name: 'Global Increased Evasion',
    category: 'defensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet'],
    suffix: 'of the Phantom',
    displayFormat: '{value}% increased Global Evasion',
    isGlobalStat: true
  },

  // ═══════════════════════════════════════════════════════════
  // ✨ DEFENSE - BARRIER (Silk armor type / mana shield)
  // ═══════════════════════════════════════════════════════════
  
  barrierFlat: {
    id: 'barrierFlat',
    name: 'Added Barrier',
    category: 'defensive',
    type: 'flat',
    valueRange: [25, 90],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Warded',
    displayFormat: '+{value} Barrier'
  },
  
  barrierIncrease: {
    id: 'barrierIncrease',
    name: 'Increased Barrier',
    category: 'defensive',
    type: 'increase',
    valueRange: [15, 40],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves'],
    prefix: 'Shielded',
    displayFormat: '{value}% increased Barrier'
  },
  
  globalBarrierIncrease: {
    id: 'globalBarrierIncrease',
    name: 'Global Increased Barrier',
    category: 'defensive',
    type: 'increaseGlobal',
    valueRange: [5, 15],
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet'],
    suffix: 'of the Archmage',
    displayFormat: '{value}% increased Global Barrier',
    isGlobalStat: true
  },

  // ═══════════════════════════════════════════════════════════
  // ❤️ HEALTH & MANA
  // ═══════════════════════════════════════════════════════════
  
  healthFlat: {
    id: 'healthFlat',
    name: 'Maximum Life',
    category: 'defensive',
    type: 'flat',
    valueRange: [20, 60],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
    suffix: 'of Vitality',
    displayFormat: '+{value} to Maximum Life'
  },
  
  manaFlat: {
    id: 'manaFlat',
    name: 'Maximum Mana',
    category: 'defensive',
    type: 'flat',
    valueRange: [30, 80],
    applicableTo: ['helmet', 'chestplate', 'ring', 'amulet', 'staff', 'wand'],
    suffix: 'of Wisdom',
    displayFormat: '+{value} to Maximum Mana'
  },

  // ═══════════════════════════════════════════════════════════
  // 🔥 RESISTANCES (PERCENT)
  // ═══════════════════════════════════════════════════════════
  
  coldResistance: {
    id: 'coldResistance',
    name: 'Cold Resistance',
    category: 'defensive',
    type: 'percent',
    valueRange: [10, 30],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
    suffix: 'of Frost Protection',
    displayFormat: '+{value}% Cold Resistance'
  },
  
  fireResistance: {
    id: 'fireResistance',
    name: 'Fire Resistance',
    category: 'defensive',
    type: 'percent',
    valueRange: [10, 30],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
    suffix: 'of Flame Protection',
    displayFormat: '+{value}% Fire Resistance'
  },
  
  lightningResistance: {
    id: 'lightningResistance',
    name: 'Lightning Resistance',
    category: 'defensive',
    type: 'percent',
    valueRange: [10, 30],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
    suffix: 'of Lightning Protection',
    displayFormat: '+{value}% Lightning Resistance'
  },
  
  voidResistance: {
    id: 'voidResistance',
    name: 'Void Resistance',
    category: 'defensive',
    type: 'percent',
    valueRange: [10, 30],
    applicableTo: ['helmet', 'chestplate', 'leggings', 'boots', 'gloves', 'ring', 'amulet'],
    suffix: 'of Void Protection',
    displayFormat: '+{value}% Void Resistance'
  },

  // ═══════════════════════════════════════════════════════════
  // 💪 ATTRIBUTES (FLAT)
  // ═══════════════════════════════════════════════════════════
  
  strengthFlat: {
    id: 'strengthFlat',
    name: 'Strength',
    category: 'attribute',
    type: 'flat',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'ring', 'amulet'],
    suffix: 'of the Titan',
    displayFormat: '+{value} to Strength'
  },
  
  dexterityFlat: {
    id: 'dexterityFlat',
    name: 'Dexterity',
    category: 'attribute',
    type: 'flat',
    valueRange: [5, 15],
    applicableTo: ['weapon', 'ring', 'amulet'],
    suffix: 'of the Acrobat',
    displayFormat: '+{value} to Dexterity'
  },
  
  intelligenceFlat: {
    id: 'intelligenceFlat',
    name: 'Intelligence',
    category: 'attribute',
    type: 'flat',
    valueRange: [5, 15],
    applicableTo: ['staff', 'wand', 'ring', 'amulet'],
    suffix: 'of the Sage',
    displayFormat: '+{value} to Intelligence'
  },

} as const;

export type ModifierId = keyof typeof MODIFIERS;