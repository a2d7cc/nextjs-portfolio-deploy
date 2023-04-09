import { errorCatch } from '@/api/api.helpers'
import LayoutClient from '@/components/layouts/client/LayoutClient'
import Project from '@/components/screens/Project/Project'
import Projects from '@/components/screens/Projects/Projects'
import Skill from '@/components/screens/Skill/Skill'
import { getProjectsUrlLink } from '@/configs/url.config'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'
import { ProjectService } from '@/services/project.service'
import { IProject } from '@/shared/types/projects.type'
import { GetStaticProps } from 'next'

interface IProjectPage {
	projects: IProject[]
}

const ProjectPage: NextPageAuth<IProjectPage> = ({projects}) => {
	return <LayoutClient><Projects projects={projects} /></LayoutClient>
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: dataProjects } = await ProjectService.getAll()

		const projects= dataProjects.map((project) => ({
      ...project,
      link: getProjectsUrlLink(`${project.id}`),
		}))



		return {
			props: {
				projects,
			} as IProjectPage,
			revalidate: 60
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				projects: [],
			} as IProjectPage,
		}
	}
}

export default ProjectPage
