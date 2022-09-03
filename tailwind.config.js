module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '.5rem',
        lg: '40px',
        xl: '50px',
        '2xl': '6rem',
      },
    },
    screens: {
      xs: '480px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'grey': '#333333',
      'white': '#FFFFFF',
      'black': '#151515',
      'primary': '#0067FF',
      'secondary': '#FF8200',
      'primary-dark': '#222240',
      'secondary-dark': '#424C53',
      'info': '#FF9B00'
    },
    backgroundColor: {
      'white': '#FFFFFF',
      'light-gray': '#F5F5F5',
      'dark-gray': '#bfbfbf',
      'grey': '#F8F8F8',
      'primary': '#0067FF',
      'secondary': '#121921',
      'primary-dark': '#222240',
      'secondary-dark': '#424C53',
      'info': '#FF9B00'
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '4px',
      'md': '10px',
      'lg': '100px',
      'full': '9999px',
      'large': '12px',
    },
    fontSize: {
      xs: ['14px', '16px'],
      sm: ['16px', '20px'],
      base: ['20px', '22px'],
      md: ['26px', '30px'],
      lg: ['38px', '42px'],
      xl: ['64px', '74px'],
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'Merriweather'],
      serif: ['Monsterrat', 'Merriweather', 'serif'],
      headers: ['Oswald']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}