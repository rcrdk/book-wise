import { Star, StarHalf } from '@phosphor-icons/react'

import { Skeleton } from '../skeleton'
import { Container } from './styles'

interface StarRatingProps {
	rating?: number
	skeleton?: boolean
}

export default function StarRating({ rating = 0, skeleton }: StarRatingProps) {
	const ratedInt = Math.floor(rating)
	const ratedFloat = rating % 1 !== 0
	const unrated = ratedFloat ? 5 - ratedInt - 1 : 5 - ratedInt

	return (
		<Container title={!skeleton ? `Avaliado em ${rating} de 5 estrelas` : ''}>
			{skeleton && <Skeleton />}

			{Array.from({ length: ratedInt }).map((_, i) => (
				<Star key={`star_rated_${i}`} weight="fill" />
			))}

			{ratedFloat && <StarHalf weight="fill" />}

			{Array.from({ length: unrated }).map((_, i) => (
				<Star key={`star_rated_${i}`} weight="bold" />
			))}
		</Container>
	)
}
