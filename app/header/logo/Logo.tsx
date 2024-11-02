import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Logo.module.scss'
import { ILogo } from './logo.interface'

const Logo: FC<ILogo> = ({ className }) => {
	return (
		<Link href="/" className={cn(styles.logo, className)}>
			задания
		</Link>
	)
}

export default Logo
