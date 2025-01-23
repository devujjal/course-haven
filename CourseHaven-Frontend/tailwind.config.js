/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        userBg: "url('./src/assets/hero/user-bg.png')",
        dashboardBanner: "url('./src/assets/dashboard/dashoboardHome/banner.png')",
      }
    },
    fontFamily: {
      roboto: ['"Roboto", serif'],
      heebo: ['"Heebo", serif']
    }
  },
  plugins: [],
}

