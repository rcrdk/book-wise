import Title from '@/components/title'
import { styled } from '@/styles'

export const Container = styled('main', {
	display: 'grid',

	gap: '0 calc($10 + $6)',
	padding: '0 calc(($10 * 2) + $4)',

	'@media(max-width:1399px)': {
		padding: '0 calc($10 + $4)',
		gap: '0 $10',
	},

	'@media(max-width:1199px)': {
		padding: '0 $10',
		gap: '0 $6',
	},

	'@media(max-width:1024px)': {
		padding: '0 $5',
	},

	'@media(max-width:899px)': {
		gap: '$8',
	},

	'@media(max-width:575px)': {
		padding: '0',
	},

	[`> ${Title}`]: {
		gridColumn: '1 / span 2',

		'@media(max-width:899px)': {
			order: 1,
			gridColumn: '1',
			marginBottom: 0,
		},
	},
})
