import { execSync } from 'node:child_process'
import { readdirSync, readFileSync } from 'node:fs'

for (const [label, mode] of [
  ['legacy()', ''],
  ["legacy() + build.cssTarget: ['chrome61', 'safari12']", 'css-target'],
  ['no plugin-legacy', 'no-legacy']
]) {
  execSync('vite build --logLevel silent', { env: { ...process.env, MODE: mode } })
  const css = readdirSync('dist/assets')
    .filter(f => f.endsWith('.css'))
    .map(f => readFileSync(`dist/assets/${f}`, 'utf8').trim())
    .join('')
  console.log(`${label}\n  ${css}\n`)
}
