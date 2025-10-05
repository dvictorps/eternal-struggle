import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
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
  characterClasses: defineTable({
    name: v.string(),
    strength: v.number(),
    dexterity: v.number(),
    intelligence: v.number(),
    hp: v.number(),
    mp: v.number(),
  }),
  admins: defineTable({
    userId: v.string(),
  }).index('userId', ['userId']),
  users: defineTable({
    userId: v.string(),
    name: v.string(),
    email: v.string(),
    role: v.union(v.literal('user'), v.literal('admin')),
  }).index('userId', ['userId']),

})

