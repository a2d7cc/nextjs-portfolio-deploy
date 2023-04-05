
import { IUser } from '@/shared/types/user.types'
import axiosInterceptor from '@/api/interceptors'
import { GetUsersUrl } from '@/configs/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axiosInterceptor.get<IUser[]>(GetUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async deleteUser(id: number) {
		return axiosInterceptor.delete<number>(GetUsersUrl(id))
	},

	async getCountUsers() {
		return axiosInterceptor.get<number>(GetUsersUrl('count'))
	},
}
