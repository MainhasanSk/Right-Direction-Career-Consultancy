/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rdcc: {
          navy: {
            DEFAULT: "#081D3D",
            dark: "#051226",
            light: "#0E2C5B",
            surface: "#0A2540",
          },
          blue: {
            DEFAULT: "#1657D9",
            hover: "#1244AD",
            light: "#2563EB",
          },
          sky: {
            DEFAULT: "#0284C7",
            light: "#38BDF8",
          },
          cyan: {
            DEFAULT: "#0EA5E9",
            light: "#BAE6FD",
            ice: "#E0F2FE",
            soft: "#F0F9FF",
          },
          gold: {
            DEFAULT: "#F59E0B",
            light: "#FCD34D",
            dark: "#D97706",
          },
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(8, 29, 61, 0.08), 0 4px 10px -2px rgba(8, 29, 61, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(8, 29, 61, 0.15), 0 10px 20px -5px rgba(22, 87, 217, 0.1)',
        'glow': '0 0 25px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
}
