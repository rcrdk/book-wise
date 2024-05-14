import { Binoculars } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'

import Title from '@/components/title'
import BaseLayout from '@/layout/base'

import { Container } from './styles'

export default function Explore() {
	return (
		<>
			<NextSeo title="Explorar • BookWise" description="" />

			<BaseLayout>
				<Container>
					<Title title="Explorar" icon={<Binoculars />} />
				</Container>
			</BaseLayout>
		</>
	)
}
