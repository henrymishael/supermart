/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Nunito Sans",
      },
    },
    screens: {
      lg: "980px",
      md: "760px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
