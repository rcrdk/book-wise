import { AvatarContainer } from '@/components/avatar/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',

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
		gridTemplateColumns: '1fr',
	},
})

export const Stat = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	textAlign: 'left',
	gap: '0 $5',

	[`> ${AvatarContainer}`]: {
		gridRow: '1 / span 2',
		alignSelf: 'center',
	},

	svg: {
		fontSize: '$space$8',
		gridRow: '1 / span 2',
		color: '$green100',
		alignSelf: 'center',
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
