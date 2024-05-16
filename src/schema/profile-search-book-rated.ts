import { z } from 'zod'

export const profileSearchBookRatedSchema = z.object({
	q: z.string().optional(),
})

export type ProfileSearchBookRatedSchema = z.infer<
	typeof profileSearchBookRatedSchema
>
