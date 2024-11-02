import Logo from 'header/logo/Logo'
import Image from 'next/image'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import AuthFields from '@/shared/user/AuthFields'

import FirstPoster from '@/assets/images/login-register/poster1-login.svg'

import { Meta } from '@/utils/meta/Meta'

import styles from '../auth/Auth.module.scss'
import { IAuthInput } from '../auth/auth.interface'
import { useAuthRedirect } from '../auth/useAuthRedirect'

const Registration: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: RegisterInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Авторизация" description="Станьте частью успешного коммьюнити">
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div></div>
					<Logo className={styles.logo} />
					<form onSubmit={handleSubmit(onSubmit)}>
						<h1>присоединяйся</h1>
						<AuthFields register={RegisterInput} formState={formState} />
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
							className={styles.button}
						>
							продолжить
						</Button>
					</form>
					<div className={styles.confidence}>
						<input type="checkbox" name="" value=""></input>
						<span></span>
						<h4>я соглашаюсь с политикой конфиденциальности</h4>
					</div>
				</div>
				<Image
					src={FirstPoster}
					alt="Первый постер регистрации"
					width={839}
					height={914}
					draggable={false}
					priority
				/>
			</div>
		</Meta>
	)
}

export default Registration
