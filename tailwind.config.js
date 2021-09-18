module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1340px',
      },
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      primary_background: '#fcfcfc',
      primary_color: '#FFCA28',
      white_color: '#ffffff',
      vici_bgcolor: '#FBE8A6',
      vici_button_txt: '#FCAF38',
      vici_contact_footer: '#DEDEDE',
      vici_gray: '#999999',
    },
    extend: {
    },
  },
  variants: {
    extend: {
      textTransform: ['hover', 'focus'],
      fontSize: ['hover', 'focus'],
    },
  },
  plugins: [],
}
