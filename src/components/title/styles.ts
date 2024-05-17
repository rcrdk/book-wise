import { styled } from '@/styles'

export const Container = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$3',
	margin: 'calc($10 * 0.91) 0',

	'@media(max-width:1024px)': {
		margin: '$8 0',
	},

	svg: {
		fontSize: 'calc($2xl * 1.5)',
		color: '$green100',
	},
})
