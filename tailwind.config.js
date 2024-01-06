/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#09AB83",
          "secondary": "#d97706",
          "accent": "#c084fc",
          "neutral": "#111827",
          "base-100": "#000",
          "info": "#dbeafe",
          "success": "#d1fae5",
          "warning": "#fef9c3",
          "error": "#fca5a5",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  