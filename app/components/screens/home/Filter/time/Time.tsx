import { FC } from 'react'

import styles from './Time.module.scss'

const Time: FC = () => {
	return (
		<ul className={styles.text}>
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>до 5 мин</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>до часа</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>до 2 часов</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>до дня</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>до недели</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>другое</h5>
		</ul>
	)
}

export default Time
