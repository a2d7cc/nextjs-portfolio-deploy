import { ITableItem } from "@/components/ui/admin-table/AdminTable/AdminTable.interface"
import { getProjectsUrlLink } from "@/configs/url.config"
import { ProjectService } from "@/services/project.service"
import { toastrError } from "@/utils/Storage/toastr-error"
import { useQuery } from "react-query"

export const useProjects = () => {

    const {isLoading, data} = useQuery(
		['all projects'],
		() => ProjectService.getSearch(),
		{
			select: ({ data }) =>
				data.map(
					(project) => ({
						...project,
						link: getProjectsUrlLink(`${project.id}`),
					})
				),
			onError(error) {
				toastrError(error, 'projects list')
			},
		}
	)

    return {isLoading, data}
}