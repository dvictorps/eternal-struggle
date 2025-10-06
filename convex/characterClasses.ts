import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

export const getAll = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query('characterClasses').collect()
    },
})

export const getById = query({
    args: { id: v.id('characterClasses') },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id)
    },
})

export const create = mutation({
    args: { name: v.string(), strength: v.number(), dexterity: v.number(), intelligence: v.number(), hp: v.number(), mp: v.number(), description: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db.insert('characterClasses', args)
    },
})

export const update = mutation({
    args: { id: v.id('characterClasses'), name: v.string(), strength: v.number(), dexterity: v.number(), intelligence: v.number(), hp: v.number(), mp: v.number(), description: v.string() },
    handler: async (ctx, args) => {
        const { id, ...data } = args
        return await ctx.db.patch(id, data)
    },
})

export const remove = mutation({
    args: { id: v.id('characterClasses') },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    },
})