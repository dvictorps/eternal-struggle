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

// Base para todos os itens
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

// Template para armas
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

// Template para armaduras
export interface ArmorTemplate extends BaseItemTemplate {
  categories: ['equipment'];
  equipmentType: Exclude<EquipmentType, 'weapon' | 'offhand'>; // ← ajustado
  armorType: ArmorType;
  stackable: false; // ← adicionado
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

// Template para acessórios (ring, amulet)
export interface AccessoryTemplate extends BaseItemTemplate {
  categories: ['equipment'];
  equipmentType: 'ring' | 'amulet';
  stackable: false;
  requirements?: {
    level?: number;
  };
  allowedModifiers: ModifierId[];
}

// Template para consumíveis
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

// Template para materiais
export interface MaterialTemplate extends BaseItemTemplate {
  categories: ['material'];
  stackable: true;
  tier: number;
}

// Template para itens de quest
export interface QuestItemTemplate extends BaseItemTemplate {
  categories: ['quest'];
  stackable: boolean; // pode ou não stackar
  questId?: string;
}

// Union type de todos os templates
export type ItemTemplate = 
  | WeaponTemplate 
  | ArmorTemplate
  | AccessoryTemplate // ← adicionado
  | ConsumableTemplate 
  | MaterialTemplate 
  | QuestItemTemplate
  | BaseItemTemplate;

// Objeto principal com todos os templates
export const ITEM_TEMPLATES = {
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
      allowedModifiers: [
        'physicalDamageFlat',
        'coldDamageFlat',
        'fireDamageFlat',
        'lightningDamageFlat',
        'voidDamageFlat',
        'attackSpeedIncrease',
        'criticalChanceIncrease',
        'globalPhysicalDamageIncrease',
        'globalColdDamageIncrease',
        'globalFireDamageIncrease',
        'globalLightningDamageIncrease',
        'globalVoidDamageIncrease',
        'globalAttackSpeedIncrease',
        'strengthFlat'
      ],
      icon: '⚔️'
    } as WeaponTemplate,

} as const;

export type ItemTemplateId = keyof typeof ITEM_TEMPLATES;

// Helpers
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