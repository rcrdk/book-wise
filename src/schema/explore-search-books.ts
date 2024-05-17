import { z } from 'zod'

export const exploreSearchBooksSchema = z.object({
	q: z.string().optional(),
})

export type ExploreSearchBooksSchema = z.infer<typeof exploreSearchBooksSchema>
