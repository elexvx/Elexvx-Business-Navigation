/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          // Google 字体
          'Roboto',
          'Noto Sans',
          'Noto Sans JP',
          'Noto Sans KR',
          'Noto Sans SC',
          'Noto Sans TC',
          'Noto Naskh Arabic',
          'Noto Sans Thai',
          'Noto Sans Hebrew',
          'Noto Sans Bengali',
          // 苹果字体
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Segoe UI"',
          // 通用字体
          'sans-serif'
        ],
      },
    },
  },
}
