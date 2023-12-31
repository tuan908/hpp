import type { Config as TailwindCssConfig } from 'tailwindcss'
const tailwindcssConfig: TailwindCssConfig = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			zIndex: {
				100: '100',
				101: '101',
			},
			width: {
				'7/8': '87.5%',
				'1/8': '12.5%',
			},
		},
	},
	plugins: [],
}

export default tailwindcssConfig