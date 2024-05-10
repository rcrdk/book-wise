import './../lib/dayjs'

import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'

import { AuthContextProvider } from '@/contexts/auth.context'
import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<AuthContextProvider>
					<>
						<DefaultSeo
							openGraph={{
								type: 'website',
								locale: 'pt_BR',
								siteName: 'Book Wise',
							}}
						/>

						<Component {...pageProps} />
					</>
				</AuthContextProvider>
			</SessionProvider>
		</QueryClientProvider>
	)
}
