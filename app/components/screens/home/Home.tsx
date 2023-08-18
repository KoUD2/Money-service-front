import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta title="Зарабатывать деньги стало ещё проще" description="dfvf">
			<h1>Home page</h1>
		</Meta>
	)
}

export default Home
