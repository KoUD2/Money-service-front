import HeaderMine from 'header/HeaderMine'
import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'

import Filter from './Filter/Filter'
import styles from './Home.module.scss'
import Events from './events/Events'
import { IHome } from './home.interface'
import Card from './mainContent/card/Card'
import { useCardTitle } from './mainContent/card/useCard'

const Home: FC<IHome> = () => {
	const { isLoading, data } = useCardTitle()

	return (
		<Meta title="Зарабатывать деньги стало ещё проще" description="dfvf">
			<HeaderMine />
			<div className={styles.mainLayout}>
				<div className={styles.layout}>
					<Filter />
					<div className={styles.center}>
						{isLoading ? (
							<div>Loading...</div>
						) : data?.length ? (
							data.map((card) => (
								<Card
									key={card._id}
									card={{
										title: card.title,
										price: card.price,
										description: card.description,
										parameters: card.parameters,
									}}
								/>
							))
						) : null}
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
