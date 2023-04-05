import { getAdminUrlLink } from '@/configs/url.config'
import { SkillService } from '@/services/skill.service'
import { IProjectInput } from '@/shared/types/projects.type'
import { ISkillInput } from '@/shared/types/skills.type'
import { getKeys } from '@/utils/Object/getKeys'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useSkillEdit = (setValue: UseFormSetValue<ISkillInput>) => {
	const { push, query } = useRouter()

	const skillId = Number(query.id)

	const { isLoading } = useQuery(
		['skill', skillId],
		() => SkillService.byId(skillId),
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
		'update skill',
		(data: ISkillInput) => SkillService.update(skillId, data),
		{
			onError(error) {
				toastrError(error, 'Update skill')
			},
			onSuccess() {
				toastr.success('Update skill', 'update was successful')
				push(getAdminUrlLink('skills'))
			},
		}
	)

	const onSubmit: SubmitHandler<ISkillInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
