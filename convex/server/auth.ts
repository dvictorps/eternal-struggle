import { type GenericCtx, createClient } from '@convex-dev/better-auth'
import { components } from '../_generated/api'
import { betterAuth } from 'better-auth'
import { convex } from '@convex-dev/better-auth/plugins'
import { env } from '../env'

export const authComponent = createClient(components.betterAuth, { verbose: false })

export const createAuth = (ctx: GenericCtx, { optionsOnly } = { optionsOnly: false }) =>
    betterAuth({
        logger: { disabled: optionsOnly },
        baseURL: env.SITE_URL,
        secret: env.BETTER_AUTH_SECRET,
        emailAndPassword: { enabled: true, requireEmailVerification: false },
        database: authComponent.adapter(ctx),
        plugins: [convex()],
        experimental: { roles: { default: 'user', values: ['user', 'admin'] } },
    })


