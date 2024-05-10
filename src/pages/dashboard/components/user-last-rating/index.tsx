import { useQuery } from '@tanstack/react-query'

import BookCover from '@/components/book-cover'
import Box from '@/components/box'
import { Heading } from '@/components/heading'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { UserLastRatingDTO } from '@/dtos/ratings/user-last-rating'
import { useAuth } from '@/hooks/auth'
import { api } from '@/lib/axios'
import { formatDate } from '@/utils/formatDate'

import { Author, Container, Description, Info } from './styles'

export default function UserLastRating() {
	const { hasSignedIn, user } = useAuth()

	const { data: lastRating, isLoading } = useQuery<UserLastRatingDTO>({
		queryKey: ['user-last-rating'],
		queryFn: async () => {
			const response = await api.get('/ratings/user-last-rating')
			return response.data
		},
		enabled: hasSignedIn,
	})

	if (lastRating || isLoading) {
		return (
			<Box
				title="Sua última leitura"
				link={{ label: 'Ver todas', href: `/profile/${user?.id}` }}
				background="light"
			>
				{isLoading && (
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
					<Container as="button" type="button">
						<BookCover src={lastRating.book.cover_url} />
						<div>
							<Info>
								<Text size="sm" title={formatDate(lastRating.created_at)}>
									{formatDate(lastRating.created_at, 'relative')}
								</Text>
								<StarRating rating={lastRating.rate} />
							</Info>
							<Heading size="lg">{lastRating.book.name}</Heading>
							<Author size="sm">{lastRating?.book.author}</Author>
							<Description>{lastRating?.description}</Description>
						</div>
					</Container>
				)}
			</Box>
		)
	}
}
