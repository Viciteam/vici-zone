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
      btn_bgcolor: '#2D9CDB',
      vici_black: '#000',
      red: '#fe0237',
      medium_gray: '#A0A8B0',
      dark_gray: '#596366',
      light_gray: '#F7F7F7',
      purple: '#9B51E0',
      btn_dark: '#19181A',
      tag_success: '#219653',
      bottom_gray: '#DFDFE1',
      tag_competition: '#2F4237',
      tag_progress: '#C53DF4',
      tag_maroon: '#7F0A0A',
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
