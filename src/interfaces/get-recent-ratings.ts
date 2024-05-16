interface RecentRating {
	id: string
	rate: number
	description: string
	created_at: Date
	book_id: string
	user_id: string
	book: {
		id: string
		name: string
		author: string
		summary: string
		cover_url?: string
		total_pages: number
		created_at: Date
	}
	user: {
		id: string
		name: string
		email: string
		avatar_url?: string
		created_at: Date
	}
}

export interface GetRecentRatingsResponse {
	ratings: RecentRating[]
	hasNextPage: boolean
	hasPrevPage: boolean
}
