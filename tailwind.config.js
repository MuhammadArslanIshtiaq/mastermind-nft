module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        titleBold: ['Striker'],
      },
      backgroundImage: {
        heroD: "url('/public/assets/images/bg-blue.png')",
        heroM: "url('/public/assets/images/bg-blue.png')",
        GPrimary:
          'linear-gradient(141deg, rgba(13,0,5,1) 5%, rgb(46 8 18) 50%, rgba(144,45,71,1) 100%)',
      },
      colors: {
        primary: {
          DEFAULT: '#A62C3B',
          50: '#E7A3AB',
          100: '#E2939D',
          200: '#DA737F',
          300: '#D15262',
          400: '#C63546',
          500: '#A62C3B',
          600: '#7A202B',
          700: '#4D141B',
          800: '#21090C',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#5C4A7B',
          50: '#BAAECE',
          100: '#AFA1C7',
          200: '#9988B7',
          300: '#846FA8',
          400: '#6F5994',
          500: '#5C4A7B',
          600: '#423558',
          700: '#282035',
          800: '#0D0B12',
          900: '#000000',
        },
        blackGray: '#464343',
      },
      boxShadow: {
        'bg-yellow': '0 -11rem 35rem 8rem #dab52329',
        'bg-primary': '0 0 15rem 15rem #55ccbb4d',
      },
    },
  },
  plugins: [],
};
