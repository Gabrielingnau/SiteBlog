import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      /* =======================
         🎨 COLORS
      ======================= */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: {
          100: "#7EA4D7",
          200: "#2C85FC",
          300: "#2266C1", // corrigido (era 330)
          400: "#0D284C",
        },
        cyan: {
          100: "#2DEBFC",
          200: "#18D7B6",
          300: "#0E474C",
        },
        gray: {
          100: "#E9EAEC",
          200: "#D3D5D9",
          300: "#93979E",
          400: "#20242C",
          500: "#16181D",
          600: "#14161A",
          700: "#101216",
          800: "#0B0C0F",
        },
      },

      /* =======================
         🔤 TYPOGRAPHY
      ======================= */
      fontFamily: {
        heading: ["var(--font-pt-sans-caption)"],
        body: ["var(--font-inter)"],
      },

	  screens: {
        "standard" : "1200px"
	  },

      fontSize: {
        // Headings
        hg: ["48px", { lineHeight: "120%", fontWeight: "700" }],
        xl: ["32px", { lineHeight: "120%", fontWeight: "700" }],
        lg: ["28px", { lineHeight: "120%", fontWeight: "700" }],
        md: ["24px", { lineHeight: "120%", fontWeight: "700" }],
        sm: ["20px", { lineHeight: "120%", fontWeight: "700" }],
        xs: ["16px", { lineHeight: "120%", fontWeight: "700" }],

        // Body
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],
		"body-tag": ["12px", { lineHeight: "150%", fontWeight: "400" }],

        // Actions / UI
        "action-md": ["16px", { fontWeight: "500" }],
        "action-sm": ["14px", { fontWeight: "500" }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
