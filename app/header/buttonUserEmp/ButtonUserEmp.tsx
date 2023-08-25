import Link from 'next/link'
import { FC } from 'react'

import styles from './ButtonUserEmp.module.scss'

const ButtonUserEmp: FC = () => {
	return (
		<div className={styles.button}>
			<Link href={'/'} className={styles.employer}>
				заказчик
			</Link>
			<div className={styles.section}>
				<Link href={'/'} className={styles.user}>
					пользователь
				</Link>
			</div>
		</div>
	)
}

export default ButtonUserEmp
