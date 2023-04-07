import { getProjectsUrlLink } from '@/configs/url.config'
import { ProjectService } from '@/services/project.service'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useQuery } from 'react-query'

export const useProjects = () => {
	const queryData = useQuery(
		'retrieve projects',
		() => ProjectService.getSearch(),
		{
			select: ({ data }) => {
				const [primary, ...secondary] = data

				return {
					primary: {
							...primary,
							link: getProjectsUrlLink(`${primary.id}`),
						}
					,
					secondary: secondary.map(
						(project) => ({
							...project,
							link: getProjectsUrlLink(`${project.id}`),
						})
					),
				}
			},
			onError(error) {
				toastrError(error, 'Retrieve Projects')
			},
		}
	)

	return queryData
}
