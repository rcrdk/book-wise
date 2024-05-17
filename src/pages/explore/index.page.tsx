import { Binoculars } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'

import Title from '@/components/title'
import { ExploreContextProvider } from '@/contexts/explore'
import BaseLayout from '@/layout/base'

import ExploreBooks from './components/books'
import ExploreCategories from './components/categories'
import ExploreSearch from './components/search'
import { Container } from './styles'

const ExploreComponent = () => {
	return (
		<>
			<NextSeo title="Explorar • BookWise" description="" />

			<BaseLayout>
				<Container>
					<Title title="Explorar" icon={<Binoculars />} />

					<ExploreSearch />
					<ExploreCategories />
					<ExploreBooks />
				</Container>
			</BaseLayout>
		</>
	)
}

export default function Explore() {
	return (
		<ExploreContextProvider>
			<ExploreComponent />
		</ExploreContextProvider>
	)
}
