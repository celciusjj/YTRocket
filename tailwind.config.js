module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'card': '0 4px 10px rgba(8, 15, 52, 0.15)',
        },
        colors: {
          primary: {
            DEFAULT: '#0646FE',
            20: '#0646FE33', // 20% opacity
            40: '#01258C66', // 40% opacity
            60: '#01258C99', // 60% opacity
            100: '#01258C',   // 100% opacity
          },
          secondary: '#71839B',
          dark: '#242731',
          light: '#F6F9FF',
          accent: '#85ACFD',
          deep: {
            DEFAULT: '#011243',
            dark: '#171C54',
          },
          neutral: {
            DEFAULT: '#608EFA',
            light: '#BFD2FE',
          },
        },
        fontFamily: {
          main: ['lato', 'sans-serif']
        },
      },
    },
    plugins: [],
  }