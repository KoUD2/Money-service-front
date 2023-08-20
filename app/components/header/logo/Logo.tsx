import Link from 'next/link'
import { FC } from 'react'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/" className={styles.logo}>
			задания
		</Link>
	)
}

export default Logo
