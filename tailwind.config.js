/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': {'min': '200px', 'max' :'639px'},
        // => @media (min-width: 992px) { ... }
      },
      fontFamily:{
        poppins: ["poppins", "sans-serif"]
      },
      colors: {
        
        'purple': '#3f3cbb', 
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubbleGum': '#ff77e9',
        'bermuda': '#15dbba',
     
      },
      spacing: {
        '99': '18rem',
        '102': '21rem',
        '110': '24rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-abcd': {
          '-webkit-text-stroke': '2px #F6921E',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}

