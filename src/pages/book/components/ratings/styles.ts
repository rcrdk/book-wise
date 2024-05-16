import Link from 'next/link'

import { AvatarContainer } from '@/components/avatar/styles'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',

	'@media(max-width:575px)': {
		gap: '$3',
	},
})

export const Item = styled('div', {
	borderRadius: '$md',
	background: '$gray700',
	width: '100%',
})

export const User = styled(Link, {
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
			alignSelf: 'flex-start',
			gridRow: '1 / span 2',
		},
	},
})

export const Datetime = styled(Text, {
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

export const Comment = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: '0 $6 $5',
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

	'@media(max-width:575px)': {
		padding: '0 $5 $4',
	},
})
