import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '6szbzn36',
    dataset: 'production',
  },
  /**
   * TypeGen: scan Next.js app queries and write types next to the app.
   */
  typegen: {
    enabled: true,
    path: './src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: './sanity.types.ts',
    overloadClientMethods: true,
  },
})
