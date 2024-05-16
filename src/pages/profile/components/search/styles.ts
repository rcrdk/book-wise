import { styled } from '@/styles'

export const Container = styled('form', {
	position: 'relative',
	marginBottom: '$8',
})

export const Input = styled('input', {
	flexGrow: 1,
	width: '100%',
	borderRadius: '$sm',
	border: '1px solid $gray500',
	background: '$gray800',
	color: '$gray100',
	outline: 'none',
	boxShadow: 'none',
	height: '3rem',
	padding: '0 3rem 0 $5',
	fontSize: '$sm',

	'&::placeholder': {
		color: '$gray400',
	},

	'&:focus': {
		borderColor: '$purple100',

		'& + button': {
			color: '$purple100',
		},
	},
})

export const Button = styled('button', {
	all: 'unset',
	position: 'absolute',
	inset: '0 0 0 auto',
	height: '3rem',
	width: '3rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '$2xl',
	color: '$gray500',
	cursor: 'pointer',
	borderRadius: '$sm',

	'&:focus-visible': {
		boxShadow: '$focus',
		color: '$purple100',
	},

	'&:hover': {
		color: '$purple100',
	},
})
