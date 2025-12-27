const config = {

    content: [
    './app/**/*.{ts,tsx}',      // ✅ app folder ke sab pages
    './pages/**/*.{ts,tsx}',    // agar pages folder use ho raha ho
    './components/**/*.{ts,tsx}'
  ],
  plugins: {
    "@tailwindcss/postcss": {
      
    },
  },
};

export default config;
