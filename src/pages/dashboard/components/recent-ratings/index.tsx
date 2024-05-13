// Error handling
// Open book modal
// Pagination

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useRef, useState } from 'react'

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
	FeedScroll,
	FeedUser,
	Pagination,
	PaginationButton,
} from './styles'

interface FeedProps {
	ratings: RatingWithBookDTO[]
	hasNextPage: boolean
	hasPrevPage: boolean
}

export default function RecentRatings() {
	const [page, setPage] = useState(1)

	const containerRef = useRef<HTMLDivElement>(null)

	const { data: feed, isLoading } = useQuery<FeedProps>({
		queryKey: ['rating-feed', page],
		queryFn: async () => {
			const response = await api.get<FeedProps>('/ratings/feed', {
				params: {
					page,
				},
			})

			return response.data
		},
	})

	const handlePagination = useCallback((mode: 'prev' | 'next') => {
		containerRef?.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start',
		})

		setTimeout(() => {
			setPage((prev) => (mode === 'next' ? prev + 1 : prev - 1))
		}, 1000)
	}, [])

	const hasRatings = !isLoading && feed && feed.ratings.length > 0
	const hasNotRatings = !isLoading && feed && feed.ratings.length === 0

	const hasPagination = feed && (feed.hasNextPage || feed.hasPrevPage)

	return (
		<>
			<FeedScroll ref={containerRef} />

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
						feed.ratings.map((rating) => (
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

					{hasPagination && (
						<Pagination>
							<PaginationButton
								type="button"
								onClick={() => handlePagination('prev')}
								disabled={isLoading || page === 1}
							>
								<ArrowLeft />
								Anteriores
							</PaginationButton>

							<PaginationButton
								type="button"
								onClick={() => handlePagination('next')}
								disabled={isLoading || !feed.hasNextPage}
							>
								Próximas
								<ArrowRight />
							</PaginationButton>
						</Pagination>
					)}
				</FeedContainer>
			)}
		</>
	)
}
