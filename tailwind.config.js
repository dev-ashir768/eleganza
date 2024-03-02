/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "1.5rem",
        xl: "1.5rem",
        xxl: "1.5rem",
      },
    },

    extend: {
      colors: {
        congressBlue: "#024E82",
        black: "#000000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
