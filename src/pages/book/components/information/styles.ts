import { AvatarContainer } from '@/components/avatar/styles'
import { Heading } from '@/components/heading'
import { Container as StarRating } from '@/components/star-rating/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {
	borderRadius: '$lg',
	background: '$gray700',
	padding: '$6 $8 $8',
	marginBottom: '$10',
	gap: '$8',
	display: 'grid',
	gridTemplateColumns: '10.5rem auto',

	'@media(max-width:575px)': {
		gap: '$5',
		padding: '$5 $5 $6',
		marginBottom: '$7',
		gridTemplateColumns: '38% auto',
	},
})

export const Info = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',

	[`> ${Heading}`]: {
		width: '100%',
	},

	[`> ${Text}`]: {
		color: '$gray400',

		'&:not(:last-child)': {
			margin: '$1 0 $6',
		},
	},

	[`> ${StarRating}`]: {
		fontSize: '$2xl',
		margin: 'auto 0 $2',

		'@media(max-width:575px)': {
			fontSize: '$lg',
		},
	},
})

export const Stats = styled('div', {
	gridColumn: '1 / span 2',
	paddingTop: '$8',
	borderTop: '1px solid $gray600',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '$5',

	'@media(max-width:575px)': {
		paddingTop: '$5',
	},
})

export const StatItem = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridTemplateRows: 'auto 1fr',
	gap: '0 $5',

	'@media(max-width:575px)': {
		gap: '0 $2',
	},

	[`> ${AvatarContainer}`]: {
		gridRow: '1 / span 2',
		alignSelf: 'center',

		'@media(max-width:575px)': {
			marginBottom: '$2',
		},
	},

	[`> ${Heading}`]: {
		'@media(max-width:575px)': {
			fontSize: '$sm',
		},
	},

	svg: {
		fontSize: '$space$8',
		gridRow: '1 / span 2',
		color: '$green100',
		alignSelf: 'flex-start',

		'@media(max-width:575px)': {
			marginBottom: '$1',
		},
	},

	[`> ${Text}`]: {
		color: '$gray300',
		marginBottom: '$px',
	},
})

export const Summary = styled('div', {
	gridColumn: '1 / span 2',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',

	variants: {
		skeleton: {
			true: {
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
			},

			false: {
				gap: '$2',
			},
		},
	},

	defaultVariants: {
		skeleton: false,
	},
})
