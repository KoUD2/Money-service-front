export interface IUser {
	_id: string
	email: string
	password: string
	userName: string
	createdAt: string
	isAdmin: boolean
	balance: number
	premium: boolean
	level: number
	done: []
	reject: []
	banned: boolean
	message: []
}
