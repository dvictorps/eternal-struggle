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
  }),

})
