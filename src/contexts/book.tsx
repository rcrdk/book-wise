import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { createContext, ReactNode, useState } from 'react'

import { GetBookResponse } from '@/interfaces/get-book'
import { GetBookRatingsResponse } from '@/interfaces/get-book-ratings'
import { api } from '@/lib/axios'
import { RateBookSchema } from '@/schema/rate-book'

interface BookContextType {
	selectedBookId?: string
	showDialogBook: boolean
	showRateBookForm: boolean
	book?: GetBookResponse
	ratings?: GetBookRatingsResponse[]
	onSelectBook: (id: string) => void
	onUnselectBook: () => void
	onToggleRateBookForm: () => void
	onSubmitRating: (data: RateBookSchema) => void
	isLoadingBook: boolean
	isLoadingRatings: boolean
	isLoadingRatingSubmit: boolean
	hasErrorLoadingBook: boolean
	hasErrorLoadingRatings: boolean
}

interface BookContextProviderProps {
	children: ReactNode
}

export const BookContext = createContext({} as BookContextType)

export function BookContextProvider({ children }: BookContextProviderProps) {
	const queryClient = useQueryClient()
	const { data: session } = useSession()

	const [selectedBookId, setSelectedBookId] = useState<string>()
	const [showDialogBook, setShowDialogBook] = useState(false)
	const [showRateBookForm, setShowRateBookForm] = useState(false)

	function onSelectBook(id: string) {
		setSelectedBookId(id)
	}

	async function onUnselectBook() {
		setShowDialogBook(false)

		await new Promise((resolve) => setTimeout(resolve, 1000))

		setSelectedBookId(undefined)
		setShowRateBookForm(false)
	}

	function onToggleRateBookForm() {
		setShowRateBookForm((prev) => {
			if (prev) {
				return false
			}

			return true
		})
	}

	const {
		data: book,
		isLoading: isLoadingBook,
		error: hasErrorLoadingBook,
	} = useQuery<GetBookResponse>({
		queryKey: ['book-information', selectedBookId],
		queryFn: async () => {
			setShowDialogBook(true)

			try {
				const response = await api.get('/get-book', {
					params: {
						book: selectedBookId,
					},
				})

				return response.data
			} catch (error) {
				onUnselectBook()

				// Lançar um toast

				console.error('ERROR:: BookInformations', error)
			}
		},
		enabled: !!selectedBookId,
	})

	const {
		data: ratings,
		isLoading: isLoadingRatings,
		error: hasErrorLoadingRatings,
	} = useQuery<GetBookRatingsResponse[]>({
		queryKey: ['book-ratings', selectedBookId],
		queryFn: async () => {
			try {
				const response = await api.get('/get-book-ratings', {
					params: {
						book: selectedBookId,
					},
				})

				return response.data
			} catch (error) {
				onUnselectBook()

				// Lançar um toast

				console.error('ERROR:: BookRatings', error)
			}
		},
		enabled: !!selectedBookId,
	})

	// Atualizar informações do livro após postar a avaliação e fazer o scroll
	function updateBookRatingsCache(
		{ rate, description }: RateBookSchema,
		previousCache?: GetBookRatingsResponse[],
	) {
		const cached = queryClient.getQueryData<GetBookRatingsResponse[]>([
			'book-ratings',
			selectedBookId,
		])

		if (cached) {
			const cachedData = previousCache
				? [...previousCache]
				: [
						{
							id: new Date().toISOString(),
							rate,
							description,
							created_at: new Date(),
							book_id: selectedBookId ?? '',
							user_id: session?.user.id ?? '',
							user: {
								id: session?.user.id ?? '',
								name: session?.user.name ?? '',
								email: session?.user.email ?? '',
								avatar_url: session?.user.avatar_url ?? '',
								created_at: String(new Date()),
							},
						},
						...cached,
					]

			queryClient.setQueryData<GetBookRatingsResponse[]>(
				['book-ratings', selectedBookId],
				cachedData,
			)
		}

		return { cached }
	}

	const { mutate: onSubmitRating, isPending: isLoadingRatingSubmit } =
		useMutation({
			mutationFn: async ({ rate, description }: RateBookSchema) => {
				const response = await api.post('/create-rating', {
					rate,
					description,
					book_id: selectedBookId,
				})

				return response.data
			},
			onMutate({ rate, description }) {
				const { cached } = updateBookRatingsCache({ rate, description })

				return { previousRatings: cached }
			},
			onError: (error, __, context) => {
				// Tratar o erro (usar um toast)

				console.error('SubmitRating:: ', error)

				if (context?.previousRatings) {
					updateBookRatingsCache(
						{ rate: 0, description: '' },
						Array(...context.previousRatings),
					)
				}
			},
			onSuccess() {
				onToggleRateBookForm()
				// Tratar sucesso (usar um toast)
			},
		})

	return (
		<BookContext.Provider
			value={{
				selectedBookId,
				showDialogBook,
				showRateBookForm,
				book,
				ratings,
				onSelectBook,
				onUnselectBook,
				onToggleRateBookForm,
				onSubmitRating,
				isLoadingBook,
				isLoadingRatings,
				isLoadingRatingSubmit,
				hasErrorLoadingBook: !!hasErrorLoadingBook,
				hasErrorLoadingRatings: !!hasErrorLoadingRatings,
			}}
		>
			{children}
		</BookContext.Provider>
	)
}
