import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'
import { validEmail } from '@/utils/string/regex'
import { IAuthInput } from './Auth.interface'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<IAuthInput>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-Mail"
				error={errors.email}
			/>

			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
