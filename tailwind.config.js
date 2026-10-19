export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171D1B",      // deep forest charcoal
        panel: "#202A26",    // raised surfaces
        line: "#35413B",     // dividers
        bone: "#F4F0E7",     // warm ivory
        ash: "#ADB4AC",      // soft sage gray
        tungsten: "#C58B64", // muted copper accent
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
