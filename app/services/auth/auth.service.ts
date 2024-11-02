import { getContentType } from 'api/api.helpers'
import { axiosClassic } from 'api/interceptors'
import { API_URL, getAuthUrl } from 'config/api.config'
import Cookies from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(email: string, password: string, userName: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/register')}`,
			{
				email,
				password,
				userName,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string, userName: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login')}`,
			{
				email,
				password,
				userName,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassic.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login/access-token')}`,
			{
				refreshToken,
			},
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
