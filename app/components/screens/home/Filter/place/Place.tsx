import { FC } from 'react'

import styles from './Place.module.scss'

const Place: FC = () => {
	return (
		<ul className={styles.text}>
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>соцсети</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>сайты</h5>
			<br />
			<input type="checkbox" name="" value=""></input>
			<span></span>
			<h5>приложения и игры</h5>
		</ul>
	)
}

export default Place
