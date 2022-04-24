module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
  },
  plgins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
