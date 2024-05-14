import { RatingWithBookDTO } from './rating-with-book'

export interface FeedProps {
	ratings: RatingWithBookDTO[]
	hasNextPage: boolean
	hasPrevPage: boolean
}
