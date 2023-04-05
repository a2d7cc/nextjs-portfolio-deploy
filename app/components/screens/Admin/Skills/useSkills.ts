import { getAdminUrlLink } from '@/configs/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ITableItem } from '../../../ui/admin-table/AdminTable/AdminTable.interface'
import { SkillService } from '@/services/skill.service'
import { ISkillInput } from '@/shared/types/skills.type'

export const useSkills = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push, query } = useRouter()

	const queryData = useQuery(
		['skills list', debouncedSearch],
		() => SkillService.getSearch(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(skill): ITableItem => ({
						id: skill.id,
						editUrl: getAdminUrlLink(`skill/edit/${skill.id}`),
						items: [skill.title, skill.slug],
					})
				),
			onError(error) {
				toastrError(error, 'skills list')
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create skill',
		(data: ISkillInput) => SkillService.create(data),
		{
			onError(error) {
				toastrError(error, 'Create skill')
			},
			onSuccess() {
				toastr.success('Create skill', 'create was successful')
				push(getAdminUrlLink('skills'))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete skill',
		(id: number) => SkillService.delete(id),
		{
			onError(error) {
				toastrError(error, 'Delete skill')
			},
			onSuccess: () => {
				toastr.success('Delete skill', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const onSubmit: SubmitHandler<ISkillInput> = async (data) => {
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
