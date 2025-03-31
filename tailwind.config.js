import React from 'react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        50: '50',
      fontFamily: {
        georgia: ['Georgia', 'serif'], 
      },
    },
  },
  plugins: [],
}
}
