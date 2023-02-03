/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        100: "24rem",
        200: "950px",
      },
      minHeight: {
        "1/2": "50%",
      },
      spacing: {
        v: "20vh",
      },
      animation: {
        slid: "slider 5s linear infinite",
      },
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif",
      },
      height: {
        150: "665px",
        60: "50vh",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        top: "top",
        spacing: "margin, padding",
      },
      boxShadow: {
        img: "rgb(0 0 0 / 22%) 0px 8px 20px 0px",
        txt: "rgb(34 34 34 / 18%) -4px 8px 20px 0px;",
      },
      backgroundImage: {
        home: 'url("https://i.pinimg.com/originals/5f/34/a5/5f34a5216b0abad545ae44713c93e997.jpg")',
        phypaper:
          'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F234792995_Importance_of_Nuclear_Physics_to_NASA%2527%2527s_Space_Missions&psig=AOvVaw1m6wGeze9HGDqbHTf7yPZm&ust=1672236440599000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC58Kr8mfwCFQAAAAAdAAAAABBQ")',
      },
    },
  },

  plugins: [],
};
