import { Container as Title } from '@/components/title/styles'
import { styled } from '@/styles'

export const Container = styled('main', {
	display: 'grid',
	gridTemplateColumns: '1fr 320px',
	gap: '0 calc($10 + $6)',
	alignItems: 'center',
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
		gridTemplateColumns: '1fr 260px',
	},

	'@media(max-width:575px)': {
		padding: '0',
		gridTemplateColumns: '1fr',
	},

	[`> ${Title}`]: {
		'@media(max-width:899px)': {
			marginBottom: 0,
		},
	},
})
