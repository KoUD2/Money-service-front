import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store/store'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
