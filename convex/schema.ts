import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  admins: defineTable({
    userId: v.string(),
  }).index('userId', ['userId']),
  characters: defineTable({
    name: v.string(),
    level: v.number(),
    xp: v.number(),
    hp: v.number(),
    mp: v.number(),
    strength: v.number(),
    dexterity: v.number(),
    intelligence: v.number(),
    profileId: v.string(),
    currentXp: v.number(),
    currentHp: v.number(),
    currentMp: v.number(),
    currentStrength: v.number(),
    currentDexterity: v.number(),
    currentIntelligence: v.number(),
    currentLocation: v.string(),
    characterClass: v.string(),
  }),
  inventory: defineTable({
    characterId: v.id('characters'),
    itemId: v.id('items'),
  }).index('by_characterId', ['characterId']),
  items: defineTable({
    name: v.string(),
    description: v.string(),
    type: v.string(),
    rarity: v.string(),
    value: v.number(),
  }),
 
})

