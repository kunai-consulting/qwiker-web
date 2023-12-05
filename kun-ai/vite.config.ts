import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const base = process.env.VITE_BASE_URL;
const baseUrl = base && `${base.startsWith('/') ? '' : '/'}${base}${
  base.endsWith('/') ? '' : '/'
}`;


export default defineConfig(() => {
  return {
    // basePathname: base ? baseUrl : "/",
    // base: base ? baseUrl : "/",
    plugins: [
      qwikCity({
        // @ts-ignore
        // basePathname: base ? baseUrl : "/"
      }),
      qwikVite({
      }),
      tsconfigPaths()
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    server: {
      host: true,
      proxy: {
        
      }

    }
  };
});
