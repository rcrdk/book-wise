import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const bookId = String(req.query.id)

	const book = await prisma.book.findUnique({
		where: {
			id: bookId,
		},
	})

	return res.json({ book })
}
