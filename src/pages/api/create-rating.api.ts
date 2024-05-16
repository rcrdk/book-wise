/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'

import { buildNextAuthOptions } from './auth/[...nextauth].api'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'POST') return res.status(405).end()

	// throw new Error()

	const session = await getServerSession(req, res, buildNextAuthOptions())

	if (!session) {
		return res.status(401).end()
	}

	const { rate, description, book_id } = req.body

	const rating = await prisma.rating.create({
		data: {
			rate,
			description,
			book_id,
			user_id: session.user.id,
		},
	})

	return res.status(201).json({ ...rating })
}
