import { API_URL } from '@/configs/api.config'
import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import axios from 'axios'
import Cookies from 'js-cookie'
import { errorCatch, getContentType } from './api.helpers'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

const axiosInterceptor = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

axiosInterceptor.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosInterceptor.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			error.response.status === 401 &&
			errorCatch(error) === 'jwt expired' &&
			errorCatch(error) === 'jwt must be provided' &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return axiosInterceptor.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensStorage()
			}
		}

		throw error
	}
)

export default axiosInterceptor
