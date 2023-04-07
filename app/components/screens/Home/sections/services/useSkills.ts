import { getSkillsUrlLink } from '@/configs/url.config'
import { SkillService } from '@/services/skill.service'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useQuery } from 'react-query'

export const useSkills = () => {
	const queryData = useQuery(
		'retrieve skills',
		() => SkillService.getSearch(),
		{
			select: ({ data }) =>
				data.map(
					(skill) => ({
						...skill,
						link: getSkillsUrlLink(`${skill.id}`),
					})
				),
			onError(error) {
				toastrError(error, 'projects list')
			},
		}
	)

	return queryData
}
