import 'swiper/css'

import { SwiperOptions } from 'swiper/types'

import { useExplore } from '@/hooks/explore'

import { Button, Container, Slide, Slider, SliderContainer } from './styles'

export default function ExploreCategories() {
	const {
		selectedCategory,
		onSelectCategory,
		categories,
		isLoadingCategories,
		hasErrorLoadingCategories,
	} = useExplore()

	// eslint-disable-next-line prettier/prettier
	const skeletonStrings = ['Tudo', 'Alegoria', 'Arquitetura', 'Autoajuda', 'Aventura', 'Educação', 'Fábula', 'Ficção', 'Geek', 'Programação', 'Romance', 'Suspense', 'Terror', 'Tudo', 'Alegoria', 'Arquitetura', 'Autoajuda']

	const swiperOptions: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: '8',
	}

	const hasSkeletons = hasErrorLoadingCategories || isLoadingCategories

	return (
		<Container>
			<SliderContainer>
				<Slider {...swiperOptions}>
					{hasSkeletons &&
						skeletonStrings.map((s, i) => {
							return (
								<Slide key={`cls_${i}`}>
									<Button as="div" skeleton>
										{s}
									</Button>
								</Slide>
							)
						})}

					{!hasSkeletons && (
						<>
							<Slide>
								<Button
									type="button"
									onClick={() => onSelectCategory()}
									active={!selectedCategory}
								>
									Tudo
								</Button>
							</Slide>

							{categories &&
								categories.map((category) => (
									<Slide key={`bfc_${category.id}`}>
										<Button
											type="button"
											onClick={() => onSelectCategory(category.id)}
											active={selectedCategory === category.id}
										>
											{category.name}
										</Button>
									</Slide>
								))}
						</>
					)}
				</Slider>
			</SliderContainer>
		</Container>
	)
}
