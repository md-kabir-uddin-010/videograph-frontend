/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm-300px": "300px",
        "sm-400px": "400px",
        "sm-500px": "500px",
        "sm-600px": "600px",
        "md-700px": "700px",
        "md-800px": "800px",
        "lg-900px": "900px",
        "lg-1000px": "1000px",
        "xl-1100px": "1100px",
        "xl-1200px": "1200px",
        "xl-1300px": "1300px",
        "xl-1400px": "1400px",
        "xl-1500px": "1500px",
      },
      backgroundPosition: {
        "top-center": "top center",
      },
    },
  },
  plugins: [],
};
