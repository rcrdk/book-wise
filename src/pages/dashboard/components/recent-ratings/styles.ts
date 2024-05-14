import Link from 'next/link'

import { AvatarContainer } from '@/components/avatar/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const FeedContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',
})

export const FeedScroll = styled('div', {
	position: 'relative',
	marginTop: '-$4',
	marginBottom: '$4',
})

export const FeedItem = styled('div', {
	all: 'unset',
	borderRadius: '$md',
	background: '$gray700',
	width: '100%',
	boxSizing: 'border-box',

	'&:has(button)': {
		cursor: 'pointer',

		'&:hover': {
			background: '$gray700hover',
		},
	},
})

export const FeedUser = styled(Link, {
	all: 'unset',
	display: 'grid',
	alignItems: 'flex-start',
	gridTemplateColumns: 'auto 1fr auto',
	gap: '$4',
	width: '100%',
	boxSizing: 'border-box',
	padding: '$5 $6 $4',
	borderRadius: '$md',
	cursor: 'pointer',

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},

	'@media(max-width:575px)': {
		padding: '$4 $5 $3',
		gap: '$1 $4',
		gridTemplateColumns: 'auto 1fr',
	},

	[`> ${AvatarContainer}`]: {
		alignSelf: 'center',

		'@media(max-width:575px)': {
			gridRow: '1 / span 2',
		},
	},
})

export const FeedDatetime = styled(Text, {
	color: '$gray400',

	variants: {
		skeleton: {
			true: {
				display: 'inline-block',
				lineHeight: '$short',
				marginTop: '$1',
			},
		},
	},

	defaultVariants: {
		skeleton: false,
	},
})

export const FeedBook = styled('button', {
	all: 'unset',
	display: 'grid',
	gridTemplateColumns: '6.75rem 1fr',
	gap: '$5',
	width: '100%',
	boxSizing: 'border-box',
	padding: '$4 $6 $5',
	borderRadius: '$md',
	cursor: 'pointer',

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},

	'@media(max-width:575px)': {
		padding: '$3 $5 $4',
		gap: '$1 $5',
		gridTemplateColumns: '5rem 1fr',
	},
})

export const FeedBookAuthor = styled(Text, {
	color: '$gray400',
	marginBottom: '$4',

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

	defaultVariants: {
		skeleton: false,
	},
})

export const FeedBookDescription = styled(Text, {
	display: '-webkit-box',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	'-webkit-line-clamp': 3,
	'-webkit-box-orient': 'vertical',

	'@media(max-width:575px)': {
		fontSize: '$sm !important',
	},

	variants: {
		skeleton: {
			true: {
				'&:nth-last-child(1)': {
					width: '33%',
					marginTop: '$1',
				},
				'&:nth-last-child(2)': {
					width: '66%',
					marginTop: '$1',
				},
			},
		},
	},

	defaultVariants: {
		skeleton: false,
	},
})
