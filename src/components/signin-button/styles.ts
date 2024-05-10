import { styled } from '@/styles'

export const SignInButtonContainer = styled('button', {
	all: 'unset',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	gap: '$5',
	padding: '0 $6',
	width: '100%',
	height: '4.5rem',
	whiteSpace: 'nowrap',
	background: '$gray600',
	borderRadius: '$sm',
	fontFamily: '$default',
	fontWeight: '$bold',
	userSelect: 'none',
	marginTop: '$4',
	cursor: 'pointer',

	img: {
		width: '2rem',
		height: '2rem',

		'@media(max-width:575px)': {
			width: '1.75rem',
			height: '1.75rem',
		},
	},

	'&:hover': {
		background: '$gray500',
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},

	'@media(max-width:575px)': {
		height: '3.5rem',
		marginTop: '$3',
	},
})
