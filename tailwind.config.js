/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        backgroundSecondary: "#F8F8F7",
        surface: {
          DEFAULT: "#FFFFFF",
          card: "#FFFFFF",
          cardHover: "#FAFAFA",
          glass: "rgba(255, 255, 255, 0.85)",
          subtle: "#F4F4F5",
        },
        accent: {
          orange: {
            DEFAULT: "#FF6B00",
            light: "#FF7A00",
            dark: "#EA580C",
            glow: "rgba(255, 107, 0, 0.20)",
          },
          gold: {
            DEFAULT: "#D97706",
            light: "#F59E0B",
            dark: "#B45309",
            glow: "rgba(217, 119, 6, 0.15)",
          },
          purple: {
            DEFAULT: "#9333EA",
            light: "#A855F7",
            dark: "#7E22CE",
            glow: "rgba(147, 51, 234, 0.15)",
          },
        },
        textMuted: "#64748B",
        textSecondary: "#475569",
        borderOrange: "rgba(255, 107, 0, 0.35)",
        borderGold: "rgba(217, 119, 6, 0.25)",
        borderPurple: "rgba(147, 51, 234, 0.25)",
        borderGlass: "rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "monospace"],
      },
      boxShadow: {
        'orange-glow': '0 0 25px rgba(255, 107, 0, 0.25)',
        'orange-glow-lg': '0 12px 35px -8px rgba(255, 107, 0, 0.30)',
        'gold-glow': '0 0 25px rgba(217, 119, 6, 0.18)',
        'purple-glow': '0 0 25px rgba(147, 51, 234, 0.18)',
        'glass-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FF7A00 0%, #FF6B00 50%, #EA580C 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
        'purple-gradient': 'linear-gradient(135deg, #A855F7 0%, #9333EA 50%, #7E22CE 100%)',
        'radial-gold-beam': 'radial-gradient(circle at 85% 0%, rgba(255, 120, 20, 0.08) 0%, rgba(255, 107, 0, 0.04) 30%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'beam-shimmer': 'beamShimmer 8s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(1deg)' },
        },
        beamShimmer: {
          '0%': { opacity: '0.7', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
