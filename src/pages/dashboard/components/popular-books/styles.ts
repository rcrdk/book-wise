import { Heading } from '@/components/heading'
import { Container as StarRatingContainer } from '@/components/star-rating/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const BookContainer = styled('div', {
	'@media(max-width:899px)': {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '$4',
	},

	'@media(max-width:600px)': {
		gridTemplateColumns: '1fr',
	},
})

export const BookItem = styled('button', {
	all: 'unset',
	display: 'grid',
	alignItems: 'flex-start',
	gridTemplateColumns: '4rem 1fr',
	gap: '0 $5',
	padding: '$4 $5',
	borderRadius: '$md',
	background: '$gray700',
	width: '100%',
	boxSizing: 'border-box',

	'@media(max-width:575px)': {
		gridTemplateColumns: '5rem 1fr',
	},

	'&:not(:last-child)': {
		marginBottom: '$3',

		'@media(max-width:899px)': {
			margin: 0,
		},
	},

	'&[type]': {
		cursor: 'pointer',

		'&:hover': {
			background: '$gray700hover',
		},
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},
})

export const BookInfo = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	alignSelf: 'stretch',

	[`> ${Heading}`]: {
		width: '100%',
		marginBottom: '$px',
	},

	[`> ${Text}`]: {
		color: '$gray400',
		marginTop: '$px',
		marginBottom: 'auto',
		minWidth: '66%',
	},

	[`> ${StarRatingContainer}`]: {
		marginTop: '$4',
	},
})
