import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImageOk from '@/assets/images/logo-ok.svg'

import Tag from '../tag/Tag'

import styles from './Card.module.scss'

const Card: FC = () => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.heading}>
				<Image
					src={LogoImageOk}
					alt="Логотип задания"
					width={37}
					height={37}
					draggable={false}
				></Image>
				<h2>написать комментарий под видео и сделать репост</h2>
			</div>
			<div className={styles.description}>
				<ol>
					<li>Перейти по ссылке: www.google.com</li>
					<li>Поставить лайк, подписаться на канал сдеоать репост видео</li>
					<li>Прислать скриншот экрана с подпиской и лайком</li>
				</ol>
			</div>
			{/* <div className={styles.description}>
				<p>1. Перейти по ссылке: www.google.com</p>
				<p>2. Поставить лайк, подписаться на канал сдеоать репост видео</p>
				<p>3. Прислать скриншот экрана с подпиской и лайком</p>
			</div> */}
			<div className={styles.tags}>
				<Tag />
				<Tag />
				<Tag />
				<Tag />
				<Tag />
				<Tag />
			</div>
			<button>
				<Link href="/">0.25₽</Link>
			</button>
		</div>
	)
}

export default Card
