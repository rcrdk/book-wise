import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') return res.status(405).end()

	const books = await prisma.rating.findMany({
		// take: 4,
		// skip: 12,
		orderBy: {
			created_at: 'desc',
		},
		include: {
			book: true,
			user: true,
		},
	})

	return res.json(books)
}
