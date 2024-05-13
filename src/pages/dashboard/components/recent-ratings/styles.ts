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

export const FeedItem = styled('button', {
	all: 'unset',
	padding: '$6',
	borderRadius: '$md',
	background: '$gray700',

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

export const FeedUser = styled('header', {
	display: 'grid',
	alignItems: 'flex-start',
	gridTemplateColumns: 'auto 1fr auto',
	gap: '$4',
	marginBottom: '$8',

	[`> ${AvatarContainer}`]: {
		alignSelf: 'center',
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

export const FeedBook = styled('div', {
	display: 'grid',
	gridTemplateColumns: '6.75rem 1fr',
	gap: '$5',
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

export const Pagination = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '$4',
	marginTop: '$5',
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

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: 0.33,
	},

	'&:not(:disabled):hover': {
		background: '$gray600hover',
	},

	svg: {
		fontSize: '$xl',
	},
})
