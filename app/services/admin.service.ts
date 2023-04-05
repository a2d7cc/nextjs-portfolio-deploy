import axiosInterceptor from '@/api/interceptors'
import { GetUsersUrl } from './../configs/api.config'

export const AdminService = {
	async getCountUsers() {
		return axiosInterceptor.get<number>(GetUsersUrl('/count'))
	},
}
