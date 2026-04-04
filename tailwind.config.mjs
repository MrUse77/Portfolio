/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#08090d',
        'navy-surface': '#121420',
        'electric-blue': '#00e0ff',
        'light-grey': '#cdd6f4',
        'muted-grey': '#7f849c',
        'off-white': '#f8f9fa',
        'border-color': '#23263b',
      },
      fontFamily: {
        sans: ['Geist Variable', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'monospace'],
      },
      borderRadius: {
        portfolio: '12px',
      },
    },
  },
};
