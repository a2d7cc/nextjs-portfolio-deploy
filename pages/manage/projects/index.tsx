import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import ProjectList from '@/components/screens/Admin/Projects/ProjectsList'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const ProjectsListPage: NextPageAuth = () => {
	return <LayoutAdmin><ProjectList /></LayoutAdmin>
}

ProjectsListPage.isOnlyAdmin = true

export default ProjectsListPage
