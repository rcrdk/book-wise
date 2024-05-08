import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { ReactNode, useCallback, useMemo } from 'react'

import IconGithub from '@/assets/icon-github.svg'
import IconGoogle from '@/assets/icon-google.svg'
import IconGuest from '@/assets/icon-guest.svg'

import { SignInButtonContainer } from './styles'

type SigninMode = 'google' | 'github' | 'guest'

interface SigninButtonProps {
	children: ReactNode
	mode: SigninMode
}

export function SigninButton({ children, mode }: SigninButtonProps) {
	const router = useRouter()

	const handleConnectCalendar = useCallback(
		async (action: SigninMode) => {
			if (action === 'guest') {
				await router.push('/dashboard')
			} else {
				await signIn(action, { callbackUrl: '/dashboard' })
			}
		},
		[router],
	)

	const renderIcon = useMemo(() => {
		switch (mode) {
			case 'google':
				return <Image src={IconGoogle} alt="" />
			case 'github':
				return <Image src={IconGithub} alt="" />
			case 'guest':
				return <Image src={IconGuest} alt="" />
		}
	}, [mode])

	return (
		<SignInButtonContainer
			type="button"
			onClick={() => handleConnectCalendar(mode)}
		>
			{renderIcon}
			{children}
		</SignInButtonContainer>
	)
}
