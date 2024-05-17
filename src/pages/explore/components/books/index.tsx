import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import BookCover from '@/components/book-cover'
import { Empty } from '@/components/empty'
import { Heading } from '@/components/heading'
import { Pagination, PaginationButton } from '@/components/pagination'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { useBook } from '@/hooks/book'
import { useExplore } from '@/hooks/explore'

import { Book, BookInfo, Books, Container } from './styles'

export default function ExploreBooks() {
	const {
		books,
		isLoadingBooks,
		hasErrorLoadingBooks,
		onPaginate,
		booksPagination,
	} = useExplore()
	const { onSelectBook } = useBook()

	const hasSkeletons = hasErrorLoadingBooks || isLoadingBooks

	const hasBooks = !hasSkeletons && books && books.length > 0
	const hasNotBooks = !hasSkeletons && books && books.length === 0

	const hasPagination =
		booksPagination.hasPrevPage || booksPagination.hasNextPage

	return (
		<Container>
			{(hasSkeletons || hasBooks) && (
				<>
					<Books>
						{hasSkeletons &&
							Array.from({ length: 12 }).map((_, i) => (
								<Book as="div" key={`ebli_${i}`}>
									<BookCover skeleton />
									<BookInfo>
										<Heading size="md" skeleton>
											Carregando...
										</Heading>
										<Text size="sm" skeleton>
											Carregando...
										</Text>
										<StarRating skeleton />
									</BookInfo>
								</Book>
							))}

						{hasBooks &&
							books.map((book) => (
								<Book
									type="button"
									key={`ebl_${book.id}`}
									onClick={() => onSelectBook(book.id)}
								>
									<BookCover src={book.cover_url} />
									<BookInfo>
										<Heading size="md">{book.name}</Heading>
										<Text size="sm">{book.author}</Text>
										<StarRating rating={book.average_rate} />
									</BookInfo>
								</Book>
							))}
					</Books>

					{hasPagination && (
						<Pagination>
							<PaginationButton
								type="button"
								disabled={!booksPagination.hasPrevPage}
								onClick={() => onPaginate('prev')}
							>
								<ArrowLeft />
								Anteriores
							</PaginationButton>

							<PaginationButton
								type="button"
								disabled={!booksPagination.hasNextPage}
								onClick={() => onPaginate('next')}
							>
								Próximos
								<ArrowRight />
							</PaginationButton>
						</Pagination>
					)}
				</>
			)}

			{hasNotBooks && (
				<Empty background>
					Não foram encontrados livros com o filtro selecionado.
				</Empty>
			)}
		</Container>
	)
}
