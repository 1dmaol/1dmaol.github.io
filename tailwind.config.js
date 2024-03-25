/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          backgroundImage: {
            'enso-project': "url('/enso.png')",
            'viking-project': "url('/viking.png')",
          }
        },
    },
    plugins: [],
}

