import { errorCatch } from '@/api/api.helpers'
import LayoutClient from '@/components/layouts/client/LayoutClient'
import Home from '@/components/screens/Home/Home'
import { IHome } from '@/components/screens/Home/home.interface'
import { getProjectsUrlLink, getSkillsUrlLink } from '@/configs/url.config'
import { ProjectService } from '@/services/project.service'
import { SkillService } from '@/services/skill.service'
import { IProject } from '@/shared/types/projects.type'
import { ISkill } from '@/shared/types/skills.type'
import type { GetStaticProps, NextPage } from 'next'




const HomePage: NextPage<IHome> = ({projects, skills}) => {
  return (
    <LayoutClient isNav={true}>
      <Home projects={projects} skills={skills} />
    </LayoutClient>
  )
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: dataProjects } = await ProjectService.getAll()

		const projects= dataProjects.slice(0, 4).map((project) => ({
      ...project,
      link: getProjectsUrlLink(`${project.id}`),
		}))

		const { data: skillsData } = await SkillService.getAll()

		const skills = skillsData.map((skill) => ({
      ...skill,
      link: getSkillsUrlLink(`${skill.id}`),
		}))


		return {
			props: {
				projects,
				skills,
			} as IHome,
			revalidate: 60
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				projects: [],
				skills: [],
			} as IHome,
		}
	}
}

export default HomePage
