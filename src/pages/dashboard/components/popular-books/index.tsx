// Loading State
// Empty State
// List books
// Error handling
// Open book modal

import { useQuery } from '@tanstack/react-query'

import BookCover from '@/components/book-cover'
import Box from '@/components/box'
import { Empty } from '@/components/empty'
import { Heading } from '@/components/heading'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { PopularBooksDTO } from '@/dtos/books/popular'
import { api } from '@/lib/axios'

import { BookContainer, BookInfo, BookItem } from './styles'

export default function PopularBooks() {
	const { data: popularBooks, isLoading } = useQuery<PopularBooksDTO[]>({
		queryKey: ['popular-books'],
		queryFn: async () => {
			const response = await api.get('/books/popular')
			return response.data
		},
	})

	const hasBooks = !isLoading && popularBooks && popularBooks.length > 0
	const hasNotBooks = !isLoading && popularBooks && popularBooks.length === 0

	return (
		<>
			<Box
				title="Livros populares"
				link={{ label: 'Ver todos', href: '/explore' }}
			>
				{hasNotBooks && <Empty>Nenhum registo encontrado</Empty>}
			</Box>

			{(isLoading || hasBooks) && (
				<BookContainer>
					{isLoading &&
						Array.from({ length: 4 }).map((_, i) => (
							<BookItem key={`pbd_${i}`} as="div">
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
							</BookItem>
						))}

					{hasBooks &&
						popularBooks?.map((book) => (
							<BookItem key={book.id} type="button">
								<BookCover src={book.cover_url} />
								<BookInfo>
									<Heading size="md">{book.name}</Heading>
									<Text size="sm">{book.author}</Text>
									<StarRating rating={book.avg_rating} />
								</BookInfo>
							</BookItem>
						))}
				</BookContainer>
			)}
		</>
	)
}
