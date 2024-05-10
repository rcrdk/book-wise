import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'

import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'GET') return res.status(405).end()

	const session = await getServerSession(req, res, buildNextAuthOptions())

	if (!session) return res.status(401).end('Acesso não autorizado.')

	const userLastRating = await prisma.rating.findFirst({
		where: {
			user_id: String(session.user.id),
		},
		orderBy: {
			created_at: 'desc',
		},
		include: {
			book: true,
		},
	})

	return res.json(userLastRating)
}
