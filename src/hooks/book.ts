import { useContext } from 'react'

import { BookContext } from '@/contexts/book'

export const useBook = () => useContext(BookContext)
