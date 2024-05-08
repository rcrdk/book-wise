import { ComponentProps, ElementType } from 'react'

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
	},

	defaultVariants: {
		size: 'md',
	},
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
	as?: ElementType
}
