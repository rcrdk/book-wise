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

	const book = await prisma.book.findUniqueOrThrow({
		where: {
			id: bookId,
		},
		include: {
			ratings: {
				include: {
					user: true,
				},
			},
			categories: {
				include: {
					category: true,
				},
			},
		},
	})

	const getAverageRating = await prisma.rating.aggregate({
		where: {
			book_id: bookId,
		},
		_avg: {
			rate: true,
		},
	})

	const countRatings = book.ratings.length
	const averageRating = getAverageRating?._avg?.rate || 0

	const categories = book.categories.map((item) => {
		return item.category.name
	})

	return res.json({
		id: book.id,
		name: book.name,
		author: book.author,
		summary: book.summary,
		cover_url: book.cover_url,
		total_pages: book.total_pages,
		created_at: book.created_at,
		categories,
		stats: {
			ratings: countRatings,
			averageRating,
		},
	})
}
