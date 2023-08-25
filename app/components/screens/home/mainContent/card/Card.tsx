import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImageNothing from '@/assets/images/logo-nothing.svg'
import LogoImageOk from '@/assets/images/logo-ok.svg'

import { onlyText } from '@/utils/string/clearText'

import Tag from '../tag/Tag'

import styles from './Card.module.scss'
import { ICardMenu } from './card.interface'

const Card: FC<{ card: ICardMenu }> = ({
	card: { title, price, description, parameters },
}) => {
	let LogoService = ''
	const isOK = parameters.where.includes('OK')
	if (isOK) {
		LogoService = LogoImageOk
	} else {
		LogoService = LogoImageNothing
	}

	return (
		<div className={styles.cardContainer}>
			<div className={styles.heading}>
				<Image
					src={LogoService}
					alt="Логотип задания"
					width={37}
					height={37}
					draggable={false}
				></Image>
				<h2>{onlyText(title, 52)}</h2>
			</div>
			{/* <div className={styles.description}>
							<ol>
								<li>Перейти по ссылке: www.google.com</li>
								<li>
									Поставить лайк, подписаться на канал сдеоать репост видео
								</li>
								<li>Прислать скриншот экрана с подпиской и лайком</li>
							</ol>
						</div> */}
			<div className={styles.description}>
				<p>{onlyText(description, 220)}</p>
			</div>
			<div className={styles.tags}>
				<Tag parameters={parameters} />
			</div>
			<button>
				<Link href="/">{price}₽</Link>
			</button>
		</div>
	)
}

export default Card
