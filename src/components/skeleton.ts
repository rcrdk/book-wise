import { styled } from '@/styles'
import { pulseAnimation } from '@/styles/global'

export const Skeleton = styled('span', {
	display: 'block',
	position: 'absolute',
	inset: 0,
	borderRadius: '$sm',
	animation: `${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
	userSelect: 'none',
	cursor: 'default',
})
