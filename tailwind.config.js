/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        orange: "#fabb09",
        dodgerblue: "#4285f3",
        gray: "#141718",
        mediumseagreen: {
          "100": "#0cbf69",
          "200": "#34a853",
        },
        tomato: "#e94336",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "5xl": "24px",
      "21xl": "40px",
      "17xl": "36px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
