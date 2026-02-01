import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        slate: "#0F172A",
        steel: "#1E293B",
        mist: "#F8FAFC",
        brandBlue: "#1F5AA6",
        brandGreen: "#2FA24A",
        brandOrange: "#F39B2D"
      }
    }
  },
  plugins: []
};

export default config;
