import { getAdminUrlLink } from '@/configs/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { ProjectService } from '@/services/project.service'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ITableItem } from '../../../ui/admin-table/AdminTable/AdminTable.interface'
import { IProjectInput } from '@/shared/types/projects.type'

export const useProjects = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push, query } = useRouter()

	const queryData = useQuery(
		['projects list', debouncedSearch],
		() => ProjectService.getSearch(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(project): ITableItem => ({
						id: project.id,
						editUrl: getAdminUrlLink(`project/edit/${project.id}`),
						items: [project.title, project.slug],
					})
				),
			onError(error) {
				toastrError(error, 'projects list')
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create project',
		(data: IProjectInput) => ProjectService.create(data),
		{
			onError(error) {
				toastrError(error, 'Create project')
			},
			onSuccess() {
				toastr.success('Create project', 'create was successful')
				push(getAdminUrlLink('projects'))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete project',
		(id: number) => ProjectService.delete(id),
		{
			onError(error) {
				toastrError(error, 'Delete project')
			},
			onSuccess: () => {
				toastr.success('Delete project', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const onSubmit: SubmitHandler<IProjectInput> = async (data) => {
		await createAsync(data)
	}

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			createAsync,
			deleteAsync,
			onSubmit,
		}),
		[queryData, searchTerm, createAsync, deleteAsync]
	)
}
