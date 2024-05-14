import { AvatarContainer } from '@/components/avatar/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',

	'@media(min-width:1025px)': {
		'@media(min-height:600px)': {
			position: 'sticky',
			top: '$8',
			alignSelf: 'flex-start',
		},
	},

	'@media(max-width:575px)': {
		borderRadius: '$md',
		background: '$gray700',
		padding: '$6 $5',
	},

	[`> ${Text}`]: {
		color: '$gray400',
		marginTop: '$1',
	},

	[`> ${AvatarContainer}`]: {
		margin: '0 auto $5',
		width: '4.5rem',
		height: '4.5rem',
	},
})

export const Divider = styled('hr', {
	margin: '$8 auto',
	width: '$space$8',
	height: '$space$1',
	border: 'none',
	background: '$gradient-horizontal',
	borderRadius: '$lg',

	'@media(max-width:575px)': {
		width: '33%',
	},
})

export const Stats = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$10',

	'@media(max-width:899px)': {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
	},

	'@media(max-width:575px)': {
		gap: '$5',
		// gridTemplateColumns: '1fr',
	},
})

export const Stat = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	textAlign: 'left',
	gap: '0 $5',

	'@media(max-width:575px)': {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
	},

	[`> ${AvatarContainer}`]: {
		gridRow: '1 / span 2',
		alignSelf: 'center',

		'@media(max-width:575px)': {
			marginBottom: '$2',
		},
	},

	svg: {
		fontSize: '$space$8',
		gridRow: '1 / span 2',
		color: '$green100',
		alignSelf: 'center',

		'@media(max-width:575px)': {
			marginBottom: '$1',
		},
	},

	[`> ${Text}`]: {
		'@media(max-width:575px)': {
			color: '$gray400',
			fontSize: '$sm',
		},
	},

	variants: {
		skeleton: {
			true: {
				gap: '$1 $5',

				[`> ${Text}`]: {
					lineHeight: '$shorter',
				},
			},
		},
	},
})
