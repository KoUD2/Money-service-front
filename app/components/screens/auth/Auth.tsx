import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
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

	const login = (data: any) => {}
	const register = (data: any) => {}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Авторизация" description="Станьте частью успешного коммьюнити">
			<section></section>
		</Meta>
	)
}

export default Auth
