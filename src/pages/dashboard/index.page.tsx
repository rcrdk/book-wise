import { NextSeo } from 'next-seo'

import { Heading } from '@/components/heading'
import BaseLayout from '@/layout/base'

export default function Dashboard() {
	return (
		<>
			<NextSeo title="BookWise" description="" />

			<BaseLayout>
				<Heading as="h1" size="2xl">
					Início
				</Heading>
			</BaseLayout>
		</>
	)
}
