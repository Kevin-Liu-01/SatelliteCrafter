module.exports = {
  content: [
    "./src/Main.js",
    "./src/Navbar.js",
    "./src/Game.js",
    "./src/Map.js",
    "./src/Sidebar.js",
    "./src/PartsBar.js",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeIn 1s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
        bounce: "bounce 20s cubic-bezier(0.2, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.2, 0, 0.2, 1) infinite",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "100%": { opacity: 100 },
          "0%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
