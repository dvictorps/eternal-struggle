// convex/gameData/itemTemplates.ts
import { 
  ItemCategory, 
  EquipmentType, 
  WeaponType, 
  ArmorType,
  ConsumableType,
  ModifierId,
  DamageType
} from './items';

// ═══════════════════════════════════════════════════════════
// COMMON MODIFIER LISTS
// ═══════════════════════════════════════════════════════════

// Modifiers for weapons - focused on damage and attack stats
export const WEAPON_MODIFIERS: ModifierId[] = [
  'physicalDamageFlat',
  'coldDamageFlat',
  'fireDamageFlat',
  'lightningDamageFlat',
  'voidDamageFlat',
  'physicalDamageIncrease',
  'attackSpeedIncrease',
  'criticalChanceIncrease',
  'globalPhysicalDamageIncrease',
  'globalColdDamageIncrease',
  'globalFireDamageIncrease',
  'globalLightningDamageIncrease',
  'globalVoidDamageIncrease',
  'globalElementalDamageWithAttacksIncrease',
  'globalAttackSpeedIncrease',
  'globalCriticalChanceIncrease',
  'strengthFlat',
  'dexterityFlat'
];

// Modifiers for jewelry - comprehensive list with all types
export const JEWELRY_MODIFIERS: ModifierId[] = [
  // Flat damage to attacks
  'physicalDamageFlat',
  'coldDamageFlat',
  'fireDamageFlat',
  'lightningDamageFlat',
  'voidDamageFlat',

  // Global increases
  'globalPhysicalDamageIncrease',
  'globalColdDamageIncrease',
  'globalFireDamageIncrease',
  'globalLightningDamageIncrease',
  'globalVoidDamageIncrease',
  'globalSpellDamageIncrease',
  'globalElementalDamageIncrease',
  'globalElementalDamageWithAttacksIncrease',
  'globalAttackSpeedIncrease',
  'globalCastSpeedIncrease',
  'globalCriticalChanceIncrease',

  // Defense
  'globalArmorIncrease',
  'globalEvasionIncrease',
  'globalBarrierIncrease',
  'healthFlat',
  'manaFlat',

  // Resistances
  'coldResistance',
  'fireResistance',
  'lightningResistance',
  'voidResistance',

  // Attributes
  'strengthFlat',
  'dexterityFlat',
  'intelligenceFlat'
];

// Modifiers for armor - focused on defense and attributes
export const ARMOR_MODIFIERS: ModifierId[] = [
  'globalArmorIncrease',
  'globalEvasionIncrease',
  'globalBarrierIncrease',
  'healthFlat',
  'manaFlat',
  'coldResistance',
  'fireResistance',
  'lightningResistance',
  'voidResistance',
  'strengthFlat',
  'dexterityFlat',
  'intelligenceFlat'
];

// ═══════════════════════════════════════════════════════════
// BASE INTERFACES
// ═══════════════════════════════════════════════════════════

export interface BaseItemTemplate {
  id: string;
  name: string;
  description: string;
  categories: ItemCategory[];
  stackable: boolean;
  maxStack?: number;
  baseValue: number;
  icon?: string;
  itemLevel: number;
}

// ═══════════════════════════════════════════════════════════
// WEAPON TEMPLATE
// ═══════════════════════════════════════════════════════════

export interface WeaponTemplate extends BaseItemTemplate {
  categories: ['equipment'];
  equipmentType: 'weapon';
  weaponType: WeaponType;
  stackable: false;
  
  damageType: DamageType;
  baseDamage: {
    physical?: [number, number];
    cold?: [number, number];
    fire?: [number, number];
    lightning?: [number, number];
    void?: [number, number];
  };
  requirements?: {
    level?: number;
    strength?: number;
    dexterity?: number;
    intelligence?: number;
  };
  
  allowedModifiers: ModifierId[];
}

// ═══════════════════════════════════════════════════════════
// ARMOR TEMPLATE
// ═══════════════════════════════════════════════════════════

