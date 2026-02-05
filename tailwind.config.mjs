/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Primary Colors
				'brand-blue-v2': '#1447E6',
				'bright-blue-v2': '#007BEF',
				'dark-blue-v2': '#051D53',
				'dark-sapphire-v2': '#2c4e9b',
				
				// Neutral Colors
				'black-soft-v2': '#0A0A0A',
				'charcoal-black-v2': '#101828',
				'charcoal-v2': '#282828',
				'ultra-dark-v2': '#171717',
				'deep-navy-v2': '#0F172B',
				
				// Gray Scale
				'neutral-gray-v2': '#575757',
				'gray-neutral-v2': '#787878',
				'gray-medium-v2': '#737373',
				'gray-muted-v2': '#969696',
				'slate-secondary-v2': '#6A7282',
				'slate-muted-v2': '#99A1AF',
				'light-gray-v2': '#E8EBEB',
				'gray-200-custom-v2': '#E5E7EB',
				'soft-gray-v2': '#F6F6F6',
				'soft-slate-v2': '#E2E8F0',
				'section-color-v2': '#F9FAFB',
				
				// Text Colors
				'text-secondary-v2': '#4A5565',
				'slate-blue-v2': '#45556C',
				
				// Accent Colors
				'brand-orange-v2': '#F54900',
				'electric-violet-v2': '#9810FA',
				'light-blue-v2': '#654CFF',
				'ruby-red-v2': '#f14666',
				'light-green-v2': '#38C016',
				
				// Borders
				'border-muted-v2': '#D1D5DC',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'custom-shadow': '0px 4px 24px 5px rgba(155, 183, 255, 0.15)',
				'3d': '0 4px 6px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3)',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(180deg, rgba(230, 239, 255, 0.8) 0%, #FFFFFF 100%)',
				'feature-icon-gradient': 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
				'button-gradient': 'linear-gradient(85deg, #2c4e9b, #2289cc, #27b7e4, #2289cc, #2c4e9b)',
			},
			lineHeight: {
				'120': '120%',
				'170': '170%',
			},
			letterSpacing: {
				'tight-1.5': '-1.5%',
			},
			borderRadius: {
				'6.95': '6.95px',
				'11': '11px',
			},
			animation: {
				'fade-in-up': 'fadeInUp 700ms cubic-bezier(0.22, 0.9, 0.3, 1) 350ms forwards',
				'fade-in': 'fadeIn 300ms ease-in-out',
				'float': 'float 4s infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(0.5rem)' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
