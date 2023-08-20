import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './HeaderMine.module.scss'
import Balance from './balance/Balance'
import ButtonAttention from './buttonAttention/ButtonAttention'
import ButtonUserEmp from './buttonUserEmp/ButtonUserEmp'
import Logo from './logo/Logo'

const HeaderMine: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<ButtonUserEmp />
				<div className={styles.containerLink}>
					<Link href="/" className={styles.tab}>
						задания
					</Link>
					<Link href="/" className={styles.tab}>
						сообщения
					</Link>
					<Link href="/" className={styles.tab}>
						помощь
					</Link>
				</div>
			</div>

			<div className={styles.info}>
				<ButtonAttention />
				<Balance />
				<div className={styles.profile}>
					<h4 className={styles.nick}>konstud</h4>
					<Image src="/" alt="Иконка профиля" width={33} height={33}></Image>
				</div>
			</div>
		</div>
	)
}

export default HeaderMine
