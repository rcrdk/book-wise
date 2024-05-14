import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Container, Input } from './styles'

const profileSearchFormSchema = z.object({
	q: z.string().optional(),
})

export type ProfileSchemaType = z.infer<typeof profileSearchFormSchema>

interface ProfileSearchProps {
	onSearch: (data: ProfileSchemaType) => void
}

export default function ProfileSearch({ onSearch }: ProfileSearchProps) {
	const { register, handleSubmit } = useForm<ProfileSchemaType>({
		resolver: zodResolver(profileSearchFormSchema),
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
