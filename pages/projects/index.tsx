import LayoutClient from '@/components/layouts/client/LayoutClient'
import Project from '@/components/screens/Project/Project'
import Projects from '@/components/screens/Projects/Projects'
import Skill from '@/components/screens/Skill/Skill'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const ProjectPage: NextPageAuth = () => {
	return <LayoutClient><Projects /></LayoutClient>
}


export default ProjectPage
