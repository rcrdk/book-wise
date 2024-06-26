import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export function buildNextAuthOptions(): NextAuthOptions {
	return {
		adapter: PrismaAdapter(),
		secret: process.env.NEXTAUTH_SECRET,
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
						email: profile.email,
						name: profile.name,
						avatar_url: profile.picture,
					}
				},
			}),
			GitHubProvider({
				clientId: process.env.GITHUB_CLIENT_ID ?? '',
				clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
				profile: (profile: GithubProfile) => {
					return {
						id: String(profile.id),
						name: profile.name!,
						email: profile.email!,
						avatar_url: profile.avatar_url,
					}
				},
			}),
		],
		callbacks: {
			async signIn({ account }) {
				const isAllowedToSignIn = !!account

				if (isAllowedToSignIn) {
					return true
				} else {
					return false
				}
			},
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
	return await NextAuth(req, res, buildNextAuthOptions())
}
