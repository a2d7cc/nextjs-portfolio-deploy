import LayoutClient from '@/components/layouts/client/LayoutClient'
import Project from '@/components/screens/Project/Project'
import Skill from '@/components/screens/Skill/Skill'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const ProjectPage: NextPageAuth = () => {
	return <LayoutClient><Project /></LayoutClient>
}


export default ProjectPage
