import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './ButtonAttention.module.scss'

const ButtonAttention: FC = () => {
	return (
		<button className={styles.attentionButton}>
			<Link href={'/'} className={styles.attentionLink}>
				не беспокоить
			</Link>
		</button>
	)
}

export default ButtonAttention
