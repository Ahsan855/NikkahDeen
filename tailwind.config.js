/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CC5DE8",
        seocundary: "#515251",
        dark: "#252932",
        medium: "#293245",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        "noto-bengali": ["Noto Sans Bengali", "sans-serif"],
      },
      fontSize: {
        header: ["42px", "62px"],
        headerhero: ["56px", "72px"], // Font size and line height for header class
      },
    },
  },
  plugins: [],
};
