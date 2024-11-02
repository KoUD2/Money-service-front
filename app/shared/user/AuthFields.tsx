import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

import styles from './AuthFields.module.scss'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<div className={styles.wrapper}>
			<Field
				{...register('email', {
					required: 'телефон или почта обязательны!',
					pattern: {
						value: validEmail,
						message: 'пожалуйста, введите валидную почту или телефон',
					},
				})}
				placeholder="телефон или почта"
				error={errors.email}
			/>
			<Field
				{...register('password', {
					required: 'Пароль обязателен!',
					minLength: {
						value: 6,
						message: 'Минимальная длина пароля 6 символов!',
					},
				})}
				placeholder="пароль"
				type="password"
				autoComplete="on"
				className={styles.field}
				error={errors.password}
			/>
			<Field
				{...register(
					'userName',
					isPasswordRequired
						? {
								required: 'никнейм обязателен',
						  }
						: {}
				)}
				placeholder="никнейм"
				className={styles.field}
				error={errors.userName}
			/>
		</div>
	)
}

export default AuthFields
