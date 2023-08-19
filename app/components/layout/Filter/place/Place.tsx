import { FC } from 'react'

import styles from './Place.module.scss'

const Place: FC = () => {
	return (
		<ul className={styles.text}>
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>СОЦСЕТИ</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>САЙТЫ</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>ПРИЛОЖЕНИЯ И ИГРЫ</h5>
		</ul>
	)
}

export default Place
