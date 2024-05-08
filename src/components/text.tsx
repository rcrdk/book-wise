import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Text = styled('p', {
	fontFamily: '$default',
	lineHeight: '$base',
	margin: 0,
	color: '$gray100',

	variants: {
		size: {
			sm: { fontSize: '$sm' },
			md: { fontSize: '$md' },
			xl: { fontSize: '$xl' },
		},
	},

	defaultVariants: {
		size: 'md',
	},
})

export interface TextProps extends ComponentProps<typeof Text> {
	as?: ElementType
}

Text.displayName = 'Text'
