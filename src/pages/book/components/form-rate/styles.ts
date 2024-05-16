import * as Collapsible from '@radix-ui/react-collapsible'
import { keyframes } from '@stitches/react'

import { Text } from '@/components/text'
import { styled } from '@/styles'

const slideDown = keyframes({
	from: { height: 0 },
	to: { height: 'var(--radix-collapsible-content-height)' },
})

const slideUp = keyframes({
	from: { height: 'var(--radix-collapsible-content-height)' },
	to: { height: 0 },
})

const loading = keyframes({
	to: { transform: 'rotate(360deg)' },
})

export const Header = styled('header', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '$5',

	'@media(max-width:575px)': {
		marginBottom: '$3',
	},

	[`> ${Text}`]: {
		'@media(max-width:575px)': {
			fontSize: '$sm!important',
		},
	},
})

export const HeaderButton = styled('button', {
	all: 'unset',
	fontWeight: '$bold',
	cursor: 'pointer',
	lineHeight: 1,
	color: '$purple100',
	borderRadius: '$sm',

	'@media(max-width:575px)': {
		fontSize: '$sm',
	},

	'&:hover': {
		color: '$gray100',
	},

	'&:focus-visible': {
		boxShadow: '$focusBody',
	},
})

export const Collapse = styled(Collapsible.CollapsibleContent, {
	overflow: 'hidden',
	borderRadius: '$sm',

	'&[data-state="open"]': {
		animation: `${slideDown} 300ms ease-out`,
	},

	'&[data-state="closed"]': {
		animation: `${slideUp} 300ms ease-out`,
	},
})

export const Form = styled('form', {
	padding: '$6',
	background: '$gray700',
	borderRadius: '$sm',

	'@media(max-width:575px)': {
		padding: '$5',
	},

	'@media(max-width:479px)': {
		gridColumn: '1 / span 2',
	},
})

export const FormOffset = styled('div', {
	height: '$space$4',
})

export const FormHeader = styled('header', {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr auto',
	alignItems: 'center',

	'@media(max-width:479px)': {
		gridTemplateColumns: 'auto 1fr',
	},

	[`> ${Text}`]: {
		padding: '0 $5 0 $3',
		fontWeight: '$bold',
	},
})

export const FormStars = styled('div', {
	display: 'flex',
	flexShrink: 0,
	color: '$purple100',

	'@media(max-width:479px)': {
		gridColumn: '1 / span 2',
		marginTop: '$4',
	},

	'&:hover': {
		color: '$green100',
	},
})

export const FormStar = styled('label', {
	display: 'block',
	position: 'relative',
	cursor: 'pointer',
	fontSize: '$2xl',
	color: 'currentColor',

	input: {
		opacity: 0,
		position: 'absolute',
		inset: 0,
		width: '100%',
		height: '100%',
		cursor: 'pointer',

		'&:focus-visible': {
			'& + svg': {
				boxShadow: '$focus',
			},
		},
	},

	svg: {
		borderRadius: '$md',
		display: 'block',
		paddingLeft: '$1',
		width: 'calc(1em + $space$1)',
	},

	'&:hover': {
		color: '$green100',

		'& ~ *': {
			color: '$purple100',
		},
	},

	variants: {
		error: {
			true: {
				color: '$red',
			},
		},
	},
})

export const FormDescription = styled('textarea', {
	margin: '$6 0 $2',
	padding: '$4 $5',
	width: '100%',
	borderRadius: '$md',
	background: '$gray800',
	resize: 'none',
	border: '2px solid $gray600',
	outline: 'none',
	color: '$gray100',

	'@media(max-width:575px)': {
		margin: '$4 0 $1',
		padding: '$3 $3',
	},

	'&::placeholder': {
		color: '$gray400',
	},

	'&:focus': {
		borderColor: '$green100',
	},

	'&:disabled': {
		opacity: 0.5,
	},

	variants: {
		error: {
			true: {
				borderColor: '$red !important',
			},
		},
	},
})

export const FormButtons = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
	gap: '$2',

	[`> ${Text}`]: {
		flexGrow: 1,
		color: '$gray400',
	},
})

export const FormButton = styled('button', {
	all: 'unset',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '$sm',
	fontSize: '$2xl',
	width: 'calc($space$10 + $space$1)',
	height: 'calc($space$10 + $space$1)',
	background: '$gray600',
	cursor: 'pointer',
	color: '$purple100',

	'&:last-child': {
		color: '$green100',
	},

	'&:disabled': {
		opacity: 0.6,
		cursor: 'not-allowed',

		svg: {
			color: '$gray400',
		},
	},

	'&:not(:disabled):hover': {
		background: '$gray600hover',
	},

	variants: {
		loading: {
			true: {
				cursor: 'wait',

				svg: {
					animation: `${loading} 1500ms linear infinite`,
				},
			},
		},
	},
})
