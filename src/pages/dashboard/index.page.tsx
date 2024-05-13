import { ChartLineUp } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'

import Title from '@/components/title'
import BaseLayout from '@/layout/base'

import PopularBooks from './components/popular-books'
import RecentRatings from './components/recent-ratings'
import UserLastRating from './components/user-last-rating'
import { Container, LeftContainer, RightContainer } from './styles'

export default function Dashboard() {
	return (
		<>
			<NextSeo title="Avaliações Recentes • BookWise" description="" />

			<BaseLayout>
				<Container>
					<Title title="Início" icon={<ChartLineUp />} />

					<LeftContainer>
						<UserLastRating />
						<RecentRatings />
					</LeftContainer>

					<RightContainer>
						<PopularBooks />
					</RightContainer>
				</Container>
			</BaseLayout>
		</>
	)
}
