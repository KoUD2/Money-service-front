import { FC } from 'react'

import { ICardMenu } from '../card/card.interface'

import styles from './Tag.module.scss'

const Tag: FC<{ parameters: object[] }> = ({ parameters }) => {
	// for (let key in parameters) {
	// 	console.log(key + parameters[key])
	// 	{
	// 		<div className={styles.tagDiv} key={parameters[key]}>
	// 			<h6>{parameters[key]}</h6>
	// 		</div>
	// 	}
	// }

	console.log(typeof parameters.what)
	return (
		<>
			{parameters.what
				? parameters.what.map((parameter: string) => (
						<div className={styles.tagDiv} key={parameter}>
							<h6>{parameter}</h6>
						</div>
				  ))
				: null}
			{parameters.where
				? parameters.where.map((parameter: string) => (
						<div className={styles.tagDiv} key={parameter}>
							<h6>{parameter}</h6>
						</div>
				  ))
				: null}
			{parameters.when ? (
				<div className={styles.tagDiv} key={parameters.when}>
					<h6>{parameters.when}</h6>
				</div>
			) : null}
		</>
		// <div className={styles.tagDiv}>
		// 	{/* <h6>{parameters.what}</h6> */}
		// 	{/* <h6>{parameters.when}</h6>
		// 	<h6>{parameters.where}</h6> */}
		// </div>
	)
}

export default Tag
