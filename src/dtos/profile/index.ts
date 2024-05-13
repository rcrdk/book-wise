import { UserDTO } from '../users'

export interface ProfileStatsDTO {
	user: UserDTO
	stats: {
		pagesReaded: number
		rated: number
		authors: number
		mostReadedCategory?: string
	}
}
