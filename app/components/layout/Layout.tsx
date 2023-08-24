import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import HeaderMine from './header/HeaderMine'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<HeaderMine />
			<div className={styles.center}>{children}</div>
		</>
	)
}

export default Layout
