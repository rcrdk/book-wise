import { Heading } from '@/components/heading'
import { Pagination } from '@/components/pagination'
import { Container as StarRating } from '@/components/star-rating/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {
	gridColumn: '1 / span 2',
	paddingBottom: '$5',

	'@media(max-width:575px)': {
		gridColumn: '1',
	},

	[`> ${Pagination}`]: {
		padding: '$5 0',

		'@media(min-width:900px)': {
			maxWidth: 460,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
})

export const Books = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	gap: '$5',

	'@media(max-width:1499px)': {
		gap: '$4',
	},

	'@media(max-width:1024px)': {
		gridTemplateColumns: '1fr 1fr',
		gap: '$5',
	},

	'@media(max-width:899px)': {
		gap: '$4',
		gridTemplateColumns: '1fr 1fr 1fr',
	},

	'@media(max-width:677px)': {
		gridTemplateColumns: '1fr 1fr',
	},
})

export const Book = styled('button', {
	all: 'unset',
	display: 'grid',
	gridTemplateColumns: '6.75rem 1fr',
	gap: '0 $5',
	padding: '$4 $5',
	background: '$gray600',
	borderRadius: '$md',

	'@media(max-width:1499px)': {
		gridTemplateColumns: '5.75rem 1fr',
		gap: '$4',
	},

	'@media(max-width:1399px)': {
		padding: '$3 $4',
		gridTemplateColumns: '5rem 1fr',
		gap: '$3',
	},

	'@media(max-width:1024px)': {
		padding: '$4 $5',
		gridTemplateColumns: '6.75rem 1fr',
		gap: '$4',
	},

	'@media(max-width:899px)': {
		padding: '$3 $4',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'auto 1fr',
	},

	'&[type]': {
		cursor: 'pointer',

		'&:hover': {
			background: '$gray600hover',
		},

		'&:focus-visible': {
			boxShadow: '$focusBody',
		},
	},
})

export const BookInfo = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',

	[`> ${Heading}`]: {
		'@media(max-width:1499px)': {
			fontSize: '$sm',
		},

		'@media(max-width:1024px)': {
			fontSize: '$md',
		},

		'@media(max-width:479px)': {
			fontSize: '$sm',
		},
	},

	[`> ${Heading}`]: {
		width: '100%',
	},

	[`> ${Text}`]: {
		color: '$gray400',
		margin: '$px 0 $4',
	},

	[`> ${StarRating}`]: {
		marginTop: 'auto',
	},
})
