import { User } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'

import Title from '@/components/title'
import BaseLayout from '@/layout/base'

import ProfileUserInfo from './components/user-info'
import { Container, LeftContainer, RightContainer } from './styles'

export default function Profile() {
	return (
		<>
			<NextSeo title="Meu Perfil • BookWise" description="" />

			<BaseLayout>
				<Container>
					<Title title="Perfil" icon={<User />} />

					<LeftContainer>
						<p>Search</p>
						<p>User feed</p>
						<p>Pagination</p>
					</LeftContainer>

					<RightContainer>
						<ProfileUserInfo />
					</RightContainer>
				</Container>
			</BaseLayout>
		</>
	)
}
