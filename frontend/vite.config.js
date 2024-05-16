// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
// });

// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: /^@ant-design\/icons(\/.*)?$/, // Mark @ant-design/icons as an external dependency
    },
  },
});
