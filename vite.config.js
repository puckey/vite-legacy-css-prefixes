import legacy from '@vitejs/plugin-legacy'

const mode = process.env.MODE

export default {
  plugins: mode === 'no-legacy' ? [] : [legacy()],
  build: mode === 'css-target' ? { cssTarget: ['chrome61', 'safari12'] } : {}
}
