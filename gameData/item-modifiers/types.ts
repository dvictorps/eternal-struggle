import { EquipmentType, WeaponType } from '../items';

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
export type ModifierTypeId = 'flat' | 'increased' | 'more' | 'percent';
export type ModifierCategory = 'offensive' | 'defensive' | 'attribute' | 'utility';
export type ModifierApplicableTo = EquipmentType | WeaponType;

export interface ModifierTier {
  tier: number;
  minItemLevel: number;
  maxItemLevel: number;
  valueRange: readonly [number, number];
}

export interface Modifier {
  id: string;
  name: string;
  category: ModifierCategory;
  type: ModifierTypeId;
  applicableTo: ModifierApplicableTo[];
  prefix?: string;
  suffix?: string;
  displayFormat?: string;
  isGlobalStat?: boolean;
  tiers?: ModifierTier[];
  tier?: ModifierTier;
}

export function createStandardTiers(
  tier10Min: number,
  tier10Max: number,
  tier1Min: number,
  tier1Max: number
): ModifierTier[] {
  const tiers: ModifierTier[] = [];
  
  for (let i = 0; i < 10; i++) {
    const tier = 10 - i;
    const progress = i / 9;
    
    const minValue = tier10Min + (tier1Min - tier10Min) * progress;
    const maxValue = tier10Max + (tier1Max - tier10Max) * progress;
    
    tiers.push({
      tier,
      minItemLevel: i * 10 + 1,
      maxItemLevel: (i + 1) * 10,
      valueRange: [
        Math.round(minValue * 10) / 10,
        Math.round(maxValue * 10) / 10
      ]
    });
  }
  
  return tiers;
}

export function createTiersByValues(values: readonly [number, number][]): ModifierTier[] {
  return values.map((valueRange, index) => ({
    tier: 10 - index,
    minItemLevel: index * 10 + 1,
    maxItemLevel: (index + 1) * 10,
    valueRange
  }));
}

