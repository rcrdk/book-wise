import { Star } from '@phosphor-icons/react'

import { Skeleton } from '../skeleton'
import { Container } from './styles'

interface StarRatingProps {
	rating?: number
	skeleton?: boolean
}

export default function StarRating({ rating = 0, skeleton }: StarRatingProps) {
	return (
		<Container title={!skeleton ? `Avaliado em ${rating} de 5 estrelas` : ''}>
			{skeleton && <Skeleton />}

			{Array.from({ length: 5 }).map((_, i) => (
				<Star key={`star_${i}`} weight={i < rating ? 'fill' : 'bold'} />
			))}
		</Container>
	)
}
