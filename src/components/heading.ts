import { ComponentProps, ElementType } from 'react'

import { pulseAnimation } from '@/styles/global'

import { styled } from '../styles'

export const Heading = styled('p', {
	fontFamily: '$default',
	fontWeight: '$bold',
	lineHeight: '$short',
	margin: 0,
	color: '$gray200',

	variants: {
		size: {
			md: { fontSize: '$md' },
			lg: { fontSize: '$lg' },
			xl: { fontSize: '$xl' },
			'2xl': { fontSize: '$2xl' },
		},
		skeleton: {
			true: {
				color: 'transparent !important',
				borderRadius: '$sm',
				userSelect: 'none',
				pointerEvents: 'none',
				animation: `${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
			},
		},
	},

	defaultVariants: {
		size: 'md',
		skeleton: false,
	},
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
	as?: ElementType
}
