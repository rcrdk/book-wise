import { Book } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { Skeleton } from '../skeleton'
import { BookCoverContainer, BookCoverFallback, BookCoverImage } from './styles'

export interface BookCoverProps extends ComponentProps<typeof BookCoverImage> {
	skeleton?: boolean
}

export default function BookCover(props: BookCoverProps) {
	return (
		<BookCoverContainer>
			{props.skeleton && <Skeleton />}

			<BookCoverImage {...props} />
			<BookCoverFallback delayMs={600}>
				<Book />
			</BookCoverFallback>
		</BookCoverContainer>
	)
}
