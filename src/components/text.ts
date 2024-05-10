import { ComponentProps, ElementType } from 'react'

import { pulseAnimation } from '@/styles/global'

import { styled } from '../styles'

export const Text = styled('p', {
	fontFamily: '$default',
	fontWeight: '$regular',
	lineHeight: '$base',
	margin: 0,
	color: '$gray100',

	variants: {
		size: {
			sm: { fontSize: '$sm' },
			md: { fontSize: '$md' },
			xl: { fontSize: '$xl' },
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

export interface TextProps extends ComponentProps<typeof Text> {
	as?: ElementType
}
