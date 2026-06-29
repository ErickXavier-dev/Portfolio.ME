/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0F14",
        surface: "#13161D",
        border: "#1E2330",
        accent: {
          primary: "#6C63FF",
          secondary: "#00D4AA",
          red: "#FF6B6B",
          yellow: "#F9CA24",
          violet: "#A29BFE",
        },
        text: {
          primary: "#F0F2F8",
          muted: "#7A8099",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        'glitch': 'glitch 0.6s cubic-bezier(.25, .46, .45, .94) both',
      },
      keyframes: {
        glitch: {
          '0%': {
            transform: 'translate(0)',
            textShadow: 'none',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
            textShadow: '2px -2px #6C63FF, -2px 2px #00D4AA',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
            textShadow: '-2px 2px #6C63FF, 2px -2px #00D4AA',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
            textShadow: '2px 2px #6C63FF, -2px -2px #00D4AA',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
            textShadow: '-2px -2px #6C63FF, 2px 2px #00D4AA',
          },
          '100%': {
            transform: 'translate(0)',
            textShadow: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
