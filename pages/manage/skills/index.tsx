import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import SkillsList from '@/components/screens/Admin/Skills/SkillsList'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'

const SkillsListPage: NextPageAuth = () => {
	return <LayoutAdmin><SkillsList /></LayoutAdmin>
}

SkillsListPage.isOnlyAdmin = true

export default SkillsListPage
