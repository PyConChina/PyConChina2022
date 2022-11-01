module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#fbbe01",
      },
      boxShadow: {
        lg: '3px 3px 0 black',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
