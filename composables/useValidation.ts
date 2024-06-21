import { object, string, ref as yupRef } from 'yup'

export function useValidation(fields: string[], num: number = 6) {
	interface Schema {
		[key: string]: any
	}
	const schema: Schema = {}

	const validation: Schema = {
		email: string().email().required(),
		name: string().min(2).required(),
		surname: string().min(2).required(),
		password: string().min(num).required(),
		passwordConfirm: string()
			.min(num)
			.required()
			.oneOf([yupRef('password')]),
	}

	fields.forEach((field) => {
		schema[field] = validation[field]
	})

	const validationSchema = object(schema)

	return validationSchema
}
