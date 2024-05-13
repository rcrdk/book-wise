import { Container as Title } from '@/components/title/styles'
import { styled } from '@/styles'

export const Container = styled('main', {
	display: 'grid',
	gridTemplateColumns: '1fr 320px',
	gap: '0 calc($10 + $6)',
	padding: '0 calc(($10 * 2) + $4)',

	'@media(max-width:1399px)': {
		padding: '0 calc($10 + $4)',
		gap: '0 $10',
		gridTemplateColumns: '1fr 300px',
	},

	'@media(max-width:1199px)': {
		padding: '0 $10',
		gridTemplateColumns: '1fr 280px',
		gap: '0 $6',
	},

	'@media(max-width:1024px)': {
		padding: '0 $5',
	},

	'@media(max-width:899px)': {
		gridTemplateColumns: '1fr',
		// display: 'flex',
		// flexDirection: 'column-reverse',
		gap: '$8',
	},

	'@media(max-width:575px)': {
		padding: '0',
	},

	[`> ${Title}`]: {
		gridColumn: '1 / span 2',

		'@media(max-width:899px)': {
			gridColumn: '1',
			marginBottom: 0,
		},
	},
})

export const LeftContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: '$5',
})

export const RightContainer = styled('div', {
	paddingBottom: '$5',
})
