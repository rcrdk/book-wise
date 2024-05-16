export interface GetProfileResponse {
	user: {
		id: string
		name: string
		email: string
		avatar_url?: string
		created_at: Date
	}
	stats: {
		pagesReaded: number
		rated: number
		authors: number
		mostReadedCategory: string | null
	}
}
