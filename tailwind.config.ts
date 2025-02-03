import type { Config } from "tailwindcss";

export default {
  // darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: '#0a192f',
        lightSlate: '#8892b0',
        lighterSlate: '#ccd6f6',
        green: '#64ffda',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      maxWidth: {
        '6xl': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
