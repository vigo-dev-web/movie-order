export type City = {
	id: string
	name: string
}

export type Social = {
	id: string | number
	link: string
	img: string
	alt: string
}

export type Actor = {
	id: string | number
	role: string
	img: string
	name: string
	desc: string
}

export type InputData = {
	city: string
	name: string
	email: string
	phone: string
	message: string
	privacy?: boolean
}

export type ErrorData = {
	city: string
	name: string
	email: string
	phone: string
	message: string
	privacy?: string
}

export type User = {
	city: City | undefined
	email: string
	message: string
	name: string
	phone: string
	privacy: boolean
}

type Message = {
	message: string
}

type IsRequired = {
	isRequired: Message
}
export type ValidatorConfig = {
	city: IsRequired
	name: IsRequired
	email: IsRequired
	phone: IsRequired
	message: IsRequired
	privacy: IsRequired
}
