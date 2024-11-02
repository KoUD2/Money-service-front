import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, InterfaceEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
	'auth/register',
	async ({ email, password, userName }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password, userName)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
	'auth/login',
	async ({ email, password, userName }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password, userName)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
