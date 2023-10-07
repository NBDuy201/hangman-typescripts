import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#f1f5f9",
      },
    },
  },
  plugins: [],
} satisfies Config;
