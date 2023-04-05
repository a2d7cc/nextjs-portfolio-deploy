import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import SkillCreate from '@/components/screens/Admin/Skill/SkillCreate'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const SkillCreatePage: NextPageAuth = () => {
	return <LayoutAdmin><SkillCreate /></LayoutAdmin>
}

SkillCreatePage.isOnlyAdmin = true

export default SkillCreatePage
