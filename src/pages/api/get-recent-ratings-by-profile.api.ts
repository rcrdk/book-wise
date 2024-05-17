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

	if (!req.query.user) {
		return res.status(400).json({ message: 'User ID not provied.' })
	}

	const userId = String(req.query.user)
	const searchByTitleQuery = req.query.search
		? String(req.query.search)
		: undefined

	const resultsPerPage = 12
	const currentPage = Number(req.query.page)
	const currentPageOffset =
		currentPage === 1 ? 0 : resultsPerPage * (currentPage - 1)

	const ratings = await prisma.rating.findMany({
		where: {
			user_id: userId,
			book: {
				name: {
					contains: searchByTitleQuery,
				},
			},
		},
		orderBy: {
			created_at: 'desc',
		},
		include: {
			book: true,
			user: true,
		},
		take: resultsPerPage,
		skip: currentPageOffset,
	})

	const checkForNextPage =
		(await prisma.rating.count({
			where: {
				user_id: userId,
				book: {
					name: {
						contains: searchByTitleQuery,
					},
				},
			},
		})) / resultsPerPage

	const hasPrevPage = currentPage !== 1
	const hasNextPage = checkForNextPage > currentPage

	return res.json({
		ratings,
		hasNextPage,
		hasPrevPage,
	})
}
