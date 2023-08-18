import { FC } from 'react'

import styles from './Place.module.scss'

const Place: FC = () => {
	return (
		<ul className={styles.text}>
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>СОЦСЕТИ</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>САЙТЫ</p>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<p>ПРИЛОЖЕНИЯ И ИГРЫ</p>
		</ul>
	)
}

export default Place
