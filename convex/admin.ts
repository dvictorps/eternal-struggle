import { internalQuery, internalMutation, query } from './_generated/server'
import { v } from 'convex/values'

export const isAdmin = internalQuery({
    args: { userId: v.string() },
    handler: async (ctx, { userId }) => {
        const doc = await ctx.db
            .query('admins')
            .withIndex('userId', (q) => q.eq('userId', userId))
            .first()
        return !!doc
    },
})

export const grantAdmin = internalMutation({
    args: { userId: v.string() },
    handler: async (ctx, { userId }) => {
        const existing = await ctx.db
            .query('admins')
            .withIndex('userId', (q) => q.eq('userId', userId))
            .first()
        if (existing) return existing._id
        return await ctx.db.insert('admins', { userId })
    },
})

export const revokeAdmin = internalMutation({
    args: { userId: v.string() },
    handler: async (ctx, { userId }) => {
        const existing = await ctx.db
            .query('admins')
            .withIndex('userId', (q) => q.eq('userId', userId))
            .first()
        if (existing) await ctx.db.delete(existing._id)
    },
})

export const meIsAdmin = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity()
        if (!identity) return false
        const doc = await ctx.db
            .query('admins')
            .withIndex('userId', (q) => q.eq('userId', identity.subject))
            .first()
        return !!doc
    },
})


