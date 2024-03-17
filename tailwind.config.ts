import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2948B8",
        secondary: "#FF286D",
        accent: "#EBA3B3",
        body: "#161623",
        background: "#FEFFFF",
        "background-text": "#DBDADB",
      },
      fontFamily: {
        monospace: ["var(--font-monospace)"],
        handwriting: ["var(--font-handwriting)"],
      },
    },
  },
  plugins: [],
};
export default config;
