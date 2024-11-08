import Logo from 'header/logo/Logo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import AuthFields from '@/shared/user/AuthFields'

import FirstPoster from '@/assets/images/login-register/poster-login.svg'

import { Meta } from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()
	const { push } = useRouter()
	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const Home = () => {
		push('/registration')

		return <p></p>
	}

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
		else if (type === 'register') {
			register(data)
		}

		reset()
	}

	return (
		<Meta title="Авторизация" description="Станьте частью успешного коммьюнити">
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div></div>
					<Logo className={styles.logo} />
					<form onSubmit={handleSubmit(onSubmit)}>
						<h1>войти в аккаунт</h1>
						<AuthFields register={RegisterInput} formState={formState} />
						<Button
							type="submit"
							onClick={() => Home()}
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

export default Auth
