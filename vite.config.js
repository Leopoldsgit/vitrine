import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
})

export const config = {
  //...snip
 "resolve": {
   "alias": {
     "react": "preact/compat",
     "react-dom/test-utils": "preact/test-utils",
     "react-dom": "preact/compat",     // Must be below test-utils
     "react/jsx-runtime": "preact/jsx-runtime"
   },
 }
}
