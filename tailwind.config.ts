import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1400px",
    },
    // colors: {
    //   white: "#fff",
    //   black: "#273029",

    // },
    extend: {
      backgroundSize: {
        "50%": "50%",
      },
      screens: {
        "3xl": "1800px",
      },
      colors: {
        prime: "#02B4C0",
        prime2: "#2FD6E1",
        prime3: "#88F5FC",
        prime4: "#BBFBFF",
        prime5: "#D6FCFF",
        prime6: "#EDFEFF",
        secondary: "#003C58",
        secondary2: "#25607B",
        secondary3: "#49768B",
        secondary4: "#809EAC",
        secondary5: "#C6D6DD",
        secondary6: "#E2EAEE",
        greyScale: "#334155",
        greyScale2: "#475569",
        greyScale3: "#64748B",
        greyScale4: "#94A3B8",
        greyScale5: "#CBD5E1",
        greyScale6: "#E2E8F0",
        black: "#0F2228",
        stepNumberColor: "#3C50E0",
        orange: "#FFB800",
        neutrals100: "#25324B",
        neutrals80: "#515B6F",
        accentsGreen: "#56CDAD",
        neutrals10i: "#F8F8FD",
        neutrals60: "#7C8493",
        danger: "#EF4444",
        offWhite: "#F6F6F6",
        lightBrand: "#01B4C0",
      },
      fontFamily: {
        inter: ["Inter"],
        epilogue: ["Epilogue"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.625rem",
        "5xl": "4.25rem",
        "6xl": "5.5rem",
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
    backgroundImage: {
      hero: "url(/hero/bg-main.png)",
      hero2: "url(/hero/bg-main2.png)",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
