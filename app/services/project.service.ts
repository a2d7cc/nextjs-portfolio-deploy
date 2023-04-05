import axiosInterceptor, { axiosClassic } from '@/api/interceptors'
import { getProjectsUrl } from '@/configs/api.config'
import { IProject, IProjectInput } from '@/shared/types/projects.type'

export const ProjectService = {
	async getAll() {
		return axiosClassic.get<IProject[]>(getProjectsUrl(''))
	},

	async getSearch(searchTerm?: string) {
		return axiosClassic.get<IProject[]>(getProjectsUrl('/search'), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async byId(id: number) {
		return axiosClassic.get<IProjectInput>(getProjectsUrl(`/by-id/${id}`))
	},

	async create(data: IProjectInput) {
		return axiosInterceptor.post<string>(getProjectsUrl(``), data)
	},

	async delete(id: number) {
		return axiosInterceptor.delete<number>(getProjectsUrl(`/${id}`))
	},

	async update(id: number, data: IProjectInput) {
		return axiosInterceptor.put<number>(getProjectsUrl(`/${id}`), data)
	},
}
