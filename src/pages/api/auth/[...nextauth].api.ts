import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export function buildNextAuthOptions(
	req: NextApiRequest | NextPageContext['req'],
	res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
	return {
		adapter: PrismaAdapter(req, res),
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID ?? '',
				clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
				authorization: {
					params: {
						prompt: 'consent',
						access_type: 'offline',
						response_type: 'code',
						scope:
							'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
					},
				},
				profile: (profile: GoogleProfile) => {
					return {
						id: profile.sub,
						name: profile.name,
						username: '',
						email: profile.email,
						avatar_url: profile.picture,
					}
				},
			}),
			GitHubProvider({
				clientId: process.env.GITHUB_CLIENT_ID ?? '',
				clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
			}),
		],
		callbacks: {
			// async signIn({ account }) {
			// 	if (
			// 		!account?.scope?.includes('https://www.googleapis.com/auth/calendar')
			// 	) {
			// 		return '/register/connect-calendar?error=permissions'
			// 	}

			// 	return true
			// },
			async session({ session, user }) {
				return {
					...session,
					user,
				}
			},
		},
	}
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
