import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#018C79',
        secondary: '#E9E9E9',
        blue: '#003A71',
        yellow: '#D7DE27',
        red: '#FF0',
        brown: '#7E3908',
        green: '#EAFBF3',
        darkGrey: "#616161",
        purpleButton: "#B3B3B3"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
    screens: {
      sm: { max: "1060px" },
      md: { min: "1061px" },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config