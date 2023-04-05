import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'
import { getAdminUrlLink } from '@/configs/url.config'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useProjects } from './useProjects'
import Meta from '@/providers/HeadProvider/Meta/Meta'

const ProjectList: FC = () => {
	const { push } = useRouter()

	const {
		handleSearch,
		isLoading,
		searchTerm,
		createAsync,
		deleteAsync,
		data,
	} = useProjects()

	return (
		<Meta title="Projects">
			<AdminNavigation />
			<Heading title="Projects" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={() => push(getAdminUrlLink('project/create'))}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default ProjectList
