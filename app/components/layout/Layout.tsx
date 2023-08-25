import HeaderMine from 'header/HeaderMine'
import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<HeaderMine />
			<div className={styles.center}>{children}</div>
		</>
	)
}

export default Layout
