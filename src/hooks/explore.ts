import { useContext } from 'react'

import { ExploreContext } from '@/contexts/explore'

export const useExplore = () => useContext(ExploreContext)
