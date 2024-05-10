export interface UserLastRatingDTO {
	id: string
	rate: number
	description: string
	created_at: string
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
}
