/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      primary: {
        DEFAULT: "hsl(250, 69%, 61%)",
        alt: "hsl(250, 57%, 53%)",
        light: "hsl(250, 92%, 85%)",
        title: "hsl(250, 5%, 15%)",
        text: "hsl(250, 8%, 45%)",
        lightText: "hsl(250, 8%, 65%)",
        input: "hsl(250, 70%, 96%)",
        body: "hsl(250, 60%, 99%)",
      },
      container: {
        DEFAULT: "#FFF"
      }
    },
    extend: {
      transitionDuration: {
        400: "400ms",
      },
      boxShadow: {
        app: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
      },
    },
  },
  plugins: [],
};

