import { ErrorData, InputData, ValidatorConfig } from '@/types/Entyties'

export function validator(data: InputData | any, config: ValidatorConfig | any): ErrorData {
	const errors = {} as ErrorData | any
	function validate(validateMethod: string, data: InputData | string, config: ValidatorConfig) {
		let statusValidate
		switch (validateMethod) {
			case 'isRequired': {
				if (typeof data === 'boolean') {
					statusValidate = !data
				} else {
					if (typeof data === 'string') statusValidate = data.trim() === ''
				}
				break
			}
			default:
				break
		}
		if (statusValidate) return config.message
	}
	for (const fieldName in data) {
		for (const validateMethod in config[fieldName]) {
			const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
			if (error && !errors[fieldName]) {
				errors[fieldName] = error
			}
		}
	}
	return errors
}
