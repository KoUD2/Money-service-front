import { FC } from 'react'

import styles from './Filter.module.scss'
import Action from './action/Action'
import Place from './place/Place'
import Priority from './priority/Priority'
import Time from './time/Time'

const Filter: FC = () => {
	return (
		<div className={styles.main}>
			<h1>ТИП ЗАДАНИЯ:</h1>
			<div className={styles.background}>
				<Action />
			</div>
			<h1>СФЕРА ИНТЕРЕСОВ:</h1>
			<div className={styles.background}>
				<Place />
			</div>
			<h1>ВРЕМЯ:</h1>
			<div className={styles.background}>
				<Time />
			</div>
			<h1>УРОВНИ:</h1>
			<div className={styles.background}>
				<Priority />
			</div>
		</div>
	)
}

export default Filter
