import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const config = defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
      routesDirectory: './src/routes', // 👈 ajuste conforme seu caminho real
      generatedRouteTree: './src/routeTree.gen.ts', // 👈 garante regeneração
    }),
    tanstackStart(),
    nitroV2Plugin(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),

    viteReact(),
  ],
})

export default config
