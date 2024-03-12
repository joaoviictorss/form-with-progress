/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-w-1': '20%',
        'custom-w-2': '40%',
        'custom-w-3': '60%',
        'custom-w-4': '80%',
        'custom-w-5': '100%',
      },
      

    },
  },
  plugins: [],
};
