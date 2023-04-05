import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import ProjectEdit from '@/components/screens/Admin/Project/ProjectEdit'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const ProjectEditPage: NextPageAuth = () => {
	return <LayoutAdmin><ProjectEdit /></LayoutAdmin>
}

ProjectEditPage.isOnlyAdmin = true

export default ProjectEditPage
