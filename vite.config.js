import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jonatandb.github.io/Jonatandb/vite-react-rick-and-morty-characters',
  plugins: [react()],
})

