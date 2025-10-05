import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
    clientPrefix: '',
    client: {},
    server: {
        CONVEX_SITE_URL: z.string().url(),
        SITE_URL: z.string().url(),
        BETTER_AUTH_SECRET: z.string().min(16),
    },
    runtimeEnv: {
        CONVEX_SITE_URL: process.env.CONVEX_SITE_URL,
        SITE_URL: process.env.SITE_URL,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    },
})


