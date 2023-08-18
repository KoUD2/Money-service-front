import { FC } from 'react'
import styles from './Time.module.scss'

const Time: FC = () => {
	return (
		<ul className={styles.text}>
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ДО 5 МИН</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ДО ЧАСА</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ДО 2 ЧАСОВ</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ДО ДНЯ</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ДО НЕДЕЛИ</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ДРУГОЕ</p>
		</ul>
	)
}

export default Time
