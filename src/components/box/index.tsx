import { CaretRight } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import { Text } from '@/components/text'

import { BoxBody, BoxContainer, BoxHeader, BoxHeaderLink } from './styles'

interface BoxProps {
	title: string
	link?: {
		label: string
		href: string
	}
	children?: ReactNode
	background?: 'default' | 'light'
}

export default function Box({
	title,
	link,
	children,
	background = 'default',
}: BoxProps) {
	return (
		<BoxContainer>
			<BoxHeader>
				<Text as="h2">{title}</Text>
				{link && (
					<BoxHeaderLink href={link.href}>
						{link.label}
						<CaretRight weight="bold" />
					</BoxHeaderLink>
				)}
			</BoxHeader>

			{children && <BoxBody background={background}>{children}</BoxBody>}
		</BoxContainer>
	)
}
