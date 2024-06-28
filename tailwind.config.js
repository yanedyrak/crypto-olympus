/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textGray: "#EFE9E0",
        black: "#141722",
      },
    },
  },
  plugins: [],
};
