import { getAdminUrlLink } from '@/configs/url.config'
import { ProjectService } from '@/services/project.service'
import { IProjectInput } from '@/shared/types/projects.type'
import { getKeys } from '@/utils/Object/getKeys'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useProjectEdit = (setValue: UseFormSetValue<IProjectInput>) => {
	const { push, query } = useRouter()

	const projectId = Number(query.id)

	const { isLoading } = useQuery(
		['project', projectId],
		() => ProjectService.byId(projectId),
		{
			onSuccess: ({ data }) => {
				// setValue put the data
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError: (error) => {
				toastrError(error, 'Get project')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update project',
		(data: IProjectInput) => ProjectService.update(projectId, data),
		{
			onError(error) {
				toastrError(error, 'Update project')
			},
			onSuccess() {
				toastr.success('Update project', 'update was successful')
				push(getAdminUrlLink('projects'))
			},
		}
	)

	const onSubmit: SubmitHandler<IProjectInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
