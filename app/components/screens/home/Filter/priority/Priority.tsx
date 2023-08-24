import { FC } from 'react'

import styles from './Priority.module.scss'

const Priority: FC = () => {
	return (
		<ul className={styles.colors}>
			<li>
				<input type="checkbox" name="" value=""></input>
				<span></span>
				<div className={styles.minPriority}></div>
			</li>
			<li>
				<input type="checkbox" name="" value=""></input>
				<span></span>
				<div className={styles.fourthPriority}></div>
			</li>
			<li>
				<input type="checkbox" name="" value=""></input>
				<span></span>
				<div className={styles.thirdPriority}></div>
			</li>
			<li>
				<input type="checkbox" name="" value=""></input>
				<span></span>
				<div className={styles.secondPriority}></div>
			</li>
			<li>
				<input type="checkbox" name="" value=""></input>
				<span></span>
				<div className={styles.highPriority}></div>
			</li>
		</ul>
	)
}

export default Priority
