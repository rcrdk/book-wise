import { Empty } from '@/components/empty'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {
	all: 'unset',
	display: 'grid',
	gridTemplateColumns: '6.75rem 1fr',
	padding: '$5 $6',
	gap: '$6',
	borderRadius: '$md',
	boxSizing: 'border-box',
	width: '100%',
	marginBottom: '$10',

	'@media(max-width:899px)': {
		marginBottom: '$8',
	},

	'@media(max-width:575px)': {
		padding: '$4 $5',
		gap: '$5',
		gridTemplateColumns: '5rem 1fr',
	},

	'&[type]': {
		cursor: 'pointer',

		'&:hover': {
			background: '$gray600hover',
		},
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},
})

export const Info = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '$3',

	[`> ${Text}`]: {
		color: '$gray300',

		'&:first-letter': {
			textTransform: 'uppercase',
		},
	},
})

export const Author = styled(Text, {
	color: '$gray400',
	marginBottom: '$6',

	'@media(max-width:575px)': {
		marginBottom: '$3',
	},

	variants: {
		skeleton: {
			true: {
				display: 'inline-block',
				marginTop: '$1',
			},
		},
	},
})

export const Description = styled(Text, {
	display: '-webkit-box',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	'-webkit-line-clamp': 2,
	'-webkit-box-orient': 'vertical',

	'@media(max-width:575px)': {
		fontSize: '$sm !important',
	},

	variants: {
		skeleton: {
			true: {
				marginTop: '$1',
				lineHeight: '$short',

				'&:last-child': {
					width: '75%',
				},
			},
		},
	},
})

export const Error = styled(Empty, {
	marginBottom: '$10',

	'@media(max-width:899px)': {
		marginBottom: '$8',
	},
})
