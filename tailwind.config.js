/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0a0b',
        neonBlue: '#00f2fe',
        neonPurple: '#4facfe',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 242, 254, 0.4)',
        'glow-purple': '0 0 20px rgba(79, 172, 254, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      }
    },
  },
  plugins: [],
}
