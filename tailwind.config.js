/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-rgba': 'rgba(249, 250, 242, 1)',
        'custom-green':'rgba(81, 130, 50, 1)',
        
      },
      
    },
  },
  plugins: [daisyui],
}

