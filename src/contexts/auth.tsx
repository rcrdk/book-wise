import { User } from 'next-auth'
import { useSession } from 'next-auth/react'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthUser extends User {
	first_name: string
}

interface AuthContextType {
	user: AuthUser | null
	hasSignedIn: boolean
}

interface AuthContextProviderProps {
	children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [user, setUser] = useState<AuthUser | null>(null)

	const { data: sessionData, status: sessionStatus } = useSession()

	const hasSignedIn = sessionStatus === 'authenticated'

	useEffect(() => {
		if (sessionData?.user) {
			const firstName = sessionData.user.name.split(' ')[0]

			setUser({
				...sessionData.user,
				first_name: firstName,
			})
		}
	}, [sessionData])

	return (
		<AuthContext.Provider
			value={{
				user,
				hasSignedIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
