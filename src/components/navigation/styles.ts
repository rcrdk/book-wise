import Image from 'next/image'
import Link from 'next/link'

import BackgroundImage from '@/assets/navigation-left.png'
import { styled } from '@/styles'

export const Container = styled('header', {
	position: 'sticky',
	zIndex: '99',
	top: '$space$5',
	alignSelf: 'flex-start',
	minHeight: 'calc(100dvh - ($space$5 * 2))',
	background: '$gradient-vertical',
	borderRadius: '$md',
	backgroundColor: '$gray700',
	backgroundSize: 'cover',
	backgroundPosition: 'bottom center',
	backgroundImage: `url(${BackgroundImage.src})`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'@media(max-width:1024px)': {
		flexDirection: 'row',
		justifyContent: 'space-between',
		minHeight: 0,
		backgroundImage: 'none',
	},
})

export const Brand = styled(Image, {
	maxWidth: '66%',
	margin: '$10 0',

	'@media(max-width:1024px)': {
		margin: '$6',
		maxWidth: 160,
	},

	'@media(max-width:575px)': {
		margin: '$5',
		marginRight: 0,
		width: 140,
	},

	'@media(max-width:375px)': {
		margin: '$4',
		marginRight: 0,
		width: 130,
	},
})

export const Nav = styled('nav', {
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	padding: '$6 0',
	gap: '$4',

	'@media(max-width:1024px)': {
		padding: '$2 0',
		paddingLeft: '$1',
	},
})

export const NavLink = styled(Link, {
	all: 'unset',
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	gap: '$3',
	color: '$gray400',
	textDecoration: 'none',
	padding: '$2 0',
	cursor: 'pointer',
	borderRadius: '$sm',

	'@media(max-width:1024px)': {
		padding: '$2 0',
		paddingRight: '$5',
	},

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

	'&:focus-visible': {
		boxShadow: '$focus',
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
	borderRadius: '$sm',

	'@media(max-width:1024px)': {
		padding: 0,
		borderRadius: '$full',
	},

	'&:focus-visible': {
		boxShadow: '$focus',
	},

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

export const LargeNav = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	alignItems: 'center',
	width: '100%',

	'@media(max-width:1024px)': {
		display: 'none',
	},
})

export const SmallNav = styled('div', {
	display: 'none',
	gap: '$2',
	alignItems: 'center',
	paddingRight: '$5',

	'@media(max-width:1024px)': {
		display: 'flex',
	},

	'@media(max-width:375px)': {
		paddingRight: '$4',
	},
})

export const NavTrigger = styled('button', {
	all: 'unset',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
	width: '$space$10',
	height: '$space$10',
	borderRadius: '$full',
	background: '$gray600',
	cursor: 'pointer',

	svg: {
		color: '$gray400',
		width: '$space$6',
		height: '$space$6',
	},

	'&:focus-visible': {
		boxShadow: '$focus',
	},
})
