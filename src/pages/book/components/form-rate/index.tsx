import { zodResolver } from '@hookform/resolvers/zod'
import { PaperPlaneTilt, Spinner, Star, X } from '@phosphor-icons/react'
import * as Collapsible from '@radix-ui/react-collapsible'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Avatar from '@/components/avatar'
import { Text } from '@/components/text'
import { useAuth } from '@/hooks/auth'
import { useBook } from '@/hooks/book'
import { RateBookSchema, rateBookSchema } from '@/schema/rate-book'

import {
	Collapse,
	Form,
	FormButton,
	FormButtons,
	FormDescription,
	FormHeader,
	FormOffset,
	FormStar,
	FormStars,
	Header,
	HeaderButton,
} from './styles'

export default function BookRateForm() {
	const {
		isLoadingRatings,
		isLoadingRatingSubmit,
		hasErrorLoadingRatings,
		showRateBookForm,
		onToggleRateBookForm,
		onSubmitRating,
	} = useBook()

	const { user, hasSignedIn } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
		reset,
	} = useForm<RateBookSchema>({
		resolver: zodResolver(rateBookSchema),
	})

	const currentStars = watch('rate')
	const currentDescription = watch('description')?.length || 0

	useEffect(() => {
		if (showRateBookForm) reset()
	}, [showRateBookForm, reset])

	return (
		<>
			<Header>
				{isLoadingRatings || hasErrorLoadingRatings ? (
					<>
						<Text skeleton>Carregando...</Text>
						<Text skeleton>Carregando...</Text>
					</>
				) : (
					<>
						<Text>Avaliações</Text>

						{hasSignedIn ? (
							!showRateBookForm && (
								<HeaderButton type="button" onClick={onToggleRateBookForm}>
									Fazer avaliação
								</HeaderButton>
							)
						) : (
							<HeaderButton as={Link} href="/">
								Fazer login para avaliar
							</HeaderButton>
						)}
					</>
				)}
			</Header>

			{hasSignedIn && (
				<Collapsible.Root open={showRateBookForm}>
					<Collapse>
						<Form onSubmit={handleSubmit(onSubmitRating)}>
							<FormHeader>
								<Avatar src={user?.avatar_url} />
								<Text size="sm">{user?.name}</Text>
								<FormStars>
									{Array.from({ length: 5 }).map((_, i) => (
										<FormStar key={`sr_${i}`} error={!!errors.rate}>
											<input
												{...register('rate')}
												type="radio"
												value={i + 1}
												disabled={isLoadingRatingSubmit}
											/>
											<Star weight={currentStars >= i + 1 ? 'fill' : 'bold'} />
										</FormStar>
									))}
								</FormStars>
							</FormHeader>

							<FormDescription
								{...register('description')}
								placeholder="Escreva sua avaliação"
								rows={6}
								disabled={isLoadingRatingSubmit}
								error={!!errors.description}
							/>

							<FormButtons>
								<Text size="sm">{currentDescription}/450</Text>

								<FormButton
									type="button"
									onClick={onToggleRateBookForm}
									disabled={isLoadingRatingSubmit}
									title="Descartar comentário"
								>
									<X weight="bold" />
								</FormButton>

								<FormButton
									type="submit"
									disabled={!isValid || isLoadingRatingSubmit}
									title="Enviar comentário"
									loading={isLoadingRatingSubmit}
								>
									{isLoadingRatingSubmit ? (
										<Spinner weight="bold" />
									) : (
										<PaperPlaneTilt weight="bold" />
									)}
								</FormButton>
							</FormButtons>
						</Form>

						<FormOffset />
					</Collapse>
				</Collapsible.Root>
			)}
		</>
	)
}
