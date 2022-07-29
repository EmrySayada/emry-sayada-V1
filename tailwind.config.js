module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: { max: "768px" },
      computer: { min: "768px" },
    },
    extend: {
      keyframes: {
        upDown: {
          "50%": { transform: "translateY(50px)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
          // '100%': { transform: 'translateX(100em)' }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        downShow: {
          "100%": { transform: "translateY(-20px)", opacity: 1 },
        },
        downShowText: {
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        headerShow: {
          "100%": { transform: "translateY(0px)" },
        },
        headerItems: {
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
