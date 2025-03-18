import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    AutoImport({
      imports: [
        "./src/layout/shortcodes/Heading.jsx",
        "./src/layout/shortcodes/Paragraph.jsx",
        "./src/layout/shortcodes/Blockquote.jsx",
      ],
    }),
    mdx(),
    (await import("astro-compress")).default(),
  ],
});
