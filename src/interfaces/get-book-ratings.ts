export interface GetBookRatingsResponse {
	id: string
	rate: number
	description: string
	created_at: Date
	book_id: string
	user_id: string
	user: {
		id: string
		name: string
		email: string
		avatar_url?: string
		created_at: string
	}
}
