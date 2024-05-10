import { BookDTO } from '../books'
import { UserDTO } from '../users'

export interface RatingWithBookDTO {
	id: string
	rate: number
	description: string
	created_at: string
	book_id: string
	user_id: string
	book: BookDTO
	user: UserDTO
}
