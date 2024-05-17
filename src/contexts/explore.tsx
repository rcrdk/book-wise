import { useQuery } from '@tanstack/react-query'
import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { toast } from 'react-toastify'

import {
	GetBooksByFiltersPaginatedResponse,
	GetBooksByFiltersResponse,
} from '@/interfaces/get-books-by-filters'
import { GetCategoriesResponse } from '@/interfaces/get-categories'
import { api } from '@/lib/axios'
import { ExploreSearchBooksSchema } from '@/schema/explore-search-books'

interface ExploreContextType {
	searchQuery?: string
	selectedCategory?: string
	onSearchQuery: (data: ExploreSearchBooksSchema) => void
	onSelectCategory: (id?: string) => void
	onPaginate: (mode: 'prev' | 'next') => void
	categories?: GetCategoriesResponse[]
	books?: GetBooksByFiltersResponse[]
	booksPagination: {
		hasNextPage: boolean
		hasPrevPage: boolean
	}
	isLoadingCategories: boolean
	hasErrorLoadingCategories: boolean
	isLoadingBooks: boolean
	hasErrorLoadingBooks: boolean
}

interface ExploreContextProviderProps {
	children: ReactNode
}

export const ExploreContext = createContext({} as ExploreContextType)

export function ExploreContextProvider({
	children,
}: ExploreContextProviderProps) {
	const [page, setPage] = useState(1)
	const [searchQuery, setSearchQuery] = useState<string>()
	const [selectedCategory, setSelectedCategory] = useState<string>()

	const onSearchQuery = (data: ExploreSearchBooksSchema) => {
		setSearchQuery(data.q)
	}

	const onSelectCategory = (id?: string) => {
		setSelectedCategory(id)
	}

	const onPaginate = useCallback((mode: 'prev' | 'next') => {
		document.documentElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start',
		})

		setTimeout(() => {
			setPage((prev) => (mode === 'next' ? ++prev : --prev))
		}, 1000)
	}, [])

	const {
		data: categories,
		isLoading: isLoadingCategories,
		error: hasErrorLoadingCategories,
	} = useQuery<GetCategoriesResponse[]>({
		queryKey: ['categories'],
		queryFn: async () => {
			try {
				const response = await api.get('/get-categories')
				return response.data
			} catch (error) {
				toast.error('Erro ao tentar carregar as categorias.')
				console.error('ERROR:: ExploreCategories', error)
			}
		},
	})

	const {
		data: dataBooks,
		isLoading: isLoadingBooks,
		error: hasErrorLoadingBooks,
	} = useQuery<GetBooksByFiltersPaginatedResponse>({
		queryKey: ['books', selectedCategory, searchQuery, page],
		queryFn: async () => {
			try {
				const response = await api.get('/get-books-by-filters', {
					params: {
						page,
						category: selectedCategory,
						q: searchQuery,
					},
				})
				return response.data
			} catch (error) {
				toast.error('Erro ao tentar carregar os livros.')
				console.error('ERROR:: ExploreBooks', error)
			}
		},
	})

	useEffect(() => setPage(1), [searchQuery, selectedCategory])

	return (
		<ExploreContext.Provider
			value={{
				searchQuery,
				selectedCategory,
				onSearchQuery,
				onSelectCategory,
				onPaginate,
				categories,
				books: dataBooks?.books,
				booksPagination: {
					hasNextPage: !!dataBooks?.hasNextPage,
					hasPrevPage: !!dataBooks?.hasPrevPage,
				},
				isLoadingCategories,
				hasErrorLoadingCategories: !!hasErrorLoadingCategories,
				isLoadingBooks,
				hasErrorLoadingBooks: !!hasErrorLoadingBooks,
			}}
		>
			{children}
		</ExploreContext.Provider>
	)
}
