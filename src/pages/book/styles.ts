import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

import { styled } from '@/styles'

const fadeIn = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 },
})

const fadeOut = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
})

const slideIn = keyframes({
	from: { transform: 'translate3d(100%,0,0)' },
	to: { transform: 'translate3d(0,0,0)' },
})

const slideOut = keyframes({
	from: { transform: 'translate3d(0,0,0)' },
	to: { transform: 'translate3d(100%,0,0)' },
})

export const Overlay = styled(Dialog.Overlay, {
	position: 'fixed',
	inset: 0,
	zIndex: 9998,
	background: 'rgb(0 0 0 /  60%)',

	'@media(max-width:767px)': {
		background: 'rgb(0 0 0 /  87%)',
	},

	'&[data-state="open"]': {
		animation: `${fadeIn} 300ms ease-out`,
	},

	'&[data-state="closed"]': {
		animation: `${fadeOut} 300ms ease-in`,
	},
})

export const Close = styled(Dialog.Close, {
	all: 'unset',
	position: 'absolute',
	inset: '0 0 auto auto',
	padding: '$1 $1 0 0',
	width: 'calc($space$10 + $space$2)',
	height: 'calc($space$10 + $space$2)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '$2xl',
	color: '$gray400',
	borderRadius: '$md',
	cursor: 'pointer',

	'&:hover': {
		color: '$gray100',
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},

	'@media(max-width:767px)': {
		width: '100%',
		height: 'calc($space$10 + $space$4)',
		padding: 0,
	},
})

export const Content = styled(Dialog.Content, {
	position: 'fixed',
	inset: '0 0 0 auto',
	zIndex: 9999,
	background: '$gray800',
	width: 660,
	overflowY: 'auto',
	outline: 'none',
	padding: 'calc($10 + $2)',

	'&[data-state="open"]': {
		animation: `${slideIn} 600ms ease`,
	},

	'&[data-state="closed"]': {
		animation: `${slideOut} 600ms ease`,
	},

	'@media(max-width:767px)': {
		padding: 'calc($10 + $4) $8 $8',
		background: 'none',
		inset: '0',
		width: '100%',
	},

	'@media(max-width:575px)': {
		padding: 'calc($10 + $4) $5 $5',
	},
})
