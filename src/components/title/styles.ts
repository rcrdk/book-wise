import { styled } from '@/styles'

import { Heading } from '../heading'

export const Container = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$3',
	margin: 'calc($10 * 0.91) 0',

	'@media(max-width:1024px)': {
		margin: '$8 0',
	},

	[`> ${Heading}`]: {},

	svg: {
		fontSize: 'calc($2xl * 1.5)',
		color: '$green100',
	},
})
