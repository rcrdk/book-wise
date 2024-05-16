import { User } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

import Title from '@/components/title'
import BaseLayout from '@/layout/base'
import { ProfileSearchBookRatedSchema } from '@/schema/profile-search-book-rated'

import ProfileFeed from './components/feed'
import ProfileSearch from './components/search'
import ProfileUserInfo from './components/user-info'
import { Container, LeftContainer, RightContainer } from './styles'

export default function Profile() {
	const [searchQuery, setSearchQuery] = useState<string>()

	const router = useRouter()
	const { id: userId } = router.query

	const handleSearch = (data: ProfileSearchBookRatedSchema) => {
		setSearchQuery(data.q)
	}

	return (
		<>
			<NextSeo title="Perfil • BookWise" description="" />

			<BaseLayout>
				<Container>
					<Title title="Perfil" icon={<User />} />

					<LeftContainer>
						<ProfileSearch onSearch={handleSearch} />
						<ProfileFeed user={userId} search={searchQuery} />
					</LeftContainer>

					<RightContainer>
						<ProfileUserInfo user={userId} />
					</RightContainer>
				</Container>
			</BaseLayout>
		</>
	)
}
