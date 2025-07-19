import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        plugins: [daisyui],
        daisyui: {
          themes: ['dark'],
        },
      },
    }),
  ],
})
