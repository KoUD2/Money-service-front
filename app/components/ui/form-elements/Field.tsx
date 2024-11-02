import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, className, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field, className)} style={style}>
				<label>
					<input ref={ref} type={type} {...rest} placeholder={placeholder} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)
Field.displayName = 'Field'
export default Field
