import { NextPageAuth } from '@/providers/AuthProvider/auth.types'


const AdminPage: NextPageAuth = () => {
	return <div>Admin</div>
}

AdminPage.isOnlyAdmin = true

export default AdminPage
