import { query, mutation } from './_generated/server'
import { v } from 'convex/values'
import { CHARACTER_CLASSES, ClassId } from '../gameData/classes'

export const getAll = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query('characters').collect()
    },
})

export const getById = query({
    args: { id: v.id('characters') },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id)
    },
})

export const create = mutation({
    args: {
        name: v.string(),
        level: v.number(),
        xp: v.number(),
        hp: v.number(),
        mp: v.number(),
        strength: v.number(),
        dexterity: v.number(),
        intelligence: v.number(),
        profileId: v.string(),
        currentLocation: v.string(),
        characterClass: v.string(),
    },
    handler: async (ctx, args) => {

        const selectedClass = CHARACTER_CLASSES[args.characterClass as ClassId]
        if (!selectedClass) {
            throw new Error(`Character class is invalid ${args.characterClass}`)
        }
           
        const id = await ctx.db.insert('characters', {
            name: args.name,
            level: args.level,
            xp: args.xp,
            hp: args.hp,
            mp: args.mp,
            strength: args.strength,
            dexterity: args.dexterity,
            intelligence: args.intelligence,
            profileId: args.profileId,
            currentXp: args.xp,
            currentHp: args.hp,
            currentMp: args.mp,
            currentStrength: args.strength,
            currentDexterity: args.dexterity,
            currentIntelligence: args.intelligence,
            currentLocation: args.currentLocation,
            characterClass: selectedClass.id
        })

        return await ctx.db.get(id)
    },
})

export const update = mutation({
    args: {
        id: v.id('characters'),
        name: v.optional(v.string()),
        level: v.optional(v.number()),
        xp: v.optional(v.number()),
        hp: v.optional(v.number()),
        mp: v.optional(v.number()),
        strength: v.optional(v.number()),
        dexterity: v.optional(v.number()),
        intelligence: v.optional(v.number()),
    },
    handler: async (ctx, args) => {
        const { id, ...updates } = args

        await ctx.db.patch(id, updates)

        return await ctx.db.get(id)
    },
})

export const remove = mutation({
    args: { id: v.id('characters') },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    },
})

export const getAllByProfileId = query({
    args: { profileId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db.query('characters').filter((q) => q.eq(q.field('profileId'), args.profileId)).collect()
    },
})