import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './ButtonAttention.module.scss'

const ButtonAttention: FC = () => {
	return (
		<button className={styles.attentionButton}>
			<Link href={'/'} className={styles.attentionLink}>
				НЕ БЕСПОКОИТЬ
			</Link>
		</button>
	)
}

export default ButtonAttention
