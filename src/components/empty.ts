import { styled } from '@/styles'

import { Text } from './text'

export const Empty = styled(Text, {
	color: '$gray400',
	padding: '$4',
	borderRadius: '$md',
	fontSize: '$xs',
	fontStyle: 'italic',
	width: '100%',

	variants: {
		background: {
			true: {
				background: '$gray700',
			},
		},
	},

	defaultVariants: {
		background: false,
	},
})
