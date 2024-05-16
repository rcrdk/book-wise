import { BookmarkSimple, BookOpen } from '@phosphor-icons/react'

import Avatar from '@/components/avatar'
import BookCover from '@/components/book-cover'
import { Heading } from '@/components/heading'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { useBook } from '@/hooks/book'

import { Container, Info, StatItem, Stats, Summary } from './styles'

export default function BookInformation() {
	const { book, isLoadingBook, hasErrorLoadingBook } = useBook()

	return (
		<Container>
			{(isLoadingBook || hasErrorLoadingBook) && (
				<>
					<BookCover skeleton />

					<Info>
						<Heading size="lg" skeleton>
							Carregando...
						</Heading>
						<Text size="md" skeleton>
							Carregando...
						</Text>
						<StarRating skeleton />
						<Text size="sm" skeleton>
							Carregando...
						</Text>
					</Info>

					<Stats>
						<StatItem>
							<Avatar skeleton />
							<Text size="sm" skeleton>
								Carregando...
							</Text>
							<Heading skeleton>Carregando...</Heading>
						</StatItem>

						<StatItem>
							<Avatar skeleton />
							<Text size="sm" skeleton>
								Carregando...
							</Text>
							<Heading skeleton>Carregando...</Heading>
						</StatItem>
					</Stats>

					<Summary skeleton>
						<Text size="sm" skeleton>
							Carregando...
						</Text>
						<Text size="sm" skeleton>
							Carregando...
						</Text>
						<Text size="sm" skeleton>
							Carregando...
						</Text>
					</Summary>
				</>
			)}

			{!hasErrorLoadingBook && book && (
				<>
					<BookCover src={book.cover_url} />
					<Info>
						<Heading size="lg">{book.name}</Heading>
						<Text size="md">{book.author}</Text>
						<StarRating rating={book.stats.averageRating} />
						<Text size="sm">
							{book.stats.ratings === 1
								? '1 avaliação'
								: `${book.stats.ratings} avaliações`}
						</Text>
					</Info>

					<Stats>
						<StatItem>
							<BookmarkSimple weight="bold" />
							<Text size="sm">Categoria</Text>
							<Heading>
								{book.categories.length !== 0
									? book.categories.map((category) => category).join(', ')
									: '-'}
							</Heading>
						</StatItem>

						<StatItem>
							<BookOpen weight="bold" />
							<Text size="sm">Páginas</Text>
							<Heading>{book.total_pages}</Heading>
						</StatItem>
					</Stats>

					<Summary>
						<Text size="sm">{book.summary}</Text>
					</Summary>
				</>
			)}
		</Container>
	)
}
