export interface GetBooksByFiltersResponse {
	id: string
	name: string
	cover_url?: string
	author: string
	average_rate: number
}

export interface GetBooksByFiltersPaginatedResponse {
	books: GetBooksByFiltersResponse[]
	hasNextPage: boolean
	hasPrevPage: boolean
}
