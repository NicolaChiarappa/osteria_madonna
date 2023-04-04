/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#385738",
        secondary: "#FFE4C4",
        white: "#fdfdfd",
        success: "#917639",
      },
      fontFamily: {
        "miofont": "myriad-variable, sans-serif",
      },
    },
  },
  plugins: [],
};
