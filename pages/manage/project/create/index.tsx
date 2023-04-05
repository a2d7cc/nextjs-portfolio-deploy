import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import ProjectCreate from '@/components/screens/Admin/Project/ProjectCreate'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const ProjectCreatePage: NextPageAuth = () => {
	return <LayoutAdmin><ProjectCreate /></LayoutAdmin>
}

ProjectCreatePage.isOnlyAdmin = true

export default ProjectCreatePage
