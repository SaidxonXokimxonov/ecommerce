/** @type {import('tailwindcss').Config} */
export default {
	content: ['./public/index.html', './public/shop.html', './public/signUp.html', './public/signIn.html', './public/info.html', './src/**/*.{js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				comic: ["Comic Neue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
