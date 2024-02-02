module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        heroBg: "rgba(35, 37, 54, 1)",
        heading: "rgba(35, 37, 54, 1)",
        paragrph: "rgba(93, 95, 109, 1)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
    screens: {
      vs: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1320px",
    },
  },
  plugins: [],
};
