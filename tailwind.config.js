module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Yellowtail: ["Yellowtail", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
