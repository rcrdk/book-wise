import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') return res.status(405).end()

	if (!req.query.book)
		return res.status(400).json({ message: 'Book ID not provied.' })

	const bookId = String(req.query.book)

	const ratings = await prisma.rating.findMany({
		where: {
			book_id: bookId,
		},
		include: {
			user: true,
		},
		orderBy: {
			created_at: 'desc',
		},
	})

	return res.json(ratings)
}
