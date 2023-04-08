import { getAdminUrlLink } from '@/configs/url.config'
import { ProjectService } from '@/services/project.service'
import { SkillService } from '@/services/skill.service'
import { IProjectInput } from '@/shared/types/projects.type'
import { ISkillInput } from '@/shared/types/skills.type'
import { getKeys } from '@/utils/Object/getKeys'
import { toastrError } from '@/utils/Storage/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useProject = () => {
	const { push, query } = useRouter()

	const projectId = Number(query.id)

	const { isLoading, data } = useQuery(
		['project', projectId],
		() => ProjectService.byId(projectId),
		{
			select: ({ data }) => {
			return data
			}
			,
			onError: (error) => {
				toastrError(error, 'Get Skill')
			},
			enabled: !!query.id,
		}
	)

	return { isLoading, data}
}
