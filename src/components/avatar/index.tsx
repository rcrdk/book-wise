import { User } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { Skeleton } from '../skeleton'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
	size?: 'small' | 'medium' | 'large'
	skeleton?: boolean
}

export default function Avatar(props: AvatarProps) {
	return (
		<AvatarContainer size={props.size}>
			{props.skeleton && <Skeleton />}

			<AvatarImage {...props} />

			<AvatarFallback delayMs={600}>
				<User weight="bold" />
			</AvatarFallback>
		</AvatarContainer>
	)
}
