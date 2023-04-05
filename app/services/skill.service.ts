import axiosInterceptor, { axiosClassic } from '@/api/interceptors'
import { getSkillsUrl } from '@/configs/api.config'
import { ISkill, ISkillInput } from '@/shared/types/skills.type'


export const SkillService = {
	async getAll() {
		return axiosClassic.get<ISkill[]>(getSkillsUrl(''))
	},

	async getSearch(searchTerm?: string) {
		return axiosClassic.get<ISkill[]>(getSkillsUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async byId(id: number) {
		return axiosClassic.get<ISkillInput>(getSkillsUrl(`/${id}`))
	},

	async create(data: ISkillInput) {
		return axiosInterceptor.post<string>(getSkillsUrl(``), data)
	},

	async delete(id: number) {
		return axiosInterceptor.delete<number>(getSkillsUrl(`/${id}`))
	},

	async update(id: number, data: ISkillInput) {
		return axiosInterceptor.put<number>(getSkillsUrl(`/${id}`), data)
	},
}
