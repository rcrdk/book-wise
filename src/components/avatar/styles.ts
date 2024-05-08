import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '@/styles'

export const AvatarContainer = styled(Avatar.Root, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
	borderRadius: '$full',
	background: '$gradient-horizontal',
	overflow: 'hidden',

	variants: {
		size: {
			small: {
				width: '$space$8',
				height: '$space$8',
			},
			medium: {
				width: '$space$10',
				height: '$space$10',
			},
			large: {
				width: 'calc($space$8 * 9)',
				height: 'calc($space$8 * 9)',
			},
		},
	},

	defaultVariants: {
		size: 'medium',
	},
})

export const AvatarImage = styled(Avatar.Image, {
	objectFit: 'cover',
	width: 'calc(100% - $space$1)',
	height: 'calc(100% - $space$1)',
	borderRadius: '$full',
})

export const AvatarFallback = styled(Avatar.Fallback, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	background: '$gray600',

	svg: {
		color: '$gray400',
		width: '$6',
		height: '$6',
	},
})
