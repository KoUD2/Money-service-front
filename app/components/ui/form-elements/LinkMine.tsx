import Link from 'next/link'
import { FC } from 'react'

const LinkMine: FC = ({
	isLoading,
	text,
	link,
	state,
	className,
	...props
}) => {
	return (
		<>
			{isLoading ? (
				<Link href={'#'} onClick={state} {...props}>
					{text}
				</Link>
			) : (
				<Link href={link} onClick={state} {...props}>
					{text}
				</Link>
			)}
		</>
	)
}

export default LinkMine
