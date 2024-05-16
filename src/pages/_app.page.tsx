import './../lib/dayjs'
import 'react-toastify/dist/ReactToastify.css'

import { CheckCircle, WarningCircle } from '@phosphor-icons/react'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import { ToastContainer } from 'react-toastify'

import { AuthContextProvider } from '@/contexts/auth'
import { BookContextProvider } from '@/contexts/book'
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
				<BookContextProvider>
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

							<ToastContainer
								closeButton={false}
								autoClose={8000}
								position="bottom-left"
								draggable
								closeOnClick
								icon={({ type }) => {
									if (type === 'success') return <CheckCircle />
									if (type === 'error') return <WarningCircle />
									else return 'ℹ️'
								}}
							/>
						</>
					</AuthContextProvider>
				</BookContextProvider>
			</SessionProvider>
		</QueryClientProvider>
	)
}
