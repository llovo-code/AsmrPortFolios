/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			keyframes:{
				'fade-in': {
					"0%": {
						opacity: 0
					},
					"100%": {
						opacity: 1
					}
				}
			},
			animation:{
				'fade-in': 'fade-in 2s ease-in-out'
			}
		},
	},
	plugins: [],
}
