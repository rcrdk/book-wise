import { z } from 'zod'

export const rateBookSchema = z.object({
	rate: z.coerce
		.number({ message: 'Dê uma nota ao livro.' })
		.min(1, 'Dê uma nota ao livro.')
		.max(5),
	description: z.string().min(1).max(450),
})

export type RateBookSchema = z.infer<typeof rateBookSchema>
