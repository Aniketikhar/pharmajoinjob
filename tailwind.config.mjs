/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'blue' },
        },
        blinkGreen: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'green' },
        },
      },
      animation: {
        'blink-blue': 'blink 1s infinite',
        'blink-green': 'blinkGreen 1s infinite',
      },
    }
  },
  plugins: [],
};
