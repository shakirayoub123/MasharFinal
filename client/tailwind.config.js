/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f1c80",
        secondary: "#f39300",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spartan: ['"League Spartan"', "sans-serif"],
      },
      boxShadow: {
        blue: "0px 4px 4px 0px #2B3476",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
      },
      screens: {
        410: "410px",
        500: "500px",
        645: "645px",
        773: "773px",
        803: "803px",
        881: "881px",
        833: "833px",
        890: "890px",
        924: "924px",
        954: "954px",
        1033: "1033px",
        1140: "1140px",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-conic-b": {
          borderBottom: "1px solid",
          borderImageSource:
            "conic-gradient(from 180deg at 50% 50%, #EB8F03 -50.19deg, #2B3476 36.35deg, #EB8F03 309.81deg, #2B3476 396.35deg)",
          borderImageSlice: "1",
        },
      });
    },
  ],
};
