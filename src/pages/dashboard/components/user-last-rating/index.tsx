import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import BookCover from '@/components/book-cover'
import Box from '@/components/box'
import { Heading } from '@/components/heading'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { useAuth } from '@/hooks/auth'
import { useBook } from '@/hooks/book'
import { GetUserLastRatingResponse } from '@/interfaces/get-user-last-rating'
import { api } from '@/lib/axios'
import { formatDate } from '@/utils/formatDate'

import { Author, Container, Description, Info } from './styles'

export default function UserLastRating() {
	const { hasSignedIn, user } = useAuth()
	const { onSelectBook } = useBook()

	const {
		data: lastRating,
		isLoading,
		error,
	} = useQuery<GetUserLastRatingResponse>({
		queryKey: ['user-last-rating'],
		queryFn: async () => {
			try {
				const response = await api.get('/get-user-last-rating')
				return response.data
			} catch (error) {
				toast.error('Erro ao tentar carregar sua última avaliação.')
				console.error('ERROR:: UserLastRating', error)
			}
		},
		enabled: hasSignedIn && !!user,
	})

	if (error || lastRating || isLoading) {
		return (
			<Box
				title="Sua última leitura"
				link={{
					label: 'Ver todas',
					href: user ? `/profile/${user.id}` : '/dashboard',
				}}
				background="light"
			>
				{(error || isLoading) && (
					<Container>
						<BookCover skeleton />
						<div>
							<Info>
								<Text size="sm" skeleton>
									Carregando...
								</Text>
								<StarRating skeleton />
							</Info>
							<Heading size="lg" skeleton>
								Carregando título...
							</Heading>
							<Author size="sm" skeleton>
								Carregando autor...
							</Author>
							<Description skeleton>Carregando descrição...</Description>
							<Description skeleton>Carregando descrição...</Description>
						</div>
					</Container>
				)}

				{!isLoading && lastRating && (
					<Container
						as="button"
						type="button"
						onClick={() => onSelectBook(lastRating.book_id)}
					>
						<BookCover src={lastRating.book.cover_url} />
						<div>
							<Info>
								<Text size="sm" title={formatDate(lastRating.created_at)}>
									{formatDate(lastRating.created_at, 'relative')}
								</Text>
								<StarRating rating={lastRating.rate} />
							</Info>
							<Heading size="lg">{lastRating.book.name}</Heading>
							<Author size="sm">{lastRating.book.author}</Author>
							<Description>{lastRating.description}</Description>
						</div>
					</Container>
				)}
			</Box>
		)
	}
}
