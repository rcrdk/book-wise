import { ReactNode } from 'react'

import { Heading } from '../heading'
import { Container } from './styles'

interface TitleProps {
	title: string
	icon: ReactNode
}

export default function Title({ title, icon }: TitleProps) {
	return (
		<Container>
			{icon}
			<Heading as="h1" size="2xl">
				{title}
			</Heading>
		</Container>
	)
}
