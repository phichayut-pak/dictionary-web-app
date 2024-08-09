import type { Config } from "tailwindcss";

const config: Config = {
  safelist: [
    'font-sans',
    'font-serif',
    'font-mono'
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark': '#050505',
        'main-purple': '#A445ED',
        'error': '#FF5252'
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  darkMode: 'class'
};
export default config;
