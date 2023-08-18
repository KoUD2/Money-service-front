import { FC } from 'react'

import styles from './Filter.module.scss'
import Action from './action/Action'
import Place from './place/Place'
import Time from './time/Time'
import Priority from './priority/Priority'

const Filter: FC = () => {
	return (
		<div className={styles.main}>
			<h1>ЧТО?</h1>
			<div className={styles.background}>
				<Action />
			</div>
			<h1>ГДЕ?</h1>
			<div className={styles.background}>
				<Place />
			</div>
			<h1>КОГДА?</h1>
			<div className={styles.background}>
				<Time />
			</div>
			<h1>КАК?</h1>
			<div className={styles.background}>
				<Priority />
			</div>
		</div>
	)
}

export default Filter
