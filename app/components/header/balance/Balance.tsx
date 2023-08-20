import Link from 'next/link'
import { FC } from 'react'

import styles from './Balance.module.scss'

const Balance: FC = () => {
	return (
		<div className={styles.containerBalance}>
			<h4>0.25₽</h4>
			<button>
				<Link href="/" className={styles.balanceLink}>
					вывести
				</Link>
			</button>
		</div>
	)
}

export default Balance
