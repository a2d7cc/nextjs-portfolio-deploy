import Admin from '@/components/screens/Admin/Home/Admin'
import { NextPageAuth } from '@/providers/AuthProvider/auth.types'


const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
