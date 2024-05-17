import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') return res.status(405).end()

	if (!req.query.page) {
		return res.status(400).json({ message: 'Current page not provied.' })
	}

	const resultsPerPage = 12
	const currentPage = Number(req.query.page)

	const currentPageOffset =
		currentPage === 1 ? 0 : resultsPerPage * (currentPage - 1)

	const querySearch = req.query.q ? String(req.query.q) : ''
	const categorySearch = req.query.category
		? String(req.query.category)
		: undefined

	const books = await prisma.book.findMany({
		take: resultsPerPage,
		skip: currentPageOffset,
		where: {
			categories: {
				some: {
					category_id: categorySearch,
				},
			},
			OR: [
				{
					name: {
						contains: querySearch,
					},
				},
				{
					author: {
						contains: querySearch,
					},
				},
			],
		},
		select: {
			id: true,
			name: true,
			cover_url: true,
			author: true,
		},
		orderBy: {
			name: 'asc',
		},
	})

	const ratings = await prisma.rating
		.groupBy({
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
		.then((result) => {
			return result.map((filter) => {
				return {
					book_id: filter.book_id,
					average_rate: filter._avg.rate ?? 0,
				}
			})
		})

	const booksWithAverageRate = books.map((book) => {
		const getAverageRate = ratings.find((rate) => rate.book_id === book.id)

		return {
			...book,
			average_rate: getAverageRate?.average_rate || 0,
		}
	})

	const checkForNextPage =
		(await prisma.book.count({
			where: {
				categories: {
					some: {
						category_id: categorySearch,
					},
				},
				OR: [
					{
						name: {
							contains: querySearch,
						},
					},
					{
						author: {
							contains: querySearch,
						},
					},
				],
			},
		})) / resultsPerPage

	const hasPrevPage = currentPage !== 1
	const hasNextPage = checkForNextPage > currentPage

	return res.json({
		books: booksWithAverageRate,
		hasNextPage,
		hasPrevPage,
	})
}
