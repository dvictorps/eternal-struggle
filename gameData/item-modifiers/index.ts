export * from './types';
export * from './weapon-damage';
export * from './spell-damage';
export * from './attributes';
export * from './defense';
export * from './resistances';
export * from './global-damage';
export * from './utility';

import { WEAPON_DAMAGE_MODIFIERS } from './weapon-damage';
import { SPELL_DAMAGE_MODIFIERS } from './spell-damage';
import { ATTRIBUTE_MODIFIERS } from './attributes';
import { DEFENSE_MODIFIERS } from './defense';
import { RESISTANCE_MODIFIERS } from './resistances';
import { GLOBAL_DAMAGE_MODIFIERS } from './global-damage';
import { UTILITY_MODIFIERS } from './utility';
import type { ModifierTier } from './types';

export const MODIFIERS = {
  ...WEAPON_DAMAGE_MODIFIERS,
  ...SPELL_DAMAGE_MODIFIERS,
  ...ATTRIBUTE_MODIFIERS,
  ...DEFENSE_MODIFIERS,
  ...RESISTANCE_MODIFIERS,
  ...GLOBAL_DAMAGE_MODIFIERS,
  ...UTILITY_MODIFIERS
} as const;

export type ModifierId = keyof typeof MODIFIERS;

export function getModifierTierForItemLevel(modifierId: ModifierId, itemLevel: number): ModifierTier | null {
  const modifier = MODIFIERS[modifierId];
  if (!modifier.tiers) return null;
  
  const tier = modifier.tiers.find(
    (t: ModifierTier) => itemLevel >= t.minItemLevel && itemLevel <= t.maxItemLevel
  );
  
  return tier || null;
}


