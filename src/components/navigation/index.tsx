import {
	Binoculars,
	ChartLineUp,
	List,
	SignIn,
	UserCircle,
} from '@phosphor-icons/react'
import { SignOut } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import { useCallback } from 'react'

import BrandImage from '@/assets/brand.png'
import { useAuth } from '@/hooks/auth'

import Avatar from '../avatar'
import Dropdown from '../dropdown'
import {
	Brand,
	Container,
	LargeNav,
	Nav,
	NavLink,
	NavTrigger,
	SmallNav,
	UserLink,
} from './styles'

export default function Navigation() {
	const router = useRouter()
	const { user, hasSignedIn } = useAuth()

	const handleSignOut = useCallback(async () => {
		await signOut({ callbackUrl: '/' })
	}, [])

	return (
		<Container>
			<Brand href="/dashboard">
				<Image src={BrandImage} alt="" priority={true} />
			</Brand>

			<LargeNav>
				<Nav>
					<NavLink
						href="/dashboard"
						active={router.pathname.includes('/dashboard')}
					>
						<ChartLineUp />
						Início
					</NavLink>

					<NavLink
						href="/explore"
						active={router.pathname.includes('/explore')}
					>
						<Binoculars />
						Explorar
					</NavLink>

					{hasSignedIn && (
						<NavLink
							href={`/profile/${user?.id}`}
							active={router.asPath.includes(`/profile/${user?.id}`)}
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
			</LargeNav>

			<SmallNav>
				{hasSignedIn ? (
					<Dropdown>
						<Dropdown.Trigger>
							<UserLink type="button" aria-label="Meu perfil">
								<Avatar src={user?.avatar_url} size="medium" />
							</UserLink>
						</Dropdown.Trigger>

						<Dropdown.Menu align="end" sideOffset={8}>
							<Nav>
								<NavLink
									href={`/profile/${user?.id}`}
									active={router.asPath.includes(`/profile/${user?.id}`)}
								>
									<UserCircle />
									Meu Perfil
								</NavLink>

								<NavLink as="button" type="button" onClick={handleSignOut}>
									<SignOut />
									Sair
								</NavLink>
							</Nav>
						</Dropdown.Menu>
					</Dropdown>
				) : (
					<UserLink as={Link} href="/" aria-label="Fazer login">
						<Avatar src={user?.avatar_url} size="medium" />
					</UserLink>
				)}

				<Dropdown>
					<Dropdown.Trigger>
						<NavTrigger aria-label="Menu">
							<List weight="bold" />
						</NavTrigger>
					</Dropdown.Trigger>

					<Dropdown.Menu align="end" sideOffset={8}>
						<Nav>
							<NavLink
								href="/dashboard"
								active={router.pathname.includes('/dashboard')}
							>
								<ChartLineUp />
								Início
							</NavLink>

							<NavLink
								href="/explore"
								active={router.pathname.includes('/explore')}
							>
								<Binoculars />
								Explorar
							</NavLink>

							{hasSignedIn && (
								<NavLink
									href={`/profile/${user?.id}`}
									active={router.asPath.includes(`/profile/${user?.id}`)}
								>
									<UserCircle />
									Perfil
								</NavLink>
							)}
						</Nav>
					</Dropdown.Menu>
				</Dropdown>
			</SmallNav>
		</Container>
	)
}
