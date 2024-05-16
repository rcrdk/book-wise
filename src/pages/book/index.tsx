import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { useBook } from '@/hooks/book'

import BookRateForm from './components/form-rate'
import BookInformation from './components/information'
import BookRatings from './components/ratings'
import { Close, Content, Overlay } from './styles'

export default function Book() {
	const { showDialogBook, onUnselectBook } = useBook()

	return (
		<Dialog.Root open={showDialogBook} onOpenChange={onUnselectBook}>
			<Dialog.Portal>
				<Overlay />

				<Content>
					<Close aria-label="Fechar">
						<X weight="bold" />
					</Close>

					<BookInformation />
					<BookRateForm />
					<BookRatings />
				</Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
