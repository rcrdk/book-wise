import {
	Binoculars,
	ChartLineUp,
	SignIn,
	UserCircle,
} from '@phosphor-icons/react'
import { SignOut } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import { useCallback } from 'react'

import BrandImage from '@/assets/brand.png'
import { useAuth } from '@/hooks/auth'

import Avatar from '../avatar'
import { Brand, Container, Nav, NavLink, UserLink } from './styles'

export default function Navigation() {
	const router = useRouter()
	const { user, hasSignedIn } = useAuth()

	const handleSignOut = useCallback(async () => {
		await signOut({ callbackUrl: '/' })
	}, [])

	return (
		<Container>
			<Brand src={BrandImage} alt="" priority={true} fetchPriority="low" />

			<Nav>
				<NavLink
					href="/dashboard"
					active={router.pathname.includes('/dashboard')}
				>
					<ChartLineUp />
					Início
				</NavLink>

				<NavLink href="/explore" active={router.pathname.includes('/explore')}>
					<Binoculars />
					Explorar
				</NavLink>

				{hasSignedIn && (
					<NavLink
						href={`/profile/${user?.id}`}
						active={router.pathname.includes(`/profile/${user?.id}`)}
					>
						<UserCircle />
						Perfil
					</NavLink>
				)}
			</Nav>

			{hasSignedIn ? (
				<UserLink type="button" onClick={handleSignOut}>
					<Avatar src={user?.avatar_url} size="small" />
					<span>{user?.first_name}</span>
					<SignOut />
				</UserLink>
			) : (
				<UserLink as={Link} href="/">
					<strong>Fazer login</strong>
					<SignIn />
				</UserLink>
			)}
		</Container>
	)
}
