import { globalCss, keyframes } from '@stitches/react'

export const pulseAnimation = keyframes({
	'0%, 100%': { background: '$skeletonFrom' },
	'50%': { background: '$skeletonTo' },
})

export const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
		padding: 0,
		margin: 0,
		fontFamily: '$default',
		'-webkit-font-smoothing': 'antialiased',
	},

	body: {
		backgroundColor: '$gray800',
		color: '$gray200',
		lineHeight: '$base',
	},

	img: {
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
	},
})
