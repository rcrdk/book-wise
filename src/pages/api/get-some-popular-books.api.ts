import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') return res.status(405).end()

	const books = await prisma.book.findMany({
		where: {
			ratings: {
				some: {},
			},
		},
		orderBy: {
			ratings: {
				_count: 'desc',
			},
		},
		include: {
			ratings: true,
		},
		take: 4,
	})

	const booksAvgRating = await prisma.rating.groupBy({
		by: ['book_id'],
		where: {
			book_id: {
				in: books.map((book) => book.id),
			},
		},
		_avg: {
			rate: true,
		},
	})

	const popularBooks = books
		.map((book) => {
			const getAvgRating = booksAvgRating.find(
				(rating) => rating.book_id === book.id,
			)

			return {
				id: book.id,
				name: book.name,
				author: book.author,
				cover_url: book.cover_url,
				avg_rating: getAvgRating?._avg.rate || 0,
			}
		})
		.sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0))

	return res.json(popularBooks)
}
