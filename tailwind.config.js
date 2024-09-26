/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'golden-light': '0 4px 6px rgba(255, 215, 0, 0.6)',
        'golden-dark': '0 6px 10px rgba(255, 215, 0, 0.8)',
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         golden: {
//           500: '#FFD700', // Golden color
//         },
//       },
//       boxShadow: {
//         'golden': '0 4px 6px rgba(255, 215, 0, 0.5)',
//       },
//     },
//   },
//   plugins: [],
// }
