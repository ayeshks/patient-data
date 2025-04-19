/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:'#429AB9'
       },
       backgroundImage: {
        'hero': "url('@/assets/hero.jpg')",
      },
    },
    
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

