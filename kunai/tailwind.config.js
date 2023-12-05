/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="night"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      minHeight: {
        '1/2screen': '50vh',
      },
      backgroundImage: (theme) => ({
        'app-alternate-stripe': `repeating-linear-gradient(to bottom, #ffffff, #ffffff 50vh, #f6f6f6 50vh, #f6f6f6 100vh)`,
        'app-hero-mobile':
          "url('https://ecm.capitalone.com/WCM/card/background-images/dining-and-entertainment/hero_dining_2880x1440/mobile.jpg')",
        'app-hero-tablet':
          "url('https://ecm.capitalone.com/WCM/card/background-images/dining-and-entertainment/hero_dining_2880x1440/tablet.jpg')",
        'app-hero-desktop':
          "url('https://ecm.capitalone.com/WCM/card/background-images/dining-and-entertainment/hero_dining_2880x1440.jpg')",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
};