export interface ArmorTemplate extends BaseItemTemplate {
  categories: ['equipment'];
  equipmentType: Exclude<EquipmentType, 'weapon' | 'offhand' | 'ring' | 'amulet' | 'belt'>;
  armorType: ArmorType;
  stackable: false;
  baseDefense: {
    barrier?: number;
    armour?: number;
    evasion?: number;
  };
  requirements?: {
    level?: number;
    strength?: number;
    dexterity?: number;
    intelligence?: number;
  };
  allowedModifiers: ModifierId[];
}

// ═══════════════════════════════════════════════════════════
// 🆕 JEWELRY TEMPLATE (Ring, Amulet, Belt)
// ═══════════════════════════════════════════════════════════

export interface JewelryTemplate extends BaseItemTemplate {
  categories: ['equipment'];
  equipmentType: 'ring' | 'amulet' | 'belt';
  stackable: false;
  
  // Implicits (sempre presentes, não contam para mod count)
  implicitMods?: {
    // Para Rings e Belts: resistências
    coldResistance?: [number, number];
    fireResistance?: [number, number];
    lightningResistance?: [number, number];
    voidResistance?: [number, number];
    
    // Para Amulets e Belts: atributos
    strength?: [number, number];
    dexterity?: [number, number];
    intelligence?: [number, number];
  };
  
  requirements?: {
    level?: number;
  };
  
  // Mods procedurais (rolados aleatoriamente)
  allowedModifiers: ModifierId[];
}

// ═══════════════════════════════════════════════════════════
// CONSUMABLE TEMPLATE
// ═══════════════════════════════════════════════════════════

export interface ConsumableTemplate extends BaseItemTemplate {
  categories: ['consumable'];
  consumableType: ConsumableType;
  stackable: true;
  effects: {
    type: 'heal' | 'mana' | 'buff' | 'debuff';
    value: number;
    duration?: number;
  }[];
}

// ═══════════════════════════════════════════════════════════
// MATERIAL TEMPLATE
// ═══════════════════════════════════════════════════════════

export interface MaterialTemplate extends BaseItemTemplate {
  categories: ['material'];
  stackable: true;
  tier: number;
}

// ═══════════════════════════════════════════════════════════
// QUEST ITEM TEMPLATE
// ═══════════════════════════════════════════════════════════

export interface QuestItemTemplate extends BaseItemTemplate {
  categories: ['quest'];
  stackable: boolean;
  questId?: string;
}

// ═══════════════════════════════════════════════════════════
// UNION TYPE
// ═══════════════════════════════════════════════════════════

export type ItemTemplate = 
  | WeaponTemplate 
  | ArmorTemplate
  | JewelryTemplate
  | ConsumableTemplate 
  | MaterialTemplate 
  | QuestItemTemplate
  | BaseItemTemplate;

// ═══════════════════════════════════════════════════════════
// ITEM TEMPLATES CATALOG
// ═══════════════════════════════════════════════════════════

