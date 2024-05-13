import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import BrandImage from '@/assets/brand.png'
import { Heading } from '@/components/heading'
import { SigninButton } from '@/components/signin-button'
import { Text } from '@/components/text'
import { useAuth } from '@/hooks/auth'
import BaseLayout from '@/layout/base'

import { Box, Brand, Container } from './styles'

export default function Home() {
	const router = useRouter()

	const { hasSignedIn } = useAuth()

	// const hasAuthError = !!router.query.error

	useEffect(() => {
		if (hasSignedIn) router.push('/dashboard')
	}, [hasSignedIn, router])

	return (
		<>
			<NextSeo title="Acesse Sua Conta • BookWise" description="" />

			<BaseLayout mode="auth">
				<Brand>
					<Image src={BrandImage} alt="" priority={true} fetchPriority="low" />
				</Brand>

				<Container>
					{/* {hasAuthError && 'Erro de autenticação'} */}
					<Box>
						<Heading as="h1" size="2xl">
							Boas vindas!
						</Heading>
						<Text>Faça seu login ou acesse como visitante.</Text>

						<div>
							<SigninButton mode="google">Entrar com o Google</SigninButton>
							<SigninButton mode="github">Entrar com o GitHub</SigninButton>
							<SigninButton mode="guest">Entrar como Visitante</SigninButton>
						</div>
					</Box>
				</Container>
			</BaseLayout>
		</>
	)
}
