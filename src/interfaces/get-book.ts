export interface GetBookResponse {
	id: string
	name: string
	author: string
	summary: string
	cover_url?: string
	total_pages: string
	created_at: Date
	categories: string[]
	stats: {
		ratings: number
		averageRating: number
	}
}
