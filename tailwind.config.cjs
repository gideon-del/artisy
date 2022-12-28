/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        clashDisplay : ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'serif'],
        stixTwoText:['STIX Two Text', 'sans-serif'],
        bellefair: ['Bellefair','serif'],
        poppins:['Poppins', 'sans-serif']
      },
      colors:{
        titleHome:'#292929',
        darkBlue:'#333333',
        creatorsBg: '#E2E2E2'
      }
    
    },
  },
  plugins: [],
}
;
