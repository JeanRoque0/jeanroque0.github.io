import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [react()],
  // Assets relativos funcionam no domínio raiz e em /nome-do-repositorio/.
  base: './',
})
