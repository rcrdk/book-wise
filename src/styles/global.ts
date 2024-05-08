import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
		padding: 0,
		margin: 0,
		fontFamily: '$default',
	},

	body: {
		backgroundColor: '$gray800',
		color: '$gray200',
		lineHeight: '$base',
		'-webkit-font-smoothing': 'antialiased',
	},

	img: {
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
	},
})
