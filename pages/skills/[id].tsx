import { errorCatch } from '@/api/api.helpers'
import LayoutClient from '@/components/layouts/client/LayoutClient'
import Skill from '@/components/screens/Skill/Skill'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'
import { SkillService } from '@/services/skill.service'
import { ISkill } from '@/shared/types/skills.type'
import { GetStaticPaths, GetStaticProps } from 'next'

const SkillPage: NextPageAuth<{skill: ISkill}> = ({skill}) => {
	return <LayoutClient><Skill skill={skill} /></LayoutClient>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: skills } = await SkillService.getAll()
		const paths = skills.map((skill) => ({
			params: { id: String(skill.id) },
		}))

		return { paths, fallback: 'blocking' }
	} catch {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: skill } = await SkillService.byId(Number(params?.id))



		return {
			props: { skill },
			revalidate: 60,
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default SkillPage
