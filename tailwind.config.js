module.exports = {
  mode: 'jit',

  // These paths are just examples, customize them to match your project structure

  purge: [

    './public/**/*.html',

    './src/**/*.{js,jsx,ts,tsx,vue}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        DEFAULT: '#161A29',
      },
      grey:{
        DEFAULT: '#989696',
      },
      white:{
        DEFAULT: '#FFFFFF'
      }
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
