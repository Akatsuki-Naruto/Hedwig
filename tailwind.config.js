/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          150: "#faebd7",
          151: "#feffdc",
          152: "#d9d9d9",
          153: "#f0f8ff",
          154: "#FECE36",
          155: "#F4F4F4",
          156: "#242424",
        },
        secondary: {},
        padding: {
          "13px": "13px",
          "10px": "10px",
        },
        borderWidth: {
          "1px": "1px",
        },
        zIndex: {
          25: "25",
          45: "45",
          49: "49",
        },
        width: {
          "28%": "28%",
        },
        screens: {
          md: "768px",
          "m-md": { max: "768px" },
          "l-md": { max: "1050px" },
        },
      },
    },
  },
  plugins: [],
};
