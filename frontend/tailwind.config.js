/** @type {import('tailwindcss').Config} */

module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
   animation: {
    "spin-slow": "spin 5s linear infinite",
   },
   fontFamily: {
    sans: ["var(--font-inter)"],
    serif: ["var(--font-open_Sans)"],
   },
   visibility: ["group-hover"],
  },
  container: {
   center: true,
  },
 },
 plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
