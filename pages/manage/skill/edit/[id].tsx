import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import ProjectEdit from '@/components/screens/Admin/Project/ProjectEdit'
import SkillEdit from '@/components/screens/Admin/Skill/SkillEdit'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const SkillEditPage: NextPageAuth = () => {
	return <LayoutAdmin><SkillEdit /></LayoutAdmin>
}

SkillEditPage.isOnlyAdmin = true

export default SkillEditPage
