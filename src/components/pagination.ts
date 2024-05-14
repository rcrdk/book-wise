import { styled } from '@/styles'

export const Pagination = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '$4',
	marginTop: '$5',

	'@media(max-width:575px)': {
		marginTop: '$2',
	},
})

export const PaginationButton = styled('button', {
	all: 'unset',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',
	cursor: 'pointer',
	textAlign: 'center',
	borderRadius: '$sm',
	background: '$gray600',
	userSelect: 'none',
	height: 'calc($space$10 * 1.33)',

	'@media(max-width:575px)': {
		height: '$space$10',
	},

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.33,
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},

	'&:not(:disabled):hover': {
		background: '$gray600hover',
	},

	svg: {
		fontSize: '$xl',
	},
})
