import { Container as StarRating } from '@/components/star-rating/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {})

export const FeedScroll = styled('div', {
	position: 'relative',
	marginTop: '-$4',
	marginBottom: '$4',
})

export const FeedContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$7',

	'@media(max-width:575px)': {
		gap: '$5',
	},
})

export const FeedDatetime = styled(Text, {
	marginBottom: '$4',
	lineHeight: '$shorter',

	'@media(max-width:575px)': {
		fontSize: '$sm!important',
		marginBottom: '$2',
	},

	'&:first-letter': {
		textTransform: 'uppercase',
	},

	variants: {
		skeleton: {
			true: {
				display: 'inline-block',
			},
		},
	},
})

export const FeedItem = styled('button', {
	all: 'unset',
	padding: '$5 $6',
	borderRadius: '$md',
	background: '$gray700',
	width: '100%',
	boxSizing: 'border-box',
	display: 'block',

	'@media(max-width:575px)': {
		padding: '$4 $5',
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

	[`> ${Text}`]: {
		'@media(max-width:575px)': {
			fontSize: '$sm !important',
		},
	},
})

export const FeedBook = styled('div', {
	display: 'grid',
	gridTemplateColumns: '6.75rem 1fr',
	gap: '$5',
	marginBottom: '$5',

	'@media(max-width:575px)': {
		marginBottom: '$4',
		gridTemplateColumns: '5rem 1fr',
	},
})

export const FeedBookInfo = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	[`> ${StarRating}`]: {
		marginTop: 'auto',
		alignSelf: 'flex-start',
	},
})

export const FeedBookAuthor = styled(Text, {
	color: '$gray400',
	marginBottom: '$4',
	alignSelf: 'flex-start',

	variants: {
		skeleton: {
			true: {
				display: 'inline-block',
				lineHeight: '$short',
				marginTop: '$1',
				marginBottom: '$6',
			},
		},
	},
})

export const FeedBookTextSkeleton = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '$1',

	[`> ${Text}`]: {
		lineHeight: '$short',

		'&:nth-child(1)': {
			width: '100%',
		},
		'&:nth-child(2)': {
			width: '66%',
		},
		'&:nth-child(3)': {
			width: '41%',
		},
	},
})
