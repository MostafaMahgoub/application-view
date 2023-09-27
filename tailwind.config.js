module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-aliceblue': '#F0F8FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.2rem',
      },
      spacing: {
        '28': '8rem',
        '0.1': '0.1rem',
        '0.3': '0.3rem',
      },
      width: {
        '98': '98%',
        '70vw': '70vw',
      },
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups"),
  ],
};
