import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { IAdmin } from './Admin.interface'
import Statistics from './Statistics/Statistics'
import Meta from '@/providers/HeadProvider/Meta/Meta'

const Admin: FC<IAdmin> = () => {
	return <Meta title="Admin panel">
		<AdminNavigation />
		<Heading className="text-center" title='Statistics' /> 
		<Statistics />
	</Meta>
}

export default Admin
