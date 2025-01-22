import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#667085",
        accent: {
          DEFAULT: "#004aad",
          hover: "#003a84",
        },
        body: "#dedede",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-background-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var (--tw-gradient-background-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
