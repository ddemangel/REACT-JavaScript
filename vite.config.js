import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT :
// - Si vous déployez sur GitHub Pages dans un repo nommé REACT-JavaScript,
//   mettez base: "/REACT-JavaScript/"
// - En local, laissez base: "" (par défaut).
export default defineConfig({
  plugins: [react()],
  base: "/REACT-JavaScript/",
})

