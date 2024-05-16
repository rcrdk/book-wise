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

	'.Toastify__toast-container': {
		padding: '0 !important',
		bottom: 'calc($5 - $2) !important',
		left: '$5 !important',

		'@media(max-width:575px)': {
			width: 'calc(100vw - $space$10) !important',
		},
	},

	'.Toastify__toast': {
		marginBottom: '$2 !important',
		padding: '0 !important',
		borderRadius: '$md !important',
		minHeight: 'inherit !important',
		maxHeight: 'inherit !important',
	},

	'.Toastify__toast-body': {
		padding: '$2 $4 !important',
		gap: '$3',
		fontSize: '$sm',
		fontWeight: '$bold',
		lineHeight: '$shorter',
		textWrap: 'balance',
	},

	'.Toastify__toast-icon': {
		width: 'auto !important',
		margin: '0 !important',
		flexShrink: 0,
		fontSize: '$2xl',
	},

	'.Toastify__progress-bar--wrp': {
		height: '2px !important',
	},

	'.Toastify__progress-bar': {
		background: '$white !important',
		opacity: '1 !important',
	},

	'.Toastify__toast--success': {
		'--toastify-color-light': '$colors$green100',
		'--toastify-text-color-light': '$colors$white',
	},

	'.Toastify__toast--error': {
		'--toastify-color-light': '$colors$red',
		'--toastify-text-color-light': '$colors$white',
	},
})
