/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      display: ["Paytone One", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        creatheme: {
          primary: "#2A1153",
          primaryLight: "#7737E0",
          secondary: "#A8FC63",
          light: "#FBFBFB",
          black: "#1C1C1C",
          ".btn": {
            color: "#1C1C1C",
            "min-height": "42px ",
            height: "42px",
          },
          ".navbar": {
            color: "#FBFBFB",
            "font-size": "22px",
          },
        },
      },
    ],
  },
};
