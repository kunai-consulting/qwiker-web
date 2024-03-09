import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const base = process.env.VITE_BASE_URL;
const baseUrl =
  base &&
  `${base.startsWith('/') ? '' : '/'}${base}${base.endsWith('/') ? '' : '/'}`;

export default defineConfig(() => {
  return {
    clearScreen: false,
    ssr: {
      external: ['node:async_hooks'],
    },

    // basePathname: base ? baseUrl : "/",
    // base: base ? baseUrl : "/",
    build: {
      // assetsDir: './@assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash]/[name][extname]',
        },
      },
    },
    plugins: [
      qwikCity({
        // @ts-ignore
        // basePathname: base ? baseUrl : "/"
      }),
      qwikVite({}),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        //     anyone can cache | browser 1 day |    cdn 1 week |
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    },
    server: {
      host: true,
      proxy: {},
    },
  };
});
