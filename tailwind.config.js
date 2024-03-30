/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      plight: "#d2c4e6",
      pdark: "#725da4",
    },
  },
  plugins: [require("flowbite/plugin")],
};
