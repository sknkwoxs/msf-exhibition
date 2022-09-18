/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1600px",
    },
    extend: {
      colors: {
        Brand: {
          Primary: "#E30613",
          Secondary: "#BB9503",
        },
        Neutrals: {
          White: "#ffffff",
          Grey1: "#F7F7FD",
          Grey2: "#EFEFF8",
          Grey3: "#E2E8EE",
          Grey4: "#C3CAD0",
          Grey5: "#ADB5BD",
          Grey6: "#495057",
          Grey7: "#343A40",
          Grey8: "#171717",
          Grey9: "#000000",
        },
        Messaging: {
          Information: "#0172CB",
          Success: "#28A138",
          Error: "#F93232",
          Warning: "#F0BB3C",
        },
      },
      fontFamily: {
        PT: ["Pretendard-Regular"],
        din: ["DIN"],
        nanummyeongjo: ["Nanum Myeongjo"],
        sans: ["Arial"],
      },
    },
    backgroundImage: {
      "bg-blur": "url('../public/images/bg_bl.png')",
      "bg-introduction": "url('../public/images/Asset 1@3x 2.png')",
    },
  },
  plugins: [],
};
