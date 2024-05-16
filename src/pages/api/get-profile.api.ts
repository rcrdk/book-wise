import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') return res.status(405).end()

	if (!req.query.user)
		return res.status(400).json({ message: 'User ID not provied.' })

	const userId = String(req.query.user)

	const user = await prisma.user.findFirstOrThrow({
		where: {
			id: userId,
		},
	})

	const ratings = await prisma.rating.findMany({
		where: {
			user_id: user.id,
		},
		include: {
			book: true,
		},
	})

	// books rated
	const allRatingsIds = ratings.map((rating) => rating.book_id)
	const allRatingsWithoutDuplicates = [...new Set(allRatingsIds)]

	// pages readed
	const allBooksReaded = await prisma.book.findMany({
		where: {
			id: { in: allRatingsWithoutDuplicates },
		},
		include: {
			categories: true,
		},
	})

	const pagesReaded = allBooksReaded.reduce((prev, current) => {
		return prev + current.total_pages
	}, 0)

	// most readed category
	const allReadedCategories = allBooksReaded
		.map((book) => {
			return book.categories.map((category) => category.category_id)
		})
		.flat()

	const allReadedCategoriesGrouped = Object.groupBy(
		allReadedCategories,
		(item) => item,
	)

	const allReadedCategoriesValues = Object.values(allReadedCategoriesGrouped)
		.map((category) => {
			return {
				category_id: category ? category[0] : '',
				quantity: category?.length || 0,
			}
		})
		.sort((a, b) => b.quantity - a.quantity)
		.find(() => true)

	const mostReadedCategory = await prisma.category.findFirst({
		where: {
			id: allReadedCategoriesValues?.category_id,
		},
	})

	// authored readed
	const allAuthorsRated = ratings.map((rating) => rating.book.author)
	const allAuthorsWithoutDuplicates = [...new Set(allAuthorsRated)]

	return res.json({
		user,
		stats: {
			pagesReaded,
			rated: allRatingsWithoutDuplicates.length,
			authors: allAuthorsWithoutDuplicates.length,
			mostReadedCategory: pagesReaded ? mostReadedCategory?.name : null,
		},
	})
}
