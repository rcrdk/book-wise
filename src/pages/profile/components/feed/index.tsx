// Open book modal

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useRef, useState } from 'react'

import BookCover from '@/components/book-cover'
import { Empty } from '@/components/empty'
import { Heading } from '@/components/heading'
import { Pagination, PaginationButton } from '@/components/pagination'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { useBook } from '@/hooks/book'
import { GetRecentRatingsByProfileResponse } from '@/interfaces/get-recent-ratings-by-profile'
import { api } from '@/lib/axios'
import { formatDate } from '@/utils/formatDate'

import {
	Container,
	FeedBook,
	FeedBookAuthor,
	FeedBookInfo,
	FeedBookTextSkeleton,
	FeedContainer,
	FeedDatetime,
	FeedItem,
	FeedScroll,
} from './styles'

interface ProfileFeedProps {
	user?: string | string[]
	search?: string
}

export default function ProfileFeed({ user, search }: ProfileFeedProps) {
	const { onSelectBook } = useBook()

	const [page, setPage] = useState(1)

	const containerRef = useRef<HTMLDivElement>(null)

	const {
		data: feed,
		isLoading,
		error,
	} = useQuery<GetRecentRatingsByProfileResponse>({
		queryKey: ['profile-rating-feed', page, String(user), search],
		queryFn: async () => {
			try {
				const response = await api.get('/get-recent-ratings-by-profile', {
					params: {
						page,
						user: String(user),
						search,
					},
				})

				return response.data
			} catch (error) {
				// toast
				console.error('ERROR:: ProfileRecentRatings', error)
			}
		},
		enabled: !!user,
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

	const hasRatings = !error && !isLoading && feed && feed.ratings.length > 0
	const hasNotRatings =
		!error && !isLoading && feed && feed.ratings.length === 0

	const hasPagination = !error && feed && (feed.hasNextPage || feed.hasPrevPage)

	return (
		<Container>
			<FeedScroll ref={containerRef} />

			{hasNotRatings && (
				<Empty background>
					{search
						? `Nenhuma avaliação encontrada com o titulo "${search}".`
						: 'Nenhuma avaliação encontrada.'}
				</Empty>
			)}

			{(error || isLoading || hasRatings) && (
				<FeedContainer>
					{(error || isLoading) &&
						Array.from({ length: 6 }).map((_, i) => (
							<div key={`prs_${i}`}>
								<FeedDatetime skeleton>Carregando...</FeedDatetime>

								<FeedItem as="div">
									<FeedBook>
										<BookCover skeleton />
										<FeedBookInfo>
											<Heading size="md" skeleton>
												Carregando...
											</Heading>
											<FeedBookAuthor size="sm" skeleton>
												Carregando...
											</FeedBookAuthor>

											<StarRating skeleton />
										</FeedBookInfo>
									</FeedBook>

									<FeedBookTextSkeleton>
										<Text skeleton>Carregando...</Text>
										<Text skeleton>Carregando...</Text>
										<Text skeleton>Carregando...</Text>
									</FeedBookTextSkeleton>
								</FeedItem>
							</div>
						))}

					{hasRatings &&
						feed.ratings.map((rating) => (
							<div key={`pr_${rating.id}`}>
								<FeedDatetime title={formatDate(rating.created_at)}>
									{formatDate(rating.created_at, 'relative')}
								</FeedDatetime>

								<FeedItem
									type="button"
									onClick={() => onSelectBook(rating.book_id)}
								>
									<FeedBook>
										<BookCover src={rating.book.cover_url} />

										<FeedBookInfo>
											<Heading size="md">{rating.book.name}</Heading>
											<FeedBookAuthor size="sm">
												{rating.book.author}
											</FeedBookAuthor>

											<StarRating rating={rating.rate} />
										</FeedBookInfo>
									</FeedBook>

									<Text>{rating.description}</Text>
								</FeedItem>
							</div>
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
		</Container>
	)
}
