/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			serif: ['Playfair Display', 'serif'],
		},
		extend: {},
	},
	plugins: [],
};
