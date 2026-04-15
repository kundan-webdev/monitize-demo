import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)"
        },
        surface: "var(--color-surface)",
        text: "var(--color-text)"
      },
      spacing: {
        xs: "var(--space-1)",
        sm: "var(--space-2)",
        md: "var(--space-4)",
        lg: "var(--space-6)",
        xl: "var(--space-8)",
        "2xl": "var(--space-12)"
      },
      fontSize: {
        xs: [
          "var(--text-xs)",
          {
            lineHeight: "1.4"
          }
        ],
        sm: [
          "var(--text-sm)",
          {
            lineHeight: "1.5"
          }
        ],
        base: [
          "var(--text-base)",
          {
            lineHeight: "1.6"
          }
        ],
        lg: [
          "var(--text-lg)",
          {
            lineHeight: "1.5"
          }
        ],
        xl: [
          "var(--text-xl)",
          {
            lineHeight: "1.4"
          }
        ],
        "2xl": [
          "var(--text-2xl)",
          {
            lineHeight: "1.3"
          }
        ],
        "3xl": [
          "var(--text-3xl)",
          {
            lineHeight: "1.2"
          }
        ]
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui"
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular"
        ]
      }
    }
  },
  plugins: []
};

export default config;
