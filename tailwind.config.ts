import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-blue': '#0A2B94',
        'hero-yellow': '#FFD700',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        pageLoad: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        siteLoad: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        imageLoad: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        imageAppear: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out forwards',
        fadeOut: 'fadeOut 0.2s ease-out forwards',
        pageLoad: 'pageLoad 1s ease-out forwards',
        siteLoad: 'siteLoad 0.8s ease-out forwards',
        imageAppear: 'imageAppear 1s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
