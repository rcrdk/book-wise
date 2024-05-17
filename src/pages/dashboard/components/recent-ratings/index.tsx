import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import Avatar from '@/components/avatar'
import BookCover from '@/components/book-cover'
import Box from '@/components/box'
import { Empty } from '@/components/empty'
import { Heading } from '@/components/heading'
import { Pagination, PaginationButton } from '@/components/pagination'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { useBook } from '@/hooks/book'
import { GetRecentRatingsResponse } from '@/interfaces/get-recent-ratings'
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
} from './styles'

export default function RecentRatings() {
	const { onSelectBook } = useBook()

	const [page, setPage] = useState(1)

	const containerRef = useRef<HTMLDivElement>(null)

	const {
		data: feed,
		isLoading,
		error,
	} = useQuery<GetRecentRatingsResponse>({
		queryKey: ['rating-feed', page],
		queryFn: async () => {
			try {
				const response = await api.get('/get-recent-ratings', {
					params: {
						page,
					},
				})

				return response.data
			} catch (error) {
				toast.error('Erro ao tentar carregar as avaliações recentes.')
				console.error('ERROR:: RecentRatings', error)
			}
		},
	})

	const handlePagination = useCallback((mode: 'prev' | 'next') => {
		containerRef?.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start',
		})

		setTimeout(() => {
			setPage((prev) => (mode === 'next' ? ++prev : --prev))
		}, 1000)
	}, [])

	const hasRatings = !error && !isLoading && feed && feed.ratings.length > 0
	const hasNotRatings =
		!error && !isLoading && feed && feed.ratings.length === 0

	const hasPagination = !error && feed && (feed.hasNextPage || feed.hasPrevPage)

	return (
		<>
			<FeedScroll ref={containerRef} />

			<Box title="Avaliações mais recentes">
				{hasNotRatings && <Empty>Nenhuma avaliação encontrada.</Empty>}
			</Box>

			{(isLoading || hasRatings || error) && (
				<FeedContainer>
					{(isLoading || error) &&
						Array.from({ length: 6 }).map((_, i) => (
							<FeedItem key={`fbr_${i}`} as="div">
								<FeedUser as="div">
									<Avatar skeleton />
									<div>
										<Text skeleton>Carregando...</Text>
										<FeedDatetime size="sm" skeleton>
											Carregando...
										</FeedDatetime>
									</div>
									<StarRating skeleton />
								</FeedUser>

								<FeedBook as="div">
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
							<FeedItem key={rating.id}>
								<FeedUser href={`/profile/${rating.user.id}`}>
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

								<FeedBook
									type="button"
									onClick={() => onSelectBook(rating.book_id)}
								>
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
