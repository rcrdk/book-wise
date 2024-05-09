import { ChartLineUp } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'

import Title from '@/components/title'
import BaseLayout from '@/layout/base'

import { Container } from './styles'

export default function Dashboard() {
	return (
		<>
			<NextSeo title="BookWise" description="" />

			<BaseLayout>
				<Container>
					<Title title="Início" icon={<ChartLineUp />} />

					<div
						style={{
							background: '#181c2a',
							padding: '1rem',
							borderRadius: '.5rem',
						}}
					>
						Left content
					</div>
					<div
						style={{
							background: '#181c2a',
							padding: '1rem',
							borderRadius: '.5rem',
						}}
					>
						Right content
					</div>
				</Container>
			</BaseLayout>
		</>
	)
}
