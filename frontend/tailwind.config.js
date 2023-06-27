/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Grotesk",
      },
      backgroundImage: {
        mobile: "url('/assets/bg-main-mobile.png')",
        desktop: "url('/assets/bg-main-desktop.png')",
        cardFront: "url('/assets/bg-card-front.png')",
        cardBack: "url('/assets/bg-card-back.png')",
      },
    },
    colors: {
      gradient: {
        a: "hsl(var(--color-primary-gradient-a))",
        b: "hsl(var(--color-primary-gradient-b))",
      },
      red: "hsl(var(--color-primary-red))",
      white: "hsl(var(--color-neutral-white))",
      lightGrayViolet: "hsl(var(--color-neutral-light-grayish-violet))",
      darkGrayViolet: "hsl(var(--color-neutral-dark-grayish-violet))",
      darkViolet: "hsl(var(--color-neutral-very-dark-violet))",
      grayText: "#908c93",
    },
  },
  plugins: [],
};
