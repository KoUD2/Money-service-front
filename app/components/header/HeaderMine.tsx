import { FC } from 'react'
import styles from './HeaderMine.module.scss'
import ButtonUserEmp from './buttonUserEmp/ButtonUserEmp'
import ButtonAttention from './buttonAttention/ButtonAttention'

const HeaderMine: FC = () => {
	return (
		<div className={styles.header}>
			<ButtonUserEmp />
			<ButtonAttention />
		</div>
	)
}

export default HeaderMine
