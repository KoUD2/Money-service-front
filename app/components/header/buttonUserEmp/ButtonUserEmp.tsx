import { FC } from 'react'
import Link from 'next/link'

import styles from './ButtonUserEmp.module.scss'

const ButtonUserEmp: FC = () => {
	return (
		<div className={styles.button}>
			<Link href={'/'} className={styles.employer}>
				ЗАКАЗЧИК
			</Link>
			<div className={styles.section}>
				<Link href={'/'} className={styles.user}>
					ПОЛЬЗОВАТЕЛЬ
				</Link>
			</div>
		</div>
	)
}

export default ButtonUserEmp
