/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        1: "#000000",
      },
      secondary: {
        blue: "#377DFF",
        green: "#38CB89",
        orange: "##FFAB00",
        red: "###FF5630",
      },
      neutral: {
        7: "#141718",
        6: "#232627",
        5: "#343839",
        4: "#6C7275",
        3: "#E8ECEF",
        2: "#F3F5F7",
        1: "#FEFEFE",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
