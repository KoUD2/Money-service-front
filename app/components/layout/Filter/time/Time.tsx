import { FC } from 'react'

import styles from './Time.module.scss'

const Time: FC = () => {
	return (
		<ul className={styles.text}>
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ДО 5 МИН</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ДО ЧАСА</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ДО 2 ЧАСОВ</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ДО ДНЯ</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ДО НЕДЕЛИ</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ДРУГОЕ</h5>
		</ul>
	)
}

export default Time
