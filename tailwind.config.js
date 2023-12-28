/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#ffffff",
      "header": {
        DEFAULT: "#ffffff",
        "gray": "#E4E3EB",
      },
      "button": {
        "active": "#5D37F3",
        "inactive": "#E4E3EB",
      },
      "body" : {
        DEFAULT: "#F3F2FA",
      },
      "text": {
        "primary": "#1A1A1F",
        "secondary": "#85858D",
        "content": "#404049",
        "error": "#EA1919",
      },
      "input": {
        DEFAULT: "#F7F7FF",
        "border": {
          DEFAULT: "#E4E3EB",
          "active": "#5D37F3",
          "error": "#EA1919",
          "valid": "#14D81C"
        },
        "placeholder": "#85858D"
      }
    }
  },
  plugins: [],
}

