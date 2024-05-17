import { Swiper, SwiperSlide } from 'swiper/react'

import { styled } from '@/styles'
import { pulseAnimation } from '@/styles/global'

export const Container = styled('div', {
	gridColumn: '1 / span 2',
	marginBottom: 'calc($10 * 0.91)',

	'@media(max-width:1024px)': {
		marginBottom: '$8',
	},

	'@media(max-width:899px)': {
		marginBottom: 0,
	},

	'@media(max-width:575px)': {
		gridColumn: 'calc(100vw - $space$10)',
		width: 'calc(100vw - $space$10)',
	},
})

export const Button = styled('button', {
	all: 'unset',
	display: 'block',
	cursor: 'pointer',
	color: '$purple100',
	fontSize: '$md',
	lineHeight: '$base',
	outline: 'none',
	padding: '$1 $4',
	borderRadius: '$full',
	userSelect: 'none',
	whiteSpace: 'nowrap',
	position: 'relative',
	boxSizing: 'border-box',

	'&:before': {
		content: '',
		display: 'block',
		position: 'absolute',
		inset: 0,
		borderRadius: '$full',
		border: '1px solid $purple200',
		pointerEvents: 'none',
	},

	variants: {
		active: {
			true: {
				background: '$purple200',
				borderColor: '$purple200',
				color: '$white',
			},

			false: {
				'&:hover': {
					color: '$green100',

					'&:before': {
						borderColor: '$green200',
					},
				},

				'&:focus-visible': {
					color: '$green100',

					'&:before': {
						borderColor: '$green200',
					},
				},
			},
		},

		skeleton: {
			true: {
				pointerEvents: 'none',
				color: 'transparent !important',
				animation: `${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,

				'&:before': {
					display: 'none',
				},
			},
		},
	},
})

export const SliderContainer = styled('div', {
	overflow: 'hidden',
	borderTopLeftRadius: '$full',
	borderBottomLeftRadius: '$full',
	width: 'calc(100% + (($space$10 * 2) + $space$4) + $space$5)',
	paddingRight: 'calc(($space$10 * 2) + $space$4 + $space$5)',

	'@media(max-width:1399px)': {
		width: 'calc(100% + $space$10 + $space$4 + $space$5)',
		paddingRight: 'calc($space$10 + $space$4 + $space$5)',
	},

	'@media(max-width:1199px)': {
		width: 'calc(100% + $space$10 + $space$5)',
		paddingRight: 'calc($space$10 + $space$5)',
	},

	'@media(max-width:1024px)': {
		borderRadius: 0,
		marginLeft: '-$space$10',
		padding: '0 $space$10',
		width: '100vw',
	},

	'@media(max-width:575px)': {
		marginLeft: '-$space$5',
		padding: '0 $space$5',
	},
})

export const Slider = styled(Swiper, {
	overflow: 'visible !important',
})

export const Slide = styled(SwiperSlide, {
	width: 'auto !important',
})
