import { ReactNode } from 'react'

import Navigation from '@/components/navigation'
import Book from '@/pages/book'

import { BaseContainer } from './styles'

interface BaseLayoutProps {
	children: ReactNode
	mode?: 'default' | 'auth'
}

export default function BaseLayout({
	children,
	mode = 'default',
}: BaseLayoutProps) {
	return (
		<BaseContainer mode={mode}>
			{mode === 'default' ? (
				<>
					<Navigation />
					<div>{children}</div>
					<Book />
				</>
			) : (
				children
			)}
		</BaseContainer>
	)
}
