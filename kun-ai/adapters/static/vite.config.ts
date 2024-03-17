import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from '../../vite.config.mjs';

export default extendConfig(baseConfig, () => {
  const branch = process.env.VITE_BRANCH_VERSION || '';
  const origin = process.env.VITE_ORIGIN_URL || 'kun.ai';
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        origin: `https://${branch}${branch ? '.' : ''}${origin}`
      }),
    ],
  };
});
