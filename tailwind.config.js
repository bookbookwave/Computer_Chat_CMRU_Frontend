module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '20px',
      3: '30px',
      4: '40px',
      6: '60px',
      8: '80px'
    },
    height: {
      906: '906px'
    },
    width: {
      1111: '1111px'
    },
    fontFamily: {
      Kanit: ['sans-serif', 'Kanit-Light'],
      'kanit-regular': ['Kanit-Regular', 'sans-serif'],
      'kanit-light': ['Kanit-Light', 'sans-serif']
    },
    colors: {
      primary: '#ED6C05',
      secondary: '#009E79',
      success: '#70B642',
      info: '#1688C4',
      warning: '#FFB100',
      white: '#FFFFFF',
      LightGray1: '#F5F5F5',
      LightGray2: '#D9D9D9',
      Gray: '#808080',
      black: '#282828',
      SuccessBg: '#EEF6E8',
      InfoBg: '#E3F1F8',
      WarningBg: '#FEF0E2',
      ErrorBg: '#FEE8E7'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
