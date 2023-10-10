import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hangman-typescripts",
  plugins: [
    react({
      babel: {
        // presets: [],
        plugins: [
          [
            "module-resolver",
            {
              alias: {
                "~": "./src",
              },
            },
          ],
        ],
        // babelrc: true,
        // configFile: true,
      },
    }),
  ],
});
