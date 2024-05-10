// Error handling
// Open book modal
// Pagination

import { useQuery } from '@tanstack/react-query'

import Avatar from '@/components/avatar'
import BookCover from '@/components/book-cover'
import Box from '@/components/box'
import { Empty } from '@/components/empty'
import { Heading } from '@/components/heading'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { RatingWithBookDTO } from '@/dtos/ratings/rating-with-book'
import { api } from '@/lib/axios'
import { formatDate } from '@/utils/formatDate'

import {
	FeedBook,
	FeedBookAuthor,
	FeedBookDescription,
	FeedContainer,
	FeedDatetime,
	FeedItem,
	FeedUser,
} from './styles'

export default function RecentRatings() {
	const { data: feed, isLoading } = useQuery<RatingWithBookDTO[]>({
		queryKey: ['rating-feed'],
		queryFn: async () => {
			const response = await api.get('/ratings/feed')
			return response.data
		},
	})

	const hasRatings = !isLoading && feed && feed.length > 0
	const hasNotRatings = !isLoading && feed && feed.length === 0

	return (
		<>
			<Box title="Avaliações mais recentes">
				{hasNotRatings && <Empty>Nenhum registo encontrado</Empty>}
			</Box>

			{(isLoading || hasRatings) && (
				<FeedContainer>
					{isLoading &&
						Array.from({ length: 6 }).map((_, i) => (
							<FeedItem key={`fbr_${i}`} as="div">
								<FeedUser>
									<Avatar skeleton />
									<div>
										<Text skeleton>Carregando...</Text>
										<FeedDatetime size="sm" skeleton>
											Carregando...
										</FeedDatetime>
									</div>
									<StarRating skeleton />
								</FeedUser>

								<FeedBook>
									<BookCover skeleton />
									<div>
										<Heading size="md" skeleton>
											Carregando...
										</Heading>
										<FeedBookAuthor size="sm" skeleton>
											Carregando...
										</FeedBookAuthor>
										<FeedBookDescription skeleton>...</FeedBookDescription>
										<FeedBookDescription skeleton>...</FeedBookDescription>
										<FeedBookDescription skeleton>...</FeedBookDescription>
									</div>
								</FeedBook>
							</FeedItem>
						))}

					{hasRatings &&
						feed?.map((rating) => (
							<FeedItem key={rating.id} type="button">
								<FeedUser>
									<Avatar src={rating.user.avatar_url} />
									<div>
										<Text>{rating.user.name}</Text>
										<FeedDatetime
											size="sm"
											title={formatDate(rating.created_at)}
										>
											{formatDate(rating.created_at, 'relative')}
										</FeedDatetime>
									</div>
									<StarRating rating={rating.rate} />
								</FeedUser>

								<FeedBook>
									<BookCover src={rating.book.cover_url} />
									<div>
										<Heading size="md">{rating.book.name}</Heading>
										<FeedBookAuthor size="sm">
											{rating.book.author}
										</FeedBookAuthor>
										<FeedBookDescription>
											{rating.description}
										</FeedBookDescription>
									</div>
								</FeedBook>
							</FeedItem>
						))}
				</FeedContainer>
			)}
		</>
	)
}
