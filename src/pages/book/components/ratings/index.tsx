import Avatar from '@/components/avatar'
import { Empty } from '@/components/empty'
import StarRating from '@/components/star-rating'
import { Text } from '@/components/text'
import { useBook } from '@/hooks/book'
import { formatDate } from '@/utils/formatDate'

import { Comment, Container, Datetime, Item, User } from './styles'

export default function BookRatings() {
	const { ratings, isLoadingRatings, hasErrorLoadingRatings } = useBook()

	const hasRatings = ratings && ratings.length > 0
	const hasNotRatings = ratings && ratings.length === 0

	const hasSkeleton = isLoadingRatings || hasErrorLoadingRatings

	if (hasSkeleton)
		return (
			<Container>
				{Array.from({ length: 4 }).map((_, i) => (
					<Item key={`brms_${i}`}>
						<User as="div">
							<Avatar skeleton />
							<div>
								<Text skeleton>Carregando...</Text>
								<Datetime size="sm" skeleton>
									Carregando...
								</Datetime>
							</div>
							<StarRating skeleton />
						</User>

						<Comment>
							<Text skeleton>Carregando...</Text>
							<Text skeleton>Carregando...</Text>
							<Text skeleton>Carregando...</Text>
						</Comment>
					</Item>
				))}
			</Container>
		)

	if (hasRatings)
		return (
			<Container>
				{ratings.map((rating) => (
					<Item key={`brm_${rating.id}`}>
						<User href={`/profile/${rating.user_id}`}>
							<Avatar src={rating.user.avatar_url} />
							<div>
								<Text>{rating.user.name}</Text>
								<Datetime size="sm" title={formatDate(rating.created_at)}>
									{formatDate(rating.created_at, 'relative')}
								</Datetime>
							</div>
							<StarRating rating={rating.rate} />
						</User>

						<Comment>
							<Text>{rating.description}</Text>
						</Comment>
					</Item>
				))}
			</Container>
		)

	if (!hasNotRatings)
		return (
			<Empty background>
				Nenhuma avaliação encontrada para este livro. Faça a primeira.
			</Empty>
		)
}
