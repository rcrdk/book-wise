import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

import {
	ProfileSearchBookRatedSchema,
	profileSearchBookRatedSchema,
} from '@/schema/profile-search-book-rated'

import { Button, Container, Input } from './styles'

interface ProfileSearchProps {
	onSearch: (data: ProfileSearchBookRatedSchema) => void
}

export default function ProfileSearch({ onSearch }: ProfileSearchProps) {
	const { register, handleSubmit } = useForm<ProfileSearchBookRatedSchema>({
		resolver: zodResolver(profileSearchBookRatedSchema),
	})

	return (
		<Container onSubmit={handleSubmit(onSearch)} autoComplete="off">
			<Input
				type="text"
				placeholder="Buscar livro avaliado"
				{...register('q')}
			/>
			<Button type="submit" aria-label="Buscar">
				<MagnifyingGlass weight="bold" />
			</Button>
		</Container>
	)
}
