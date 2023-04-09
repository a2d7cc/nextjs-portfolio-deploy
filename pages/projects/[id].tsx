import { errorCatch } from '@/api/api.helpers'
import LayoutClient from '@/components/layouts/client/LayoutClient'
import Project from '@/components/screens/Project/Project'
import Skill from '@/components/screens/Skill/Skill'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'
import { ProjectService } from '@/services/project.service'
import { IProject } from '@/shared/types/projects.type'
import { GetStaticPaths, GetStaticProps } from 'next'

const ProjectPage: NextPageAuth<{project: IProject}> = ({project}) => {
	return <LayoutClient><Project project={project} /></LayoutClient>
}


export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: projects } = await ProjectService.getAll()
		const paths = projects.map((project) => ({
			params: { id: String(project.id) },
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
		const { data: project } = await ProjectService.byId(Number(params?.id))



		return {
			props: { project },
			revalidate: 60,
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default ProjectPage