import Link from 'next/link'

import { styled } from '@/styles'

import { Text } from '../text'

export const BoxContainer = styled('section', {})

export const BoxHeader = styled('header', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '$4',

	[`> ${Text}`]: {
		'@media(max-width:575px)': {
			fontSize: '$sm!important',
			marginBottom: '$2',
		},
	},
})

export const BoxHeaderLink = styled(Link, {
	all: 'unset',
	display: 'flex',
	alignItems: 'center',
	gap: '$2',
	fontWeight: '$bold',
	cursor: 'pointer',
	lineHeight: 1,
	color: '$purple100',
	borderRadius: '$sm',

	'&:hover': {
		color: '$gray100',
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},
})

export const BoxBody = styled('div', {
	borderRadius: '$md',

	variants: {
		background: {
			default: {
				background: '$gray700',
			},
			light: {
				background: '$gray600',
			},
		},
	},

	defaultVariants: {
		background: 'default',
	},
})
