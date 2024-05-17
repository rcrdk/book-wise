import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ComponentProps, ReactNode } from 'react'

import { DropdownContent } from './styles'

interface DropdownProps {
	children: ReactNode
}

interface DropdownTriggerProps {
	children: ReactNode
}

interface DropdownMenuProps
	extends ComponentProps<typeof DropdownMenu.DropdownMenuContent> {
	children: ReactNode
}

const Dropdown = ({ children }: DropdownProps) => {
	return <DropdownMenu.Root modal={false}>{children}</DropdownMenu.Root>
}

const Trigger = ({ children }: DropdownTriggerProps) => (
	<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
)

const Menu = (props: DropdownMenuProps) => (
	<DropdownMenu.Portal>
		<DropdownMenu.Content {...props} style={{ zIndex: 100 }}>
			<DropdownContent>{props.children}</DropdownContent>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
)

Dropdown.Trigger = Trigger
Dropdown.Menu = Menu

export default Dropdown
