import { type GenericCtx, createClient } from '@convex-dev/better-auth'
import * as adapter from '@convex-dev/better-auth/adapter'
import { betterAuth } from 'better-auth'
import { convex } from '@convex-dev/better-auth/plugins'

export const authComponent = createClient(adapter as any, { verbose: false })

export const createAuth = (ctx: GenericCtx, { optionsOnly } = { optionsOnly: false }) =>
    betterAuth({
        logger: { disabled: optionsOnly },
        baseURL: process.env.SITE_URL,
        emailAndPassword: { enabled: true, requireEmailVerification: false },
        database: authComponent.adapter(ctx),
        plugins: [convex()],
        experimental: { roles: { default: 'user' } },
    })


