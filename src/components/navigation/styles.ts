import Image from 'next/image'
import Link from 'next/link'

import BackgroundImage from '@/assets/navigation-left.png'
import { styled } from '@/styles'

export const Container = styled('header', {
	position: 'sticky',
	top: '$space$5',
	alignSelf: 'flex-start',
	minHeight: 'calc(100dvh - ($space$5 * 2))',
	background: '$gradient-vertical',
	borderRadius: '$md',
	backgroundColor: '$purple200',
	backgroundSize: 'cover',
	backgroundPosition: 'bottom center',
	backgroundImage: `url(${BackgroundImage.src})`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

export const Brand = styled(Image, {
	maxWidth: '66%',
	margin: '$10 0',
})

export const Nav = styled('nav', {
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	padding: '$6 0',
	gap: '$4',
})

export const NavLink = styled(Link, {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	gap: '$3',
	color: '$gray400',
	textDecoration: 'none',
	padding: '$2 0',

	svg: {
		fontSize: '$space$6',
	},

	'&:before': {
		content: '',
		display: 'none',
		position: 'absolute',
		right: '100%',
		top: '$2',
		width: '$space$1',
		height: 'calc(100% - ($space$2 * 2))',
		background: '$gradient-vertical',
		borderRadius: '$lg',
		marginRight: '$4',
	},

	'&:hover': {
		color: '$gray200',
	},

	variants: {
		active: {
			true: {
				color: '$gray200',
				fontWeight: '$bold',

				'&:before': {
					display: 'block',
				},
			},
		},
	},

	defaultVariants: {
		active: false,
	},
})

export const UserLink = styled('button', {
	all: 'unset',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '$3',
	padding: '$5 0',
	color: '$gray200',
	width: '83%',
	cursor: 'pointer',

	span: {
		'&:nth-child(2)': {
			display: 'block',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			minWidth: 0,
			fontSize: '$sm',
		},
	},

	svg: {
		flexShrink: 0,
		fontSize: '$space$5',
		color: '$green100',

		'&:nth-child(3)': {
			color: '$red',
		},
	},

	'&:hover': {
		color: '$gray400',
	},
})
