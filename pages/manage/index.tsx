import LayoutAdmin from '@/components/layouts/admin/LayoutAdmin'
import AdminHome from '@/components/screens/Admin/Home/AdminHome'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'


const AdminPage: NextPageAuth = () => {
	return <LayoutAdmin><AdminHome /></LayoutAdmin>
}

AdminPage.isOnlyAdmin = true

export default AdminPage
