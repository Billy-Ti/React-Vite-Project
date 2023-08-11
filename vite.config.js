import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base 為編譯路徑 : 判斷是開發中 (npm run dev) 還是產品路徑 ( npm run build )
  // process 為環境變數取得的方法
  // .env.NODE_ENV 為當前 node 所編譯的環境
  base: process.env.NODE_ENV === 'production' ? '/React-Vite-Project/' : '/',
  plugins: [react()],
})
