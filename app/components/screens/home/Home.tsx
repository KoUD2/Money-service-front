import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'

import Filter from './Filter/Filter'
import styles from './Home.module.scss'
import Events from './events/Events'
import { IHome } from './home.interface'
import Card from './mainContent/card/Card'

const Home: FC<IHome> = () => {
	return (
		<Meta title="Зарабатывать деньги стало ещё проще" description="dfvf">
			<div className={styles.mainLayout}>
				<div className={styles.layout}>
					<Filter />
					<div className={styles.center}>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
					<div className={styles.events}>
						<Events />
						<Events />
						<Events />
						<Events />
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default Home
