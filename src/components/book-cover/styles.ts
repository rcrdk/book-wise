import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '@/styles'

export const BookCoverContainer = styled(Avatar.Root, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	alignSelf: 'flex-start',
	flexShrink: 0,
	borderRadius: '$sm',
	background: '$gray500',
	overflow: 'hidden',
	aspectRatio: '2/3',
	position: 'relative',
})

export const BookCoverImage = styled(Avatar.Image, {
	objectFit: 'cover',
	width: '100%',
	height: '100%',
})

export const BookCoverFallback = styled(Avatar.Fallback, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	background: '$gray500',

	svg: {
		color: '$gray400',
		width: '41%',
		height: '41%',
	},
})
