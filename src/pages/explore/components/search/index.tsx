import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

import { useExplore } from '@/hooks/explore'
import {
	ExploreSearchBooksSchema,
	exploreSearchBooksSchema,
} from '@/schema/explore-search-books'

import { Button, Container, Input } from './styles'

export default function ExploreSearch() {
	const { onSearchQuery } = useExplore()

	const { register, handleSubmit } = useForm<ExploreSearchBooksSchema>({
		resolver: zodResolver(exploreSearchBooksSchema),
	})

	return (
		<Container onSubmit={handleSubmit(onSearchQuery)} autoComplete="off">
			<Input
				type="text"
				placeholder="Buscar livro ou autor"
				{...register('q')}
			/>
			<Button type="submit" aria-label="Buscar">
				<MagnifyingGlass weight="bold" />
			</Button>
		</Container>
	)
}
