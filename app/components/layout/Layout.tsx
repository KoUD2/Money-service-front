import { FC, PropsWithChildren } from 'react'

import HeaderMine from '../header/HeaderMine'

import Filter from './Filter/Filter'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<HeaderMine />
			<div className={styles.layout}>
				<Filter />
				<div className={styles.center}>{children}</div>
			</div>
		</>
	)
}

export default Layout
