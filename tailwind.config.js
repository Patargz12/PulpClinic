/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e9ae42",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-35px)" },
        },
      },
      animation: {
        float: "float 1s ease-in-out infinite",
      },
      margin: {
        70: "100px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