export const ITEM_TEMPLATES = {
  
  // ═══════════════════════════════════════════════════════════
  // ⚔️ WEAPONS
  // ═══════════════════════════════════════════════════════════
  
  ironSword: {
    id: 'ironSword',
    name: 'Iron Sword',
    description: 'A sturdy sword made of iron',
    categories: ['equipment'],
    equipmentType: 'weapon',
    weaponType: 'sword',
    stackable: false,
    damageType: 'attack',
    baseDamage: {
      physical: [12, 18]
    },
    baseValue: 150,
    itemLevel: 5,
    requirements: {
      level: 5,
      strength: 12
    },
    allowedModifiers: WEAPON_MODIFIERS,
    icon: '⚔️'
  } as WeaponTemplate,

  // ═══════════════════════════════════════════════════════════
  // 💍 JEWELRY - RINGS
  // ═══════════════════════════════════════════════════════════

  ironRing: {
    id: 'ironRing',
    name: 'Iron Ring',
    description: 'A simple iron ring with natural fire resistance',
    categories: ['equipment'],
    equipmentType: 'ring',
    stackable: false,
    baseValue: 50,
    itemLevel: 1,
    requirements: {
      level: 1
    },
    // Implicit: sempre tem fire resistance
    implicitMods: {
      fireResistance: [10, 20]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '⚪'
  } as JewelryTemplate,

  sapphireRing: {
    id: 'sapphireRing',
    name: 'Sapphire Ring',
    description: 'A ring set with a brilliant sapphire, cold to the touch',
    categories: ['equipment'],
    equipmentType: 'ring',
    stackable: false,
    baseValue: 80,
    itemLevel: 15,
    requirements: {
      level: 15
    },
    // Implicit: cold resistance
    implicitMods: {
      coldResistance: [15, 25]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '💎'
  } as JewelryTemplate,

  // ═══════════════════════════════════════════════════════════
  // 📿 JEWELRY - AMULETS
  // ═══════════════════════════════════════════════════════════

  jadeAmulet: {
    id: 'jadeAmulet',
    name: 'Jade Amulet',
    description: 'An amulet carved from jade, enhancing dexterity',
    categories: ['equipment'],
    equipmentType: 'amulet',
    stackable: false,
    baseValue: 100,
    itemLevel: 1,
    requirements: {
      level: 1
    },
    // Implicit: dexterity
    implicitMods: {
      dexterity: [20, 30]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '📿'
  } as JewelryTemplate,

  amberAmulet: {
    id: 'amberAmulet',
    name: 'Amber Amulet',
    description: 'An amulet of polished amber, granting strength',
    categories: ['equipment'],
    equipmentType: 'amulet',
    stackable: false,
    baseValue: 100,
    itemLevel: 1,
    requirements: {
      level: 1
    },
    // Implicit: strength
    implicitMods: {
      strength: [20, 30]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '🔶'
  } as JewelryTemplate,

  lapisAmulet: {
    id: 'lapisAmulet',
    name: 'Lapis Amulet',
    description: 'An amulet of deep blue lapis lazuli, sharpening the mind',
    categories: ['equipment'],
    equipmentType: 'amulet',
    stackable: false,
    baseValue: 100,
    itemLevel: 1,
    requirements: {
      level: 1
    },
    // Implicit: intelligence
    implicitMods: {
      intelligence: [20, 30]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '🔵'
  } as JewelryTemplate,

  // ═══════════════════════════════════════════════════════════
  // 🔗 JEWELRY - BELTS
  // ═══════════════════════════════════════════════════════════

  leatherBelt: {
    id: 'leatherBelt',
    name: 'Leather Belt',
    description: 'A sturdy leather belt that provides extra vitality',
    categories: ['equipment'],
    equipmentType: 'belt',
    stackable: false,
    baseValue: 75,
    itemLevel: 1,
    requirements: {
      level: 1
    },
    // Implicit: strength (belts têm attribute implicit)
    implicitMods: {
      strength: [15, 25]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '👝'
  } as JewelryTemplate,

  chainBelt: {
    id: 'chainBelt',
    name: 'Chain Belt',
    description: 'A belt of interlocking chains, enhancing defenses',
    categories: ['equipment'],
    equipmentType: 'belt',
    stackable: false,
    baseValue: 90,
    itemLevel: 10,
    requirements: {
      level: 10
    },
    // Implicit: strength
    implicitMods: {
      strength: [20, 30]
    },
    allowedModifiers: JEWELRY_MODIFIERS,
    icon: '⛓️'
  } as JewelryTemplate,

} as const;

export type ItemTemplateId = keyof typeof ITEM_TEMPLATES;

// ═══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

export function getItemTemplate(id: string): ItemTemplate | undefined {
  return ITEM_TEMPLATES[id as ItemTemplateId];
}

export function isValidItemTemplate(id: string): id is ItemTemplateId {
  return id in ITEM_TEMPLATES;
}

export function getTemplatesByCategory(category: ItemCategory): ItemTemplate[] {
  return Object.values(ITEM_TEMPLATES).filter(
    template => (template.categories as readonly ItemCategory[]).includes(category)
  );
}

// Helper para pegar jewelry templates
export function getJewelryTemplates(): JewelryTemplate[] {
  return Object.values(ITEM_TEMPLATES).filter(
    (template): template is JewelryTemplate => 
      'equipmentType' in template && (
        template.equipmentType === 'ring' || 
        template.equipmentType === 'amulet' || 
        template.equipmentType === 'belt'
      )
  );
}

// Helper para pegar templates por equipment type
export function getTemplatesByEquipmentType(type: EquipmentType): ItemTemplate[] {
  return Object.values(ITEM_TEMPLATES).filter(
    template => 'equipmentType' in template && template.equipmentType === type
  );
}