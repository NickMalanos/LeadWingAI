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
        sun: "#FBBF24",
        ocean: "#2563EB",
        emerald: "#10B981"
      }
    }
  },
  plugins: []
};

export default config;
